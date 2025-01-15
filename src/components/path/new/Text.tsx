"use client"
import React, { Fragment } from 'react';

// 폰트 설정
import { Parisienne, Noto_Serif_KR, Gowun_Dodum } from 'next/font/google'
import { Button, Drawer } from 'antd';
const serif = Noto_Serif_KR({ subsets: ['latin'], weight: ['200', '300', '400', '500', '600', '700', '900']});
const gowun = Gowun_Dodum({ subsets: ['latin'], weight: ['400']});
const parisienne = Parisienne({ subsets: ['latin'], weight: ['400']});  
import { BsTelephone } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { GiHeartKey } from "react-icons/gi";
import { BsEnvelopePaperHeart } from "react-icons/bs";
import { PiListHeartThin } from "react-icons/pi";
import { PiFlowerTulip } from "react-icons/pi";
import { GiVanillaFlower } from "react-icons/gi";
import Connection from '@/components/layout/Connection';

const Components = () => {

    const [drawer, setDrawer] = React.useState<boolean>(false);

    

    return (
        <Fragment>
            <div 
                className={`w-full ${gowun.className} flex flex-col items-center pb-32`}
                style={{background: '#F4EDDB'}}
            >
                {/* 이쁜 글귀 */}
                <div className="flex flex-col">
                    <div className="flex justify-center mt-16 mb-8">
                        <PiFlowerTulip className="text-red-200" />
                    </div>
                    <p data-aos="fade-up" data-aos-duration="800" className="text-sm text-slate-800 border-b border-b-red-200 py-1.5">같은 생각, 같은 느낌.</p>
                    <p data-aos="fade-up" data-aos-duration="800" className="text-sm text-slate-800 border-b border-b-red-200 py-1.5">나 자신을 바라보는 듯한 편안함.</p>
                    <p data-aos="fade-up" data-aos-duration="800" className="text-sm text-slate-800 border-b border-b-red-200 py-1.5">그런 사람이 내 곁에서</p>
                    <p data-aos="fade-up" data-aos-duration="800" className="text-sm text-slate-800 border-b border-b-red-200 py-1.5">나를 바라보고 있다는 것.</p>
                    <p data-aos="fade-up" data-aos-duration="800" className="text-sm text-slate-800 border-b border-b-red-200 py-1.5">나를 믿어주고,</p>
                    <p data-aos="fade-up" data-aos-duration="800" className="text-sm text-slate-800 border-b border-b-red-200 py-1.5">내 편이 되어준다는 것이 참 좋습니다.</p>
                    <p data-aos="fade-up" data-aos-duration="800" className="text-sm text-slate-800 border-b border-b-red-200 py-1.5">그래서 많이 행복합니다.</p>
                    <p data-aos="fade-up" data-aos-duration="800" className="text-sm text-slate-800 border-b border-b-red-200 py-1.5">꼭 오셔서 축복해 주십시오.</p>
                    <p data-aos="fade-up" data-aos-duration="800" className="text-sm text-slate-800 border-b border-b-red-200 py-1.5">흐뭇하실 수 있도록 잘 살겠습니다.</p>
                </div>

                <div className="my-16 text-rose-300" data-aos="fade-up" data-aos-duration="800">
                    <p className={`${parisienne.className} text-xl`}>Invite You</p>
                </div>

                {/* 연락처 */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center" data-aos="fade-up" data-aos-duration="800">
                        <p className="text-slate-900 font-bold">이상호</p>
                        <div className="text-slate-900 rounded-full w-0.5 h-0.5 bg-gray-950 mx-2"/>
                        <p className="text-slate-900 font-bold">정월순</p>
                        <p className="text-slate-900 ml-2">의</p>
                        <p className="text-slate-900 w-12 text-center">아들</p>
                        <p className="text-slate-900 font-bold">윤민</p>
                    </div>
                    <div className="flex items-center" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                        <p className="text-slate-900 font-bold">김복규</p>
                        <div className="text-slate-900 rounded-full w-0.5 h-0.5 bg-gray-950 mx-2"/>
                        <p className="text-slate-900 font-bold">김선자</p>
                        <p className="text-slate-900 ml-2">의</p>
                        <p className="text-slate-900 w-12 text-center">딸</p>
                        <p className="text-slate-900 font-bold">준형</p>
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-duration="800" className="mt-16 w-full flex justify-center">
                    <Button style={{width: '40%', borderColor: '#EEE', borderRadius: 4}} onClick={() => setDrawer(true)}>
                        <p className={`${gowun.className} text-sm`}>연락하기</p>
                    </Button>
                </div>

            </div>
            <div className="w-full h-4 absolute z-10 -translate-y-4" >
                <Connection color="#f9fafb" />
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
                        background: '#f9f9f9',
                        paddingBottom: 40
                    }
                }}
            >
                <div className="flex flex-col items-center justify-center h-2 gap-px bg-slate-100">
                    <div className="w-4 h-px bg-slate-400" />
                    <div className="w-4 h-px bg-slate-400" />
                </div>
                <div className={`flex flex-col p-4 gap-4 ${gowun.className}`}>
                    <div className="flex justify-center py-2">
                        <p className="text-slate-800 text-lg">연락처</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-1">
                            <Card type="신랑" name="이윤민" tel="01084244558" />
                        </div>
                        <div className="flex-1">
                            <Card type="신부" name="김준형" tel="01044407223" />
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-1">
                            <Card type="신랑 아버지" name="이상호" tel="01084244558" />
                        </div>
                        <div className="flex-1">
                            <Card type="신부 아버지" name="김복규" tel="01044407223" />
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-1">
                            <Card type="신랑 어머니" name="정월순" tel="01084244558" />
                        </div>
                        <div className="flex-1">
                            <Card type="신부 어머니" name="김선자" tel="01044407223" />
                        </div>
                    </div>
                </div>
            </Drawer>
        </Fragment>
    )
}

interface CardProps {
    type: string;
    name: string;
    tel: string;
}
const Card = ({ type, name, tel }: CardProps) => {

    const handleCall = (phoneNumber: string) => {
        window.location.href = `tel:${phoneNumber}`;
    };

    const handleMessage = (phoneNumber: string) => {
        window.location.href = `sms:${phoneNumber}`;
    };

    return (
        <div className={`${gowun.className} flex flex-col border border-slate-100 rounded-md shadow-sm bg-white`}>
            <div className="flex gap-2 p-2 items-center justify-center">
                <p className="text-xs">{type}</p>
                <p className="text-xs font-bold">{name}</p>
            </div>
            <div className="flex border-t border-t-slate-100">
                <div 
                    className="flex-1 flex items-center justify-center py-2 border-r border-r-slate-100 transition-all duration-100 active:bg-slate-100"
                    onClick={() => handleCall(tel)}
                >
                    <BsTelephone className="text-slate-500" />
                </div>
                <div 
                    className="flex-1 flex items-center justify-center py-2 transition-all duration-100 active:bg-slate-100"
                    onClick={() => handleMessage(tel)}
                >
                    <BsEnvelope className="text-slate-500" />
                </div>
            </div>
        </div>
    )
}

export default React.memo(Components);