"use client"
import React, { Fragment, useRef, useState } from 'react';

// 폰트 설정
import { Cormorant, Niconne } from 'next/font/google'
import { useSize, useUpdateEffect } from 'ahooks';
import Connection from '@/components/layout/Connection';
import { LoadingOutlined } from '@ant-design/icons';
const serif = Cormorant({ subsets: ['latin'], weight: ['400','700']});
const niconne = Niconne({ subsets: ['latin'], weight: ['400']});

const Components = () => {

    const containerRef: any = useRef();
    const size = useSize(containerRef);
    const height = size?.width ? size.width * 1.67 : 0;
    
    // 이미지 로드 여부
    const [init, setInit] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);
    useUpdateEffect(() => {
        if (imageLoaded) {
            setTimeout(() => {
                setInit(true);
            }, 300);
        }
    }, [imageLoaded]);
    useUpdateEffect(() => {
        if (height) {
            setImageLoaded(true);
        }
    }, [height])

    return (
        <Fragment>
            {!init && (
                <div className={`fixed top-0 left-0 z-50 w-dvw h-dvh flex items-center justify-center bg-black transition-all duration-300 ${imageLoaded ? 'opacity-0' : 'opacity-100'}`}>
                    <LoadingOutlined style={{fontSize: 40, color: '#fcd34d'}} />
                </div>
            )}
            <div 
                ref={containerRef}
                className={`flex flex-col`}
                style={{
                    width: '100%',
                    height: height,
                    backgroundImage: `url("/image/2.jpg")`,
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
                    <p data-aos-delay="200" data-aos="fade-left" data-aos-duration="600" style={{fontSize: '54px', lineHeight: '54px'}} className={`${niconne.className} font-bold text-amber-300`} >Always</p>
                    <p data-aos-delay="200" data-aos="fade-right" data-aos-duration="600" style={{fontSize: '54px', lineHeight: '54px'}} className={`${niconne.className} font-bold mt-2 text-amber-300`} >Be With You</p>
                    <p data-aos-delay="200" data-aos="fade-left" data-aos-duration="600" style={{fontSize: ''}} className={`${niconne.className} text-3xl mt-4 text-amber-300`}><>2025.03.29 14:00</></p>
                </div>
            </div>
            <div className="w-full h-4 absolute z-10 -translate-y-4" style={{maxWidth: 400}} >
                <Connection color="#F4EDDB" />
            </div>
        </Fragment>
    )
}

export default React.memo(Components);