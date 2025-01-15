"use client"
import React, { Fragment } from 'react';

// 폰트
import { Parisienne, Gowun_Dodum, PT_Serif } from 'next/font/google'
import { Button, message } from 'antd';
const parisienne = Parisienne({ subsets: ['latin'], weight: ['400']});  
const gowun = Gowun_Dodum({ subsets: ['latin'], weight: ['400']});
const serif = PT_Serif({ subsets: ['latin'], weight: ['400']});
import { IoBusOutline } from "react-icons/io5";
import { IoSubwayOutline } from "react-icons/io5";
import { IoCarSportOutline } from "react-icons/io5";
import { LuCircleParking } from "react-icons/lu";
import Connection from '@/components/layout/Connection';

const Components = () => {

    // 메시지
    const [messageApi, contextHolder] = message.useMessage();

    // 복사 버튼 클릭 이벤트
    const onClickCopyButton = (accountsNum: string) => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(accountsNum).then(() => {
                messageApi.success('주소가 복사되었습니다.');
            }).catch(err => {
                console.error('Failed to copy: ', err);
                messageApi.error('복사에 실패했습니다.');
            });
        } else {
            const textArea = document.createElement("textarea");
            textArea.value = accountsNum;
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            try {
                document.execCommand('copy');
                messageApi.success('주소가 복사되었습니다.');
            } catch (err) {
                console.error('Failed to copy: ', err);
                messageApi.error('복사에 실패했습니다.');
            }
            document.body.removeChild(textArea);
        }
    }

    return (
        <Fragment>
            {contextHolder}
            <div className="w-full flex flex-col items-center justify-center py-40" style={{background: '#f8fafc'}}>

                {/* 타이틀 */}
                <div className={`flex flex-col justify-center w-full gap-8 ${gowun.className}`}>
                    <p data-aos="fade-up" data-aos-duration="800" className={`${parisienne.className} w-full text-center text-2xl text-rose-300`}>Location</p>
                    <p data-aos="fade-up" data-aos-duration="800" className={`w-full text-center text-slate-800 font-bold`}>오시는 길</p>
                </div>

                {/* 주소 */}
                <div className={`flex flex-col items-center ${gowun.className} gap-2 mt-9`}>
                    <p data-aos="fade-up" data-aos-duration="800" className="text-slate-800 text-sm">서울 강남구 논현로645번길</p>
                    <p data-aos="fade-up" data-aos-duration="800" className="text-slate-800 text-sm">엘리에나 호텔 2층 컨벤션홀</p>
                    <p data-aos="fade-up" data-aos-duration="800" className="text-slate-800 text-sm">02-3443-5670</p>
                </div>
                <div data-aos="fade-up" data-aos-duration="800" className="w-full flex justify-center mt-4 mb-12">
                    <Button style={{borderColor: '#EEE', borderRadius: 4, padding: '0px 16px'}} onClick={() => onClickCopyButton('서울 강남구 논현로645번길 엘리에나 호텔 2층 컨벤션홀')}>
                        <p className={`${gowun.className} text-sm`}>주소 복사</p>
                    </Button>
                </div>

                {/* 지도 */}
                <div id="map" data-aos="fade-up" data-aos-duration="800" className="bg-rose-100 flex items-center justify-center" style={{ width: '90dvw', height: '90dvw', margin: 'auto'}}>
                    <p className="text-sm text-slate-400">지도</p>
                </div>

                <div className="h-10" />
                
                {/* 교통 수단 */}
                <div className={`flex flex-col ${gowun.className} w-full`} style={{width: '90%', margin: 'auto'}} data-aos="fade-up" data-aos-duration="800">

                    {/* 버스 */}
                    <div className="flex flex-col mb-8">
                        {/* 타이틀 */}
                        <div className="flex gap-2 items-center border-b border-b-slate-300 border-dashed pb-3 mb-3">
                            <div className="w-9 h-9 rounded-full border border-slate-100 bg-white shadow-sm  flex items-center justify-center">
                                <IoBusOutline className="text-lg" />
                            </div>
                            <p className="text-lg text-slate-800 font-bold">버스</p>
                        </div>
                        {/* 정거장 */}
                        <div className="flex items-center gap-1 h-8">
                            <p className="text-sm font-bold">논현동고개 정류장 하차</p>
                            <p className="text-sm">도보 2분, 124m</p>
                        </div>
                        {/* 노선 */}
                        <div className="flex flex-col">
                            <div className="flex items-center gap-1 h-8">
                                <div className="h-3 w-3 rounded-full bg-sky-600 mr-1 mt-0.5" />
                                <p className="text-sm font-bold">간선버스</p>
                                <p className="text-sm ">:</p>
                                <p className="text-sm ">147, 241, 463</p>
                            </div>
                            <div className="flex items-center gap-1 h-8">
                                <div className="h-3 w-3 rounded-full bg-emerald-500 mr-1 mt-0.5" />
                                <p className="text-sm font-bold">지선버스</p>
                                <p className="text-sm ">:</p>
                                <p className="text-sm ">3412, 4211</p>
                            </div>
                        </div>
                    </div>

                    {/* 지하철 */}
                    <div className="flex flex-col mb-8">
                        {/* 타이틀 */}
                        <div className="flex gap-2 items-center border-b border-b-slate-300 border-dashed pb-3 mb-3">
                            <div className="w-9 h-9 rounded-full border border-slate-100 bg-white shadow-sm  flex items-center justify-center">
                                <IoSubwayOutline className="text-lg" />
                            </div>
                            <p className="text-lg text-slate-800 font-bold">지하철</p>
                        </div>
                        {/* 노선 */}
                        <div className="flex flex-col">
                            <div className="flex items-center gap-1 h-8">
                                <div className="h-3 w-3 rounded-full mr-1 mt-0.5" style={{background: '#606622'}} />
                                <p className="text-sm font-bold">7호선 학동역</p>
                                <p className="text-sm ">:</p>
                                <p className="text-sm ">4번 출구 도보 5분, 277m</p>
                            </div>
                            <div className="flex items-center gap-1 h-8">
                                <div className="h-3 w-3 rounded-full mr-1 mt-0.5" style={{background: '#BF9F54'}} />
                                <p className="text-sm font-bold">9호선 언주역</p>
                                <p className="text-sm ">:</p>
                                <p className="text-sm ">2번 출구 도보 7분, 425m</p>
                            </div>
                        </div>
                    </div>

                    {/* 자가용 */}
                    <div className="flex flex-col mb-8">
                        {/* 타이틀 */}
                        <div className="flex gap-2 items-center border-b border-b-slate-300 border-dashed pb-3 mb-3">
                            <div className="w-9 h-9 rounded-full border border-slate-100 bg-white shadow-sm  flex items-center justify-center">
                                <IoCarSportOutline className="text-lg" />
                            </div>
                            <p className="text-lg text-slate-800 font-bold">자가용</p>
                        </div>
                        {/* 노선 */}
                        <div className="flex flex-col">
                            <div className="flex items-center gap-1 h-8">
                                <p className="text-sm font-bold">네비게이션</p>
                                <p className="text-sm ">:</p>
                                <p className="text-sm ">{`"엘리에나 호텔" 검색`}</p>
                            </div>
                            <div className="flex items-center gap-1 h-8">
                                <p className="text-sm font-bold">주소 검색</p>
                                <p className="text-sm ">:</p>
                                <p className="text-sm ">{`"서울 강남구 논현로 645" 검색`}</p>
                            </div>
                            <div className="flex items-center gap-1 h-8">
                                <p className="text-sm font-bold">양재 방면</p>
                                <p className="text-sm ">:</p>
                                <p className="text-sm ">강남대로 → 학동사거리 → 엘리에나 호텔</p>
                            </div>
                            <div className="flex items-center gap-1 h-8">
                                <p className="text-sm font-bold">강남 방면</p>
                                <p className="text-sm ">:</p>
                                <p className="text-sm ">테헤란로 → 논현역 → 엘리에나 호텔</p>
                            </div>
                        </div>
                    </div>

                    {/* 주차 */}
                    <div className="flex flex-col mb-8">
                        {/* 타이틀 */}
                        <div className="flex gap-2 items-center border-b border-b-slate-300 border-dashed pb-3 mb-3">
                            <div className="w-9 h-9 rounded-full border border-slate-100 bg-white shadow-sm  flex items-center justify-center">
                                <LuCircleParking className="text-lg" />
                            </div>
                            <p className="text-lg text-slate-800 font-bold">주차</p>
                        </div>
                        {/* 노선 */}
                        <div className="flex flex-col">
                            <div className="flex items-center gap-2 h-8">
                                <div className="w-1 h-1 rounded-full bg-black" />
                                <p className="text-sm">무료 발레파킹</p>
                            </div>
                            <div className="flex items-center gap-2 h-8">
                                <div className="w-1 h-1 rounded-full bg-black" />
                                <p className="text-sm ">혼주 카운터에서 차량 등록 후 출차 가능</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="w-full h-4 absolute z-10 -translate-y-4" >
                <Connection color="#fff" />
            </div>
        </Fragment>
    )
}

export default React.memo(Components);