"use client"
import React, { Fragment } from 'react';
import {Image} from 'antd';

// 폰트
import { Parisienne, Gowun_Dodum, PT_Serif } from 'next/font/google'
import dayjs from 'dayjs';
import Connection from '@/components/layout/Connection';
const parisienne = Parisienne({ subsets: ['latin'], weight: ['400']});  
const gowun = Gowun_Dodum({ subsets: ['latin'], weight: ['400']});
const serif = PT_Serif({ subsets: ['latin'], weight: ['400']});

const Components = () => {
    const imageList = Array.from({length: 20}, (v, i) => `https://kkotfarm-dev-ops.s3.ap-northeast-2.amazonaws.com/wedding/${i+1}.jpeg`);
    const rowGap = 6;
    const columnGap = 9;
    const width = 167;
    const containerWidth = (width * 10) + (columnGap * 9) + 32;
    const height = width * 1.5;
    const containerHeight = (height * 2) + (rowGap * 2);

    return (
        <Fragment>
            <div className="w-full flex flex-col items-center justify-center pt-32 pb-40" style={{background: '#fff'}}>
                <div className={`flex justify-center w-full mb-12`}>
                    <p data-aos="fade-up" data-aos-duration="800" className={`${parisienne.className} w-full text-center text-2xl text-rose-300`}>Gallery</p>
                </div>
                <div className="px-4" style={{overflow: 'scroll', maxWidth: '100dvw'}} data-aos="fade-up" data-aos-duration="800">
                    <div style={{width: containerWidth, height: containerHeight, rowGap, columnGap}} className="flex flex-wrap">
                        <Image.PreviewGroup>
                            {imageList.map((item, idx) => (
                                <div key={idx} style={{width, height, overflow: 'hidden'}} className="rounded-sm">
                                    <Image src={item} width={width} />
                                </div>
                            ))}
                        </Image.PreviewGroup>
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