"use client"
import React, { Fragment, useLayoutEffect, useState } from 'react';
// 폰트 설정
import { Noto_Sans_KR, Noto_Serif_KR, Great_Vibes } from 'next/font/google'
import { Button } from 'antd';
const greatVibes = Great_Vibes({ subsets: ['latin'], weight: '400'});
import { LuMapPin } from "react-icons/lu";
import { BsTelephone } from "react-icons/bs";
import { initMap } from '@/modules/map';

const Components = () => {

    const handleCall = (phoneNumber: string) => {
        window.location.href = `tel:${phoneNumber}`;
    };

    const handleMap = () => {
        window.open('https://naver.me/GDa2dNJP');
    };

    // 현 위치 조회
    useLayoutEffect(() => {
        initMap({lat: 37.511183, lng: 127.03153});
    }, []);

    return (
        <Fragment>
            <div className="w-dvw flex flex-col items-center bg-white justify-center" style={{paddingTop: 128}}>
                <p className={`text-4xl text-amber-500 ${greatVibes.className}`} style={{marginBottom: 32}}>Location</p>
                <div className='flex flex-col items-center gap-2 mb-12'>
                    <p className="font-bold">엘리에나 호텔 컨벤션홀 2층</p>
                    <p className="text-sm">(06116) 서울 강남구 논현로645번길</p>
                    <p className="text-sm">02-3443-5670</p>
                    <div className="flex gap-4 mt-4">
                        <Button onClick={() => handleMap()} type="text" icon={<LuMapPin />}>지도</Button>
                        <Button onClick={() => handleCall('0234435670')} type="text" icon={<BsTelephone />}>전화</Button>
                    </div>
                </div>
                <div id="map" className="bg-slate-100 flex items-center justify-center" style={{ width: '100dvw', height: '100dvw'}}>
                    <p className="text-sm text-slate-400">지도</p>
                </div>
            </div>
        </Fragment>
    )
}

export default React.memo(Components);