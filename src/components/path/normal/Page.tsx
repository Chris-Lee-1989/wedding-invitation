"use client"
import React, { Fragment } from 'react';
import dynamic from 'next/dynamic';
import { useMount, useScroll } from 'ahooks';
import Section1 from './Section1';
const Main = dynamic(() => import('./Main'), { ssr: false });
import AOS from "aos";
import "aos/dist/aos.css";
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';

// 폰트 설정
import { Great_Vibes } from 'next/font/google'
const greatVibes = Great_Vibes({ subsets: ['latin'], weight: '400'});

const Components = () => {

    // AOS
    useMount(() => {
        AOS.init();
    })

    // 스크롤 탑
    const top = useScroll()?.top||0;
    
    return (
        <Fragment>
            <Main />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <div className="bg-slate-100 p-4 flex justify-end items-center">
                <p className={`text-sm text-slate-500 ${greatVibes.className}`}>Made By. Lee Yoon Min</p>
            </div>

            {/* <div className="fixed bottom-0 right-0 z-50">
                <p className="text-xs text-rose-600 bg-blue-600">{top}</p>
            </div> */}
        </Fragment>
    )
}

export default React.memo(Components);