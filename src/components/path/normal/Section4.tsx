"use client"
import React, { Fragment } from 'react';
import {Image} from 'antd';

// 폰트 설정
import { Noto_Sans_KR, Noto_Serif_KR, Great_Vibes } from 'next/font/google'
const greatVibes = Great_Vibes({ subsets: ['latin'], weight: '400'});

const Components = () => {
    const imageList = Array.from({length: 18}, (v, i) => `https://kkotfarm-dev-ops.s3.ap-northeast-2.amazonaws.com/wedding/${i+1}.jpeg`);
    return (
        <Fragment>
            <div className="w-dvw flex flex-col items-center bg-white justify-center" style={{paddingTop: 256, paddingBottom: 256}}>
                <p className={`text-4xl text-amber-500 ${greatVibes.className}`} style={{marginBottom: 128}}>Gallery</p>
                <div className="flex flex-wrap justify-center bg-slate-200" style={{gap: '0.5dvw'}}>
                    <Image.PreviewGroup>
                        {imageList.map((item) => (
                            <div key={item} style={{ width: '33dvw', height: '45dvw', overflow: 'hidden'}}>
                                <Image src={item} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        ))}
                    </Image.PreviewGroup>
                </div>
            </div>
        </Fragment>
    )
}

export default React.memo(Components);