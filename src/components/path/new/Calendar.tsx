"use client"
import React, { Fragment } from 'react';
import { BsBalloonHeartFill } from "react-icons/bs";
import { useCountDown } from 'ahooks';
import { TiHeart } from "react-icons/ti";

// 폰트
import { Parisienne, Gowun_Dodum, PT_Serif } from 'next/font/google'
import dayjs from 'dayjs';
import Connection from '@/components/layout/Connection';
const parisienne = Parisienne({ subsets: ['latin'], weight: ['400']});  
const gowun = Gowun_Dodum({ subsets: ['latin'], weight: ['400']});
const serif = PT_Serif({ subsets: ['latin'], weight: ['400']});

const Components = () => {

    const calendarSize = 40;

    const count = useCountDown({
        targetDate: dayjs('2025-03-29 14:00:00'),
        interval: 1000,
    });

    return (
        <Fragment>

            <div className="w-full bg-gray-50 py-20">
                <div className="flex justify-center items-center">
                    <div 
                        data-aos="fade-up" data-aos-duration="800"
                        className="w-32 h-40 bg-gray-200 rounded-md"
                        style={{
                            backgroundImage: 'url("https://kkotfarm-dev-ops.s3.ap-northeast-2.amazonaws.com/wedding/left-image.png")',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                        }}
                    >
                        <div style={{width: '100%', height: '100%', background: 'rgba(255,255,255,0.1)'}} />
                    </div>
                    <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" className="w-12 flex justify-center" >
                        <BsBalloonHeartFill className="text-rose-300 text-xs" />
                    </div>
                    <div 
                        data-aos="fade-up" data-aos-duration="800" data-aos-delay="100"
                        className="w-32 h-40 bg-gray-200 rounded-md"
                        style={{
                            backgroundImage: 'url("https://kkotfarm-dev-ops.s3.ap-northeast-2.amazonaws.com/wedding/right-image.png")',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                        }}
                    >
                        <div style={{width: '100%', height: '100%', background: 'rgba(255,255,255,0.1)'}} />
                    </div>
                </div>

                <div className={`mt-28 mb-6 flex flex-col items-center justify-center ${gowun.className}`}>
                    <p data-aos="fade-up" data-aos-duration="800" className={`${parisienne.className} text-xl text-rose-300 w-full text-center`}>Calendar</p>
                    <p data-aos="fade-up" data-aos-duration="800" className={`mt-6 text-sm font-bold`}>2025년 3월 29일 토요일 오후 1시</p>
                </div>

                <div className="flex flex-wrap items-center justify-start" style={{width: calendarSize * 7, margin: 'auto'}}> 
                    {Array.from({length: 7}).map((_, idx) => {
                        const label = ['일','월','화','수','목','금','토'];
                        return (
                            <CalendarCell key={idx + '-label'} calendarSize={calendarSize} day={label[idx]} sunday={idx === 0}/>
                        )
                    })}
                    {Array.from({length: 6}).map((_, idx) => {
                        return (
                            <CalendarCell key={idx + '-empty'} calendarSize={calendarSize} day={""} />
                        )
                    })}
                    {Array.from({length: 31}).map((_, idx) => {
                        return (
                            <CalendarCell key={idx + '-day'} calendarSize={calendarSize} day={String(idx+1)} sunday={idx%7 === 1} dDay={idx === 28} />
                        )
                    })}
                </div>

                <div className="mt-12 flex items-center gap-1.5 justify-center" data-aos="fade-up" data-aos-duration="800">
                    <div className="flex flex-col items-center justify-center border rounded-md" style={{width: 60, height: 70, borderColor: 'rgb(242, 238, 238)', backgroundColor: 'rgb(250, 248, 248)'}}>
                        <p className={`${gowun.className} text-lg`} style={{color: 'rgb(173, 134, 139)'}}>{count[1].days}</p>
                        <p className={`${serif.className}`} style={{fontSize: 10, color: 'rgb(173, 134, 139)'}}>Days</p>
                    </div>
                    <p className={`text-rose-300 text-xs`}>:</p>
                    <div className="flex flex-col items-center justify-center border rounded-md" style={{width: 60, height: 70, borderColor: 'rgb(242, 238, 238)', backgroundColor: 'rgb(250, 248, 248)'}}>
                        <p className={`${gowun.className} text-lg`} style={{color: 'rgb(173, 134, 139)'}}>{count[1].hours}</p>
                        <p className={`${serif.className}`} style={{fontSize: 10, color: 'rgb(173, 134, 139)'}}>Hour</p>
                    </div>
                    <p className={`text-rose-300 text-xs`}>:</p>
                    <div className="flex flex-col items-center justify-center border rounded-md" style={{width: 60, height: 70, borderColor: 'rgb(242, 238, 238)', backgroundColor: 'rgb(250, 248, 248)'}}>
                        <p className={`${gowun.className} text-lg`} style={{color: 'rgb(173, 134, 139)'}}>{count[1].minutes}</p>
                        <p className={`${serif.className}`} style={{fontSize: 10, color: 'rgb(173, 134, 139)'}}>Min</p>
                    </div>
                    <p className={`text-rose-300 text-xs`}>:</p>
                    <div className="flex flex-col items-center justify-center border rounded-md" style={{width: 60, height: 70, borderColor: 'rgb(242, 238, 238)', backgroundColor: 'rgb(250, 248, 248)'}}>
                        <p className={`${gowun.className} text-lg`} style={{color: 'rgb(173, 134, 139)'}}>{count[1].seconds}</p>
                        <p className={`${serif.className}`} style={{fontSize: 10, color: 'rgb(173, 134, 139)'}}>Sec</p>
                    </div>
                </div>

                <div className={`flex justify-center items-center mt-6 mb-12 ${gowun.className}`}>
                    <p data-aos="fade-up" data-aos-duration="800"  className={`text-sm text-slate-700`}>윤민</p>
                    <div data-aos="fade-up" data-aos-duration="800">
                        <TiHeart className="text-xs text-rose-300 mx-1" />
                    </div>
                    <p data-aos="fade-up" data-aos-duration="800"  className={`text-sm text-slate-700`}>준형의 결혼식이</p>
                    <p data-aos="fade-up" data-aos-duration="800"  className={`text-sm text-rose-300 ml-1.5 font-bold`}>89</p>
                    <p data-aos="fade-up" data-aos-duration="800"  className={`text-sm ml-0.5 text-slate-700`}>일 남았습니다.</p>
                </div>

            </div>

            <div className="w-full h-4 absolute z-10 -translate-y-4" >
               <Connection color="#ffffff" />
            </div>

        </Fragment>
    )
}

interface CalendarCellProps {
    calendarSize: number;
    day: string;
    dDay?: boolean;
    sunday?: boolean;
}
const CalendarCell = ({ calendarSize, day, dDay=false, sunday=false}:CalendarCellProps) => {
    return (
        <div className={`flex items-center justify-center ${gowun.className}`} style={{width: calendarSize, height: calendarSize}} data-aos="fade-up" data-aos-duration="800">
            <div className={`flex items-center justify-center rounded-full w-8 h-8 ${dDay ? 'bg-rose-300' : ''}`}>
                <p className={`text-sm ${sunday ? 'text-rose-400': dDay ? 'text-rose-50' : 'text-slate-700'}`}>{day}</p>
            </div>
        </div>
    )
}

export default React.memo(Components);