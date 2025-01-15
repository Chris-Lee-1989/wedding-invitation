"use client"
import Connection from '@/components/layout/Connection';
import React, { Fragment } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// 폰트
import { Parisienne, Gowun_Dodum } from 'next/font/google'
const parisienne = Parisienne({ subsets: ['latin'], weight: ['400']});  
const gowun = Gowun_Dodum({ subsets: ['latin'], weight: ['400']});

const Components = () => {
    return (
        <Fragment>
            <div className="w-full flex flex-col items-center justify-center py-40" style={{background: '#f8fafc'}}>

                {/* 타이틀 */}
                <div className={`flex justify-center w-full mb-12`}>
                    <p data-aos="fade-up" data-aos-duration="800" className={`${parisienne.className} w-full text-center text-2xl text-rose-300`}>Infomation</p>
                </div>

                <div className="absolute">
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>
                            <div>
                                <p>화면 1</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <p>화면 2</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <p>화면 3</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                
            </div>
            <div className="w-full h-4 absolute z-10 -translate-y-4" >
                <Connection color="#F4EDDB" />
            </div>
            
        </Fragment>
    )
}

export default React.memo(Components);