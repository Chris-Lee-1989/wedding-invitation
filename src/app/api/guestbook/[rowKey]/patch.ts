import pool from "@/configs/database";
import errorHandler from "@/modules/errorHandler";
import successHandler from "@/modules/successHandler";
import { onVerify } from "@/modules/verify";
import { type NextRequest } from 'next/server'
import { cryptoKey } from '@/configs/keys'
import bcrypt from 'bcrypt';
import crypto from "crypto-js";


// 설정
const apiName = "";

const api = async (request: NextRequest, { params: { rowKey }}: {params: {rowKey: string}}) => {

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

        // 바티
        const body = await request.json();
        const { name, content, password } = body;

        if (!name) {
            apiParams.status = 400;
            throw new Error('이름을 입력해주세요.');
        }

        if (!content) {
            apiParams.status = 400;
            throw new Error('내용을 입력해주세요.');
        }

        if (!password) {
            apiParams.status = 400;
            throw new Error('비밀번호를 입력해주세요.');
        }

        // 복호화
        const _name = crypto.AES.decrypt(name, cryptoKey).toString(crypto.enc.Utf8);
        const _content = crypto.AES.decrypt(content, cryptoKey).toString(crypto.enc.Utf8);
        const _password = crypto.AES.decrypt(password, cryptoKey).toString(crypto.enc.Utf8);

        const sql1 = `
            SELECT *
              FROM guest_book_tb
             WHERE rowKey = ${conn.escape(rowKey)}
        `;
        const select1 = await conn.query(sql1);
        const dataSet = select1[0][0];
        if (!dataSet) {
            apiParams.status = 404;
            throw new Error('데이터가 없습니다.');
        }
        const isPass = bcrypt.compareSync(_password, dataSet.password)
        if (!isPass) {
            apiParams.status = 400;
            throw new Error('비밀번호가 일치하지 않습니다.');
        }

        // user-agent 정보 조회
        const userAgent = request.headers.get('user-agent');
        if (!userAgent) {
            apiParams.status = 400;
            throw new Error('User-Agent 정보를 확인할 수 없습니다.');
        }

        const sql2 = `
            UPDATE guest_book_tb
               SET name = ${conn.escape(_name)},
                   content = ${conn.escape(_content)},
                   userAgent = ${conn.escape(userAgent)}
             WHERE rowKey = ${conn.escape(rowKey)}
        `;
        await conn.query(sql2);
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