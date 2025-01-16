"use client"
import React, { Fragment, useMemo, useRef } from 'react';

// 폰트 설정
import { Single_Day, Marck_Script, PT_Serif } from 'next/font/google'
import { useSize } from 'ahooks';
import Connection from '@/components/layout/Connection';
import { Image } from 'antd';
const serif = PT_Serif({ subsets: ['latin'], weight: ['400','700']});
const marck = Marck_Script({ subsets: ['latin'], weight: ['400']});
const singleDay = Single_Day({ weight: ['400']});

import { TbArrowCurveLeft } from "react-icons/tb";
import { PiArrowBendDoubleUpRight } from "react-icons/pi";

const Components = () => {

    const containerRef: any = useRef();
    const size = useSize(containerRef);
    const height = size?.width ? size.width * 1.67 : 0;
    const width = size?.width ? size.width : 0;

    const size1 = useSize(document.body);
    const width1 = size1?.width ? size1.width : 0;
    const width2 = (width1 - 400) / 2

    return (
        <Fragment>
            <div 
                ref={containerRef}
                className={`flex flex-col`}
                style={{
                    width: '100%',
                    height: height,
                    backgroundImage: `url('https://kkotfarm-dev-ops.s3.ap-northeast-2.amazonaws.com/wedding/9.jpeg')`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}
            >
                {/* <div className="p-4 flex items-center justify-between">
                    <p data-aos="fade-down" data-aos-duration="500" style={{color: 'rgba(255,255,255,0.85)'}} className={`${serif.className} text-xs font-bold`}>LEE YOON MIN</p>
                    <p data-aos="fade-down" data-aos-duration="500" style={{color: 'rgba(255,255,255,0.85)'}} className={`${serif.className} text-xs font-bold`}>KIM JOON HYEONG</p>
                </div> */}

                <div 
                    data-aos="fade-down" data-aos-duration="600"
                    className="flex flex-col items-center justify-center absolute"
                    style={{
                        // top: width * 0.15,
                        // left: width * 0.2 + width2,
                        top: width * 0.27,
                        left: width * 0.25 + width2,
                    }}
                >
                    {/* <p className={`${singleDay.className} text-3xl text-rose-300 translate-y-3`}>Joon</p>
                    <p className={`${singleDay.className} text-3xl text-rose-300`}>Hyeong</p> */}
                    <p className={`${singleDay.className} text-3xl text-rose-300 mr-4`}>준형</p>
                    <TbArrowCurveLeft className="text-rose-300 text-4xl -rotate-180" />
                </div>
                <div 
                    data-aos="fade-down" data-aos-duration="600" data-aos-delay="100"
                    className="flex flex-col items-center justify-center absolute"
                    style={{
                        // top: width * 0.1,
                        // left: width * 0.7 + width2,
                        top: width * 0.22,
                        left: width * 0.7 + width2,
                    }}
                >
                    {/* <p className={`${singleDay.className} text-3xl text-sky-300 translate-y-3`}>Yoon</p>
                    <p className={`${singleDay.className} text-3xl text-sky-300`}>Min</p> */}
                    <p className={`${singleDay.className} text-3xl text-sky-300 mr-10`} style={{transform: 'rotate(-40deg) translate(2px,10px)'}}>윤민</p>
                    <PiArrowBendDoubleUpRight className="text-sky-300 text-4xl" style={{transform: 'rotate(120deg)'}} />
                </div>

                <div 
                    className="flex-1 flex flex-col items-center justify-end pb-20"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.0) 60%, rgba(0,0,0,0.4) 100%)'
                    }}
                >
                    <p data-aos-delay="200" data-aos="fade-left" data-aos-duration="600" className={`${marck.className} text-5xl text-amber-300`} >Always</p>
                    <p data-aos-delay="200" data-aos="fade-right" data-aos-duration="600" className={`${marck.className} text-5xl mt-2 text-amber-300`} >Be With You</p>
                    <p data-aos-delay="200" data-aos="fade-left" data-aos-duration="600" className={`${marck.className} text-2xl mt-4 text-amber-300`} >2025.03.29 14:00</p>
                </div>
            </div>
            <div className="w-full h-4 absolute z-10 -translate-y-4" style={{maxWidth: 400}} >
                <Connection color="#F4EDDB" />
            </div>
        </Fragment>
    )
}

export default React.memo(Components);