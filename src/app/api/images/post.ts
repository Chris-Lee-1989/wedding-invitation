import pool from "@/configs/database";
import errorHandler from "@/modules/errorHandler";
import { convertWebpAndUpload, onUploadS3ByFile } from "@/modules/imageController";
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

        // 폼
        const form = await request.formData();
        const type = form.get('type') as string;
        const file = form.get('file') as File;
        const sort = form.get('sort') as string;

        if (!type || !['01','02','03','04','05'].includes(type)) {
            apiParams.status = 400;
            throw new Error('type is required.');
        }

        if (!file) {
            apiParams.status = 400;
            throw new Error('file is required.');
        }

        const resS3 = await convertWebpAndUpload(file);
        // 갤러리 일 경우
        if (type === '03') {

            const sql2 = `
                SELECT CASE WHEN MAX(sort) IS NULL THEN 0 ELSE MAX(sort) + 1 END AS sort
                  FROM images_tb
                 WHERE type = '03'
            `;
            const select2 = await conn.query(sql2);
            const sort = select2[0][0]?.sort||0;

            const sql1 = `
                INSERT INTO images_tb (
                    type
                    , url
                    , sort
                ) VALUES (
                    ${conn.escape(type)} 
                    , ${conn.escape(resS3.location)}
                    , ${conn.escape(sort ? sort : '0')}
                )
            `;
            await conn.query(sql1);
            
        }
        // 갤러리 제외 나머지
        else {
            const sql2 = `
                SELECT *
                FROM images_tb
                WHERE type = ${conn.escape(type)}
                AND sort = ${conn.escape(sort ? sort : '0')}
            `;
            const select2 = await conn.query(sql2);
            const rows = select2[0];

            if (rows.length > 0) {
                const sql1 = `
                    UPDATE images_tb
                    SET url = ${conn.escape(resS3.location)}
                        , sort = ${conn.escape(sort ? sort : '0')}
                    WHERE type = ${conn.escape(type)}
                `;
                await conn.query(sql1);
            } else {
                const sql1 = `
                    INSERT INTO images_tb (
                        type
                        , url
                        , sort
                    ) VALUES (
                        ${conn.escape(type)} 
                        , ${conn.escape(resS3.location)}
                        , ${conn.escape(sort ? sort : '0')}
                    )
                `;
                await conn.query(sql1);
            }
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