"use client"
import React, { Fragment } from 'react';

// 폰트 설정
import { Noto_Sans_KR, Noto_Serif_KR, Great_Vibes } from 'next/font/google'
import { BsFillBalloonHeartFill } from 'react-icons/bs';
import { Button, Drawer } from 'antd';
const serif = Noto_Serif_KR({ subsets: ['latin'], weight: ['200', '300', '400', '500', '600', '700', '900']});
const notoSans = Noto_Sans_KR({ subsets: ['latin'], weight: ['200', '300', '400', '500', '600', '700', '900']});
import { BsTelephone } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";

const Components = () => {

    const [drawer, setDrawer] = React.useState<boolean>(false);

    return (
        <Fragment>
            <div 
                className={`heart-bg w-dvw h-dvh bg-slate-100 ${serif.className} flex flex-col items-center justify-center gap-2`}
            >
                <p className="text-lg text-slate-800">같은 생각, 같은 느낌.</p>
                <p className="text-lg text-slate-800">나 자신을 바라보는 듯한 편안함.</p>
                <p className="text-lg text-slate-800">그런 사람이 내 곁에서</p>
                <p className="text-lg text-slate-800">나를 바라보고 있다는 것.</p>
                <p className="text-lg text-slate-800">나를 믿어주고,</p>
                <p className="text-lg text-slate-800">내 편이 되어준다는 것이 참 좋습니다.</p>
                <p className="text-lg text-slate-800">그래서 많이 행복합니다.</p>
                <p className="text-lg text-slate-800">꼭 오셔서 축복해 주십시오.</p>
                <p className="text-lg text-slate-800">흐뭇하실 수 있도록 잘 살겠습니다.</p>
                <div className={`w-full mt-8 px-4`}>
                    <div className="flex pt-8 px-4 items-center">
                        <div className='flex-1 flex flex-col items-center'>
                            <p className="text-sm mb-1 text-slate-600">신랑</p>
                            <p className="text-2xl">이윤민</p>
                        </div>
                        <div>
                            <BsFillBalloonHeartFill className="text-rose-500"  />
                        </div>
                        <div className='flex-1 flex flex-col items-center'>
                            <p className="text-sm mb-1 text-slate-600">신부</p>
                            <p className="text-2xl">김준형</p>
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <div 
                        className="border border-slate-100 h-10 px-6 bg-white flex items-center justify-center shadow-sm rounded-lg transition-all duration-150 active:border-slate-300"
                        onClick={() => setDrawer(true)}
                    >
                        <p className="mb-1 text-sm text-slate-600">연락처 보기</p>
                    </div>
                </div>
            </div>
            <Drawer
                closable={false}
                open={drawer}
                onClose={() => setDrawer(false)}
                placement='bottom'
                height='auto'
                styles={{
                    body: {
                        padding: 0, 
                    }
                }}
            >
                <div className="flex flex-col items-center justify-center h-2 gap-px bg-slate-100">
                    <div className="w-4 h-px bg-slate-400" />
                    <div className="w-4 h-px bg-slate-400" />
                </div>
                <div className="flex items-center border-b border-slate-200">
                    <div className="flex items-center gap-2 p-4">
                        <p className="text-slate-500 w-12">신랑</p>
                        <p className="text-slate-800">이윤민</p>
                    </div>
                    <div className="flex-1 flex justify-end gap-2 pr-2">
                        <Button icon={<BsTelephone style={{fontSize: 12}} />} size="middle">전화</Button>
                        <Button icon={<BsEnvelope style={{fontSize: 12}} />} size="middle">문자</Button>
                    </div>
                </div>
                <div className="flex items-center border-b border-slate-200">
                    <div className="flex items-center gap-2 p-4">
                        <p className="text-slate-500 w-12">신랑 부</p>
                        <p className="text-slate-800">이상호</p>
                    </div>
                    <div className="flex-1 flex justify-end gap-2 pr-2">
                        <Button icon={<BsTelephone style={{fontSize: 12}} />} size="middle">전화</Button>
                        <Button icon={<BsEnvelope style={{fontSize: 12}} />} size="middle">문자</Button>
                    </div>
                </div>
                <div className="flex items-center border-b border-slate-200">
                    <div className="flex items-center gap-2 p-4">
                        <p className="text-slate-500 w-12">신랑 모</p>
                        <p className="text-slate-800">정월순</p>
                    </div>
                    <div className="flex-1 flex justify-end gap-2 pr-2">
                        <Button icon={<BsTelephone style={{fontSize: 12}} />} size="middle">전화</Button>
                        <Button icon={<BsEnvelope style={{fontSize: 12}} />} size="middle">문자</Button>
                    </div>
                </div>
                <div className="flex items-center border-b border-slate-200">
                    <div className="flex items-center gap-2 p-4">
                        <p className="text-slate-500 w-12">신부</p>
                        <p className="text-slate-800">김준형</p>
                    </div>
                    <div className="flex-1 flex justify-end gap-2 pr-2">
                        <Button icon={<BsTelephone style={{fontSize: 12}} />} size="middle">전화</Button>
                        <Button icon={<BsEnvelope style={{fontSize: 12}} />} size="middle">문자</Button>
                    </div>
                </div>
                <div className="flex items-center border-b border-slate-200">
                    <div className="flex items-center gap-2 p-4">
                        <p className="text-slate-500 w-12">신부 부</p>
                        <p className="text-slate-800">김복규</p>
                    </div>
                    <div className="flex-1 flex justify-end gap-2 pr-2">
                        <Button icon={<BsTelephone style={{fontSize: 12}} />} size="middle">전화</Button>
                        <Button icon={<BsEnvelope style={{fontSize: 12}} />} size="middle">문자</Button>
                    </div>
                </div>
                <div className="flex items-center border-b border-slate-200">
                    <div className="flex items-center gap-2 p-4">
                        <p className="text-slate-500 w-12">신부 모</p>
                        <p className="text-slate-800">김선자</p>
                    </div>
                    <div className="flex-1 flex justify-end gap-2 pr-2">
                        <Button icon={<BsTelephone style={{fontSize: 12}} />} size="middle">전화</Button>
                        <Button icon={<BsEnvelope style={{fontSize: 12}} />} size="middle">문자</Button>
                    </div>
                </div>
            </Drawer>
        </Fragment>
    )
}

export default React.memo(Components);