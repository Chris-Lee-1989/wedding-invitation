"use client"
import React, { Fragment } from 'react';

// 폰트 설정
import { Noto_Sans_KR, Noto_Serif_KR, Great_Vibes } from 'next/font/google'
import { useMount, useScroll, useUpdateEffect } from 'ahooks';
const greatVibes = Great_Vibes({ subsets: ['latin'], weight: '400'});

const Components = () => {

    // 스크롤 탑
    const top = useScroll()?.top||0;
    const [opacity, setOpacity] = React.useState(0);
    useUpdateEffect(() => {
        const opacity = top/1000;
        if (opacity < 0) setOpacity(0)
        else if (opacity >= 0 && opacity <= 1.2) setOpacity(opacity);
        else setOpacity(1.2);
    }, [top]);

    return (
        <Fragment>
            <div 
                className={`w-dvw h-dvh fixed top-0 z-0`}
                style={{
                    display: opacity > 1 ? 'none' : 'block',
                    backgroundImage: `url('https://kkotfarm-dev-ops.s3.ap-northeast-2.amazonaws.com/wedding/9.jpeg')`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    opacity: 1 - opacity
                }}
            >
                <div className="flex justify-center items-center pt-16" data-aos="fade-down" data-aos-delay="500" data-aos-once="false">
                    <p className={`text-5xl ${greatVibes.className}`} style={{color: 'rgba(255,255,255,0.8)'}}>Wedding Invitation</p>
                </div>
            </div>
            <div style={{height: `calc(1000px + 100dvh)`}} />
        </Fragment>
    )
}

export default React.memo(Components);