"use client"
import React, { Fragment } from 'react';

// 폰트 설정
import { Great_Vibes, Marck_Script, PT_Serif } from 'next/font/google'
import { useSize } from 'ahooks';
import Connection from '@/components/layout/Connection';
const serif = PT_Serif({ subsets: ['latin'], weight: ['400','700']});
const marck = Marck_Script({ subsets: ['latin'], weight: ['400']});
const Components = () => {

    const size = useSize(document.body);
    const height = size ? size.width * 1.67 : 0;

    return (
        <Fragment>
            <div 
                className={`flex flex-col`}
                style={{
                    height: height,
                    backgroundImage: `url('https://kkotfarm-dev-ops.s3.ap-northeast-2.amazonaws.com/wedding/9.jpeg')`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}
            >
                <div className="p-4 flex items-center justify-between">
                    <p data-aos="fade-down" data-aos-duration="500" style={{color: 'rgba(255,255,255,0.85)'}} className={`${serif.className} text-xs font-bold`}>LEE YOON MIN</p>
                    <p data-aos="fade-down" data-aos-duration="500" style={{color: 'rgba(255,255,255,0.85)'}} className={`${serif.className} text-xs font-bold`}>KIM JOON HYEONG</p>
                </div>
                <div 
                    className="flex-1 flex flex-col items-center justify-end pb-20"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.0) 60%, rgba(0,0,0,0.4) 100%)'
                    }}
                >
                    <p className={`${marck.className} text-5xl text-amber-300`} >Always</p>
                    <p className={`${marck.className} text-5xl mt-2 text-amber-300`} >Be With You</p>
                    <p className={`${marck.className} text-2xl mt-4 text-amber-300`} >2025.03.29 14:00</p>
                </div>
            </div>
            <div className="w-full h-4 absolute z-10 -translate-y-4" >
                <Connection color="#F4EDDB" />
            </div>
        </Fragment>
    )
}

export default React.memo(Components);