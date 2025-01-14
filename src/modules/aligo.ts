import axios from "axios";
import FormData from 'form-data';

const key = 'aeol795shmwl6xhkz988rkx0mlq635kp';
const user_id = 'mellia';
const sender = '01093555545';

interface SendSMSProps {
    receiver: string;
    msg: string;
}

interface AligoSuccessResType {
    message: 'success';
    result_code: '1';
    msg_id: string;
    success_cnt: number;
    error_cnt: number;
    msg_type: 'SMS'
}

interface AligoFailResType {
    message: 'fail';
    result_code: '1';
    msg_id: string;
    success_cnt: number;
    error_cnt: number;
    msg_type: 'SMS'
}

type AligoResType = AligoSuccessResType | AligoFailResType;

// 문자메시지 전송
const sendSMS = async ({receiver, msg} : SendSMSProps): Promise<AligoResType> => {

    const formdata = new FormData();
    formdata.append('key', key);
    formdata.append('user_id', user_id);
    formdata.append('sender', sender);
    formdata.append('receiver', receiver);
    formdata.append('msg', msg);

    const aligoRes = await axios.post('https://apis.aligo.in/send/', formdata);
    
    const { data } : {data: AligoResType} = aligoRes;
    return data;
}

type AligoType = JoinType | PaymentType | PaymentCancelType | DeliveryType;

// 회원가입
interface JoinType {
    templateKey: "TM_8829";
    params: {
        receiverTel: string;
        userName: string;
    }
}

// 결제완료
interface PaymentType {
    templateKey: "TM_8830";
    params: {
        receiverTel: string;
        userName: string;
        orderAmount: string;
        orderDate: string;
        orderTitle: string;
        orderKey: string;
    }
}

// 결제취소
interface PaymentCancelType {
    templateKey: "TM_8831";
    params: {
        receiverTel: string;
        userName: string;
        cancelAmount: string;
        cancelDate: string;
        orderTitle: string;
        orderKey: string;
    }
}

// 결제완료
interface DeliveryType {
    templateKey: "TM_8832";
    params: {
        receiverTel: string;
        orderTitle: string;
        courier: string;
        invoice: string;
        orderKey: string;
    }
}

const sendAligo = async (params: AligoType) => {

    const auth = {
		key: "iu936wrluyowx561u6c9yxywpwisxzrm",
        user_id: "flowerfarm",
	}

    try {

        // Axios 객체 생성
        const defaultClient = axios.create({
            baseURL: process.env.NODE_ENV === "production" ? 'https://sms.d-leaf.kr' : "http://localhost:8081",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json; charset=utf-8',
                'Cache': 'no-cache',
            },
        });

        // 발송요청
        const res = await defaultClient.post(`/v1/aligo/gonggu`, {...params, auth});
        
        return {
            result: "success",
            message: res.data.message
        };

    } catch (error: any) {
        console.error(error.response);
        return {
            result: "fail"
        };
    }
}



interface GetTemplateProps {
    templateKey?: string;
    type: 'kkotfarm' | 'dleaf';
}

const getTemplateList = async ({ templateKey, type }: GetTemplateProps) => {

    const auth = {
		key: "iu936wrluyowx561u6c9yxywpwisxzrm",
        user_id: "flowerfarm"
	}

    try {
        // Axios 객체 생성
        const defaultClient = axios.create({
            baseURL: process.env.NODE_ENV === "production" ? 'https://sms.d-leaf.kr' : "http://localhost:8081",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json; charset=utf-8',
                'Cache': 'no-cache',
            },
            params: {
                auth,
                type,
                templateKey,
            },
        });

        // 발송요청
        const res = await defaultClient.get(`/v1/aligo/gonggu/template`);
        return res.data;

    } catch (error: any) {
        console.error(error.response);
        return {
            result: "fail"
        };
    }
}


export default {
    getTemplateList,
    sendSMS,
    sendAligo,
};