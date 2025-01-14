"use client"
import React, { Fragment } from 'react';
import {Image} from 'antd';
// 폰트 설정
import { Noto_Sans_KR, Noto_Serif_KR, Great_Vibes } from 'next/font/google'
const greatVibes = Great_Vibes({ subsets: ['latin'], weight: '400'});
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Components = () => {
    const imageList = Array.from({length: 20}, (v, i) => `https://kkotfarm-dev-ops.s3.ap-northeast-2.amazonaws.com/wedding/${i+1}.jpeg`);
    const width = 150;
    const containerWidth = (width * 10) + (6 * 9) + 32;
    const height = width * 1.5;
    const containerHeight = height * 2 + 20;

    return (
        <Fragment>
            <div className="heart-bg w-dvw h-dvh flex flex-col items-center justify-center">
                <p className={`mb-8 text-4xl text-amber-500 ${greatVibes.className}`}>Gallery</p>
                {/* <div className="flex items-center justify-start mb-2 w-full px-4 gap-2 py-2" style={{background: "rgba(200, 200, 200, 0.1)"}}>
                    <MdKeyboardDoubleArrowRight style={{color: '#9ca3af'}} />
                    <p className="text-sm text-gray-400">옆으로 스크롤해주세요</p>
                    <MdKeyboardDoubleArrowRight style={{color: '#9ca3af'}} />
                </div> */}
                <div className="px-4" style={{overflow: 'scroll', maxWidth: '100dvw'}}>
                    <div style={{width: containerWidth, height: containerHeight}} className="flex flex-wrap gap-x-1.5 gap-y-1">
                        <Image.PreviewGroup>
                            {imageList.map((item) => (
                                <div style={{width, height, overflow: 'hidden'}} className="rounded-md shadow-md">
                                    <Image src={item} width={width} />
                                </div>
                            ))}
                        </Image.PreviewGroup>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default React.memo(Components);