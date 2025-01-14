import pool from "@/configs/database";
import errorHandler from "@/modules/errorHandler";
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
        const searchParams = request.nextUrl.searchParams;
        const type = searchParams.get('type');

        const sql1 = `
            SELECT *
              FROM feeds_tb
             WHERE 1=1
               AND type = ${type ? conn.escape(type) : '1'}
             ORDER BY sort DESC
        `;
        const select1 = await conn.query(sql1);
        const dataSet = select1[0];

        // 최종 결과
        apiParams.data = {
            success: true,
            dataSet,
        }

        // 결과 전달
        return successHandler(apiParams);

    }

    catch (error: any) {
        console.log(error)
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