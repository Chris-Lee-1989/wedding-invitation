// AWS S3 설정
import { S3Client, DeleteObjectCommand, PutObjectCommand, ListObjectsV2Command, CopyObjectCommand } from "@aws-sdk/client-s3";
import dayjs from "dayjs";

const Bucket = 'kkotfarm-dev-ops';
const s3 = new S3Client({
    region: 'ap-northeast-2',
    credentials: {
        accessKeyId: 'AKIATVCZRTCQQGNLW4Z7',
        secretAccessKey: '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',
    },
});


// File로 업로드
interface OnUploadS3ByFileProps {
    file: File;
    path: string;
    fileName?: string;
}
export const onUploadS3ByFile = async ({ file, path, fileName }: OnUploadS3ByFileProps) => {
    const arrayBuffer = await file.arrayBuffer();
    const body = Buffer.from(arrayBuffer);
    const ext = file.name.split('.')[file.name.split('.').length - 1];
    if (!fileName) fileName = dayjs().format('YYYYMMDDHHmmssSSS');
    const Key = `${path}/${fileName}.${ext}`;
    const res = await s3.send(
        new PutObjectCommand({ 
            Bucket, 
            Key, 
            Body: body, 
            ACL: 'public-read',
        })
    );
    return {
        ...res,
        location: `https://${Bucket}.s3.ap-northeast-2.amazonaws.com/${Key}`,
    }
}

// path로 삭제
interface onDeleteS3Props {
    location: string;
}
export const onDeleteS3 = async ({ location }: onDeleteS3Props) => {
    const Key = location.replace(`https://${Bucket}.s3.ap-northeast-2.amazonaws.com/`, "");
    return await s3.send(new DeleteObjectCommand({ Bucket, Key }));
}