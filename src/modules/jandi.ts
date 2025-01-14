import axios from 'axios';

// 오롯이 클라이언트 에러 발생
export const sendClientErrorMessage = async (message: string) => {
    try {
        const params = {
            body: '오롯이 Client Error',
            connectColor: '#ef4444',
            connectInfo: [
                {
                    title: 'Error:',
                    description: message,
                }
            ]
        }
    
        // Axios 객체 생성
        const defaultClient = axios.create({
            baseURL: 'https://wh.jandi.com',
            headers: {
                'Accept': 'application/vnd.tosslab.jandi-v2+json',
                'Content-Type': 'application/json',
                'Cache': 'no-cache'
            }
        });
        defaultClient.post('/connect-api/webhook/19741686/5638efb13894bb61e7a3da01259b7775', params)
    }
    catch (error) {
        console.error(error);
    }
}

// 오롯이 정보 잔디 알림
export const sendInfo = async (title: string, message: string) => {
    try {
        const params = {
            body: '오롯이',
            connectColor: "#DF4E81",
            connectInfo: [
                {
                    title: 'Error:',
                    description: message,
                }
            ]
        }
    
        // Axios 객체 생성
        const defaultClient = axios.create({
            baseURL: 'https://wh.jandi.com',
            headers: {
                'Accept': 'application/vnd.tosslab.jandi-v2+json',
                'Content-Type': 'application/json',
                'Cache': 'no-cache'
            }
        });
        defaultClient.post('/connect-api/webhook/19741686/71b8b58f54a2c53185c314905b333660', params)
    }
    catch (error) {
        console.error(error);
    }
}