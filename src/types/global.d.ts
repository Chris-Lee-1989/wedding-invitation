import { Address } from "react-daum-postcode";

declare global {

    interface ParamsType {
        method: string;
        apiNM: string;
        uri: string;
        status?: number;
        data?: any;
        error?: any;
    }

    interface CodeType {
        rowKey: number;
        codeName : string;
        code: string;
        color: string;
        text: string;
        updateDate: string;
        insertDate: string;
    }

    interface FeedType {
        rowKey: string;
        sort: string;
        id: string;
        feedImage: string;
        profileImage: string;
        content: string;
        tags: string;
    }
}
  
export {};