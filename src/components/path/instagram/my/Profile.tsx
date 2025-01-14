"use client"
import { Button, Image } from 'antd';
import React, { Fragment } from 'react';

const Components = () => {
    return (
        <Fragment>  
            <div className="flex">
                <div className="p-4 w-28">
                    <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center">
                        <Image 
                            preview={false} 
                            src="https://kkotfarm-dev-ops.s3.ap-northeast-2.amazonaws.com/wedding/18.jpeg"
                            style={{width: 74, height: 74, borderRadius: '100%', objectFit: 'cover'}}
                        />
                    </div>
                </div>
                <div className="flex-1 flex justify-center items-center pr-8">
                    <div className="flex flex-col flex-1 items-center">
                        <p className="font-bold text-lg">200</p>
                        <p className="text-sm">게시물</p>
                    </div>
                    <div className="flex flex-col flex-1 items-center">
                        <p className="font-bold text-lg">112</p>
                        <p className="text-sm">방문자</p>
                    </div>
                    <div className="flex flex-col flex-1 items-center">
                        <p className="font-bold text-lg">119</p>
                        <p className="text-sm">좋아요</p>
                    </div>
                    {/* <p className="text font-bold">Wedding Invitation</p> */}
                    {/* leeyoonmini ❣ masterpiece9002 */}
                </div>
            </div>
            <div className="flex flex-col px-4 pt-4">
                <p className="text-sm">신랑 이윤민 ♥️ 신부 김준형</p>
                <p className="text-sm mt-2">2025.03.29 SAT PM 14:00</p>

                <div className="flex items-center">
                    <p className="text-sm">엘리에나호텔</p>
                    <p className="text-sm text-slate-200">ㅣ</p>
                    <p className="text-sm">컨벤션홀 2층</p>
                </div>

                <p className="text-sm mt-2">즐거운 마음으로 오셔서</p>
                <p className="text-sm">축하해주세요.</p>

                <p className="text-sm mt-2">흐뭇하실 수 있도록 잘 살겠습니다.</p>

                <div>
                    <Button type="text" size="small" style={{padding: 0}}>
                        <p className="text-slate-400">더보기</p>
                    </Button>
                </div>
            </div>
        </Fragment>
    )
}

export default React.memo(Components);