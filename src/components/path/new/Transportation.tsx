"use client"
import React, { Fragment } from 'react';

import { PiMapPinLineLight } from "react-icons/pi";
import { PiMapPinSimpleLineFill } from "react-icons/pi";

// 폰트
import { Parisienne, Gowun_Dodum } from 'next/font/google'
import Connection from '@/components/layout/Connection';
const parisienne = Parisienne({ subsets: ['latin'], weight: ['400']});  
const gowun = Gowun_Dodum({ subsets: ['latin'], weight: ['400']});

const Components = () => {
    return (
        <Fragment>
            <div className="w-full flex flex-col items-center justify-center py-40" style={{background: '#fff'}}>

                <div className={`flex justify-center w-full mb-12`}>
                    <p data-aos="fade-up" data-aos-duration="800" className={`${parisienne.className} w-full text-center text-2xl text-rose-300`}>Transportation Service</p>
                </div>

                {/* 전세 버스 */}
                <div className={`flex flex-col items-center ${gowun.className}`}>
                    <p data-aos="fade-up" data-aos-duration="800" className={`w-full text-center text-slate-800 font-bold`}>전세버스</p>
                    <div className="flex items-center justify-center mt-4 w-dvw" data-aos="fade-up" data-aos-duration="800">
                        <div 
                            className="h-44 rounded-md"
                            style={{
                                width: '90%',
                                margin: 'auto',
                                backgroundImage: `url('https://cdn.cvinfo.com/news/photo/202410/28320_36487_1013.jpg')`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        />
                    </div>
                    <div className={`flex flex-col items-center mt-4 ${gowun.className}`} data-aos="fade-up" data-aos-duration="800">
                        <p className="text-sm">귀한 발걸음을 해주시는 하객분들의</p>
                        <p className="text-sm">편의를 위해 전세버스를 준비하였습니다.</p>
                    </div>
                    <div className={`flex text-slate-800 ${gowun.className} justify-evenly`} style={{width: '90%', margin: 'auto', marginTop: '2rem'}}>
                        <div className="flex flex-col rounded-md gap-1" data-aos="fade-up" data-aos-duration="800">
                            <div className="flex items-center gap-2">
                                <PiMapPinSimpleLineFill className="text-slate-800"/>
                                <p className="font-bold text-sm mb-0.5">광주</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <p className="text-xs">출발 시간 :</p>
                                <p className="text-xs text-red-700">오전 8시 30분</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <p className="text-xs">탑승 장소 :</p>
                                <p className="text-xs text-red-700">광주 시청 입구</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <p className="text-xs">전화번호 :</p>
                                <p className="text-xs">010-0000-0000</p>
                            </div>
                            <div className="border border-slate-200 rounded-md mt-2 p-1 w-20 flex justify-center transition-all duration-100 active:border-slate-400 shadow-sm">
                                <p className="text-xs">위치보기</p>
                            </div>
                        </div>
                        <div className="flex flex-col rounded-md gap-1" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                            <div className="flex items-center gap-2">
                                <PiMapPinSimpleLineFill className="text-slate-800"/>
                                <p className="font-bold text-sm mb-0.5">부산</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <p className="text-xs">출발 시간 :</p>
                                <p className="text-xs text-red-700">오전 8시 30분</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <p className="text-xs">탑승 장소 :</p>
                                <p className="text-xs text-red-700">부산 시청 입구</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <p className="text-xs">전화번호 :</p>
                                <p className="text-xs">010-0000-0000</p>
                            </div>
                            <div className="border border-slate-200 rounded-md mt-2 p-1 w-20 flex justify-center transition-all duration-100 active:border-slate-400 shadow-sm">
                                <p className="text-xs">위치보기</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="w-full h-4 absolute z-10 -translate-y-4" >
                <Connection color="#f8fafc" />
            </div>
        </Fragment>
    )
}

export default React.memo(Components);