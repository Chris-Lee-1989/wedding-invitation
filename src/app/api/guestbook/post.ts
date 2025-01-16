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

        // 바디
        const body = await request.json();
        const { title, content, password } = body;
        
        if (!title) {
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
        const _title = crypto.AES.decrypt(title, cryptoKey).toString(crypto.enc.Utf8);
        const _content = crypto.AES.decrypt(content, cryptoKey).toString(crypto.enc.Utf8);
        const _password = crypto.AES.decrypt(password, cryptoKey).toString(crypto.enc.Utf8);

        // user-agent 정보 조회
        const userAgent = request.headers.get('user-agent');
        if (!userAgent) {
            apiParams.status = 400;
            throw new Error('User-Agent 정보를 확인할 수 없습니다.');
        }

        const hash = await bcrypt.hash(_password, 10);

        const sql1 = `
            INSERT INTO guest_book_tb (
                password
                , name
                , content
                , userAgent
                , insertDate
            ) VALUES (
                ${conn.escape(hash)}
                , ${conn.escape(_title)}
                , ${conn.escape(_content)}
                , ${conn.escape(userAgent)}
                , NOW()+0
            )
        `;
        await conn.query(sql1);
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