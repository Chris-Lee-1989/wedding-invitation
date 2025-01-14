import pool from "@/configs/database";
import errorHandler from "@/modules/errorHandler";
import { onUploadS3ByFile } from "@/modules/imageController";
import successHandler from "@/modules/successHandler";
import { onVerify } from "@/modules/verify";
import { type NextRequest } from 'next/server'

// 설정
const apiName = "";

const api = async (request: NextRequest) => {

    const apiParams: ParamsType = {
        apiNM: apiName, 
        uri: request.url,
        method: request.method
    }

    // DB 연결
    const conn = await pool.getConnection();

    try {

        // 권한 체크
        await onVerify(apiParams);

        // 쿼리
        // const searchParams = request.nextUrl.searchParams;
        // const keyword = searchParams.get('keyword');

        // 바디
        // const body = await request.json();

        // 폼
        const form = await request.formData();
        const type = form.get('type');
        const id = form.get('id');
        const content = form.get('content');
        const tags = form.get('tags');
        const profile = form.get('profile') as File;
        const feed = form.get('feed') as File;

        

        if (!type) {
            apiParams.status = 400;
            throw new Error('type가 없습니다.');
        }

        if (type === '1') {
            if (!id) {
                apiParams.status = 400;
                throw new Error('id가 없습니다.');
            }
            if (!profile) {
                apiParams.status = 400;
                throw new Error('profile가 없습니다.');
            }
        }

        if (!content) {
            apiParams.status = 400;
            throw new Error('content가 없습니다.');
        }

        if (!tags) {
            apiParams.status = 400;
            throw new Error('tags가 없습니다.');
        }

        if (!feed) {
            apiParams.status = 400;
            throw new Error('feed가 없습니다.');
        }
        
        await conn.beginTransaction();
        const sql1 = `
            INSERT INTO feeds_tb (
                id
                , type
                , content
                , tags
            ) VALUES (
                ${conn.escape(id)}
                , ${conn.escape(type)}
                , ${conn.escape(content)}
                , ${conn.escape(tags)}
            )
        `;
        const insert1 = await conn.query(sql1);
        const rowKey = insert1[0].insertId;

        let location1 = '';
        let location2 = '';
        if (type === '1') {
            const res1 = await onUploadS3ByFile({
                file: profile, 
                path: 'wedding/profile', 
            });
            location1 = res1.location;
        }
        

        const res2 = await onUploadS3ByFile({
            file: feed, 
            path: 'wedding/feeds',
        });
        location2 = res2.location;
        
        if (type === '1') {
            const sql2 = `
                UPDATE feeds_tb
                SET profileImage = ${conn.escape(location1)}
                    , feedImage = ${conn.escape(location2)}
                WHERE rowKey = ${conn.escape(rowKey)}
            `;
            await conn.query(sql2);
        } else {
            const sql2 = `
                UPDATE feeds_tb
                SET feedImage = ${conn.escape(location2)}
                WHERE rowKey = ${conn.escape(rowKey)}
            `;
            await conn.query(sql2);
        }

        
        
        await conn.commit();

        // 최종 결과
        apiParams.data = {
            success: true,
        }

        // 결과 전달
        return successHandler(apiParams);

    }

    catch (error: any) {
        await conn.rollback();
        apiParams.error = error;
        apiParams.status = apiParams.status ? apiParams.status : 500;
        apiParams.data = apiParams.data ? apiParams.data : { message: apiParams.status !== 500 ? error.message : '시스템 오류가 발생했습니다.' };
        return errorHandler(apiParams);
    }

    finally {
        await conn.release();
    }
    
}

export default api;