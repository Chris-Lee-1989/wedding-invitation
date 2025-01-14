"use client"
import { Button, message } from 'antd';
import React, { Fragment } from 'react';
import { GoCopy } from "react-icons/go";

const Components = () => {

    const [messageApi, contextHolder] = message.useMessage();

    const [drawer, setDrawer] = React.useState<{open:boolean; type: '01'|'02'}>({open: false, type: '01'});

    const onClickCopyButton = (accountsNum: string) => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(accountsNum).then(() => {
                messageApi.success('계좌번호가 복사되었습니다.');
            }).catch(err => {
                console.error('Failed to copy: ', err);
                messageApi.error('복사에 실패했습니다.');
            });
        } else {
            const textArea = document.createElement("textarea");
            textArea.value = accountsNum;
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            try {
                document.execCommand('copy');
                messageApi.success('계좌번호가 복사되었습니다.');
            } catch (err) {
                console.error('Failed to copy: ', err);
                messageApi.error('복사에 실패했습니다.');
            }
            document.body.removeChild(textArea);
        }
    }

    return (
        <Fragment>
            {contextHolder}
            <div className="w-dvw flex flex-col items-center bg-slate-50 justify-center px-12" style={{paddingTop: 128, paddingBottom: 128}}>
                <p className="text-lg">신랑 & 신부에게 마음 전하기</p>
                <p className="text-xs mt-1 text-slate-400">축복의 의미로 축의금을 전달해보세요.</p>
                <div className="mt-12 border border-slate-200 w-full p-3 rounded-sm shadow-sm flex flex-col gap-2 bg-white">
                    <p className="text-sm font-bold">신랑측</p>
                    <div className="flex items-center gap-2">
                        <p className="text-sm">부산은행 이윤민 112-2185-5008-07</p>
                        <Button onClick={() => onClickCopyButton('1122185500807')} type="text" size="small" icon={<GoCopy />} />
                    </div>
                </div>
                <div className="mt-2 border border-slate-200 w-full p-3 rounded-sm shadow-sm flex flex-col gap-2 bg-white">
                    <p className="text-sm font-bold">신부측</p>
                    <div className="flex items-center gap-2">
                        <p className="text-sm">국민은행 김준형 722702-00-068946</p>
                        <Button onClick={() => onClickCopyButton('72270200068946')} type="text" size="small" icon={<GoCopy />} />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default React.memo(Components);