"use client"
import React, { Fragment } from 'react';

// 폰트 설정
import { Noto_Sans_KR, Noto_Serif_KR, Great_Vibes } from 'next/font/google'
const greatVibes = Great_Vibes({ subsets: ['latin'], weight: '400'});

const Components = () => {
    return (
        <Fragment>
            <div 
                className={``}
                style={{
                    width: '100dvw',
                    height: '100dvh',
                    backgroundImage: `url('https://kkotfarm-dev-ops.s3.ap-northeast-2.amazonaws.com/wedding/9.jpeg')`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}
            >
                <div className="flex flex-col justify-center items-center pt-16 gap-3" data-aos="fade-down" data-aos-delay="500" data-aos-once="false">
                    <p className={`text-5xl ${greatVibes.className}`} style={{color: 'rgba(255,255,255,0.9)'}}>Wedding Invitation</p>
                    <p className={`text-3xl ${greatVibes.className}`} style={{color: 'rgba(255,255,255,0.9)'}}>2025.03.29</p>
                </div>
            </div>
        </Fragment>
    )
}

export default React.memo(Components);