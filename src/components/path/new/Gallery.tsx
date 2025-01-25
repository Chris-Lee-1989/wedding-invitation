"use client"
import React, { Fragment } from 'react';
import Image from 'next/image';
import {Image as AntdImage} from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { IoMdClose } from "react-icons/io";

// 폰트
import { Parisienne } from 'next/font/google'
import Connection from '@/components/layout/Connection';
import dayjs from 'dayjs';
import { useSize, useTimeout, useUpdateEffect } from 'ahooks';
import { LoadingOutlined } from '@ant-design/icons';
const parisienne = Parisienne({ subsets: ['latin'], weight: ['400']});  

const Components = () => {

    const size = useSize(typeof window !== "undefined" ? document.body : undefined);
    const columnWidth = 165;
    const itemHeight = 165 * 1.4;

    const [open, setOpen] = React.useState<boolean>(false);
    const [idx, setIdx] = React.useState<number>(0);

    const onClickImage = (idx: number) => {
        setIdx(idx);
        setOpen(true);
    }

    return (
        <Fragment>
            <div className="w-full pt-32 pb-40" style={{background: '#fff'}}>
                <div className="w-full flex flex-col" >
                    <div className={`flex justify-center items-center`} style={{height: '10vh'}}>
                        <p data-aos="fade-up" data-aos-duration="800" className={`${parisienne.className} w-full text-center text-2xl text-rose-300`}>Gallery</p>
                    </div>
                    <div style={{maxWidth: '100dvw', overflowX: 'auto'}} className="px-2 flex">
                        <div style={{width: columnWidth * 10 + 8 * 9}} className="flex gap-2">
                        {(() => {
                            let items = [];
                            let objectPosition = [];
                            for (let i=0; i<=25; i++){
                                if (i === 8) objectPosition.push(`50% 10%`);
                                else if (i === 9) objectPosition.push(`50% 20%`);
                                else if (i === 10) objectPosition.push(`50% 60%`);
                                else if (i === 15) objectPosition.push(`50% 0%`);
                                else if (i === 18) objectPosition.push(`50% 10%`);
                                else if (i === 20) objectPosition.push(`50% 0%`);
                                else if (i === 25) objectPosition.push(`50% 20%`);
                                else objectPosition.push(`50% 50%`);
                            }
                            for (let i=0; i<5; i++){
                                items.push(
                                    <div key={i}
                                        className="flex gap-2" 
                                        style={{width: columnWidth * 2 + 8}}
                                    >
                                        <div className="flex flex-col gap-2" style={{width: columnWidth, height: (itemHeight * 2) + 4}}>
                                            <Image onClick={() => onClickImage((i*5)+1)} className="rounded-md" src={`/image/${(i*5)+1}.jpg`} alt={`image-${(i*5)+1}`} width={columnWidth} height={itemHeight} style={{width: columnWidth, height: itemHeight, objectFit: 'cover', objectPosition: objectPosition[(i*5)+1]}} />
                                            <Image onClick={() => onClickImage((i*5)+2)} className="rounded-md" src={`/image/${(i*5)+2}.jpg`} alt={`image-${(i*5)+2}`} width={columnWidth} height={itemHeight} style={{width: columnWidth, height: itemHeight, objectFit: 'cover', objectPosition: objectPosition[(i*5)+2]}} />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <Image onClick={() => onClickImage((i*5)+3)} className="rounded-md" src={`/image/${(i*5)+3}.jpg`} alt={`image-${(i*5)+3}`} width={columnWidth} height={itemHeight * 0.6 -4} style={{width: columnWidth, height: itemHeight * 0.6 -4, objectFit: 'cover', objectPosition: objectPosition[(i*5)+3]}} />
                                            <Image onClick={() => onClickImage((i*5)+4)} className="rounded-md" src={`/image/${(i*5)+4}.jpg`} alt={`image-${(i*5)+4}`} width={columnWidth} height={itemHeight * 0.8} style={{width: columnWidth, height: itemHeight * 0.8, objectFit: 'cover', objectPosition: objectPosition[(i*5)+4]}} />
                                            <Image onClick={() => onClickImage((i*5)+5)} className="rounded-md" src={`/image/${(i*5)+5}.jpg`} alt={`image-${(i*5)+5}`} width={columnWidth} height={itemHeight * 0.6 -4} style={{width: columnWidth, height: itemHeight * 0.6 -4, objectFit: 'cover', objectPosition: objectPosition[(i*5)+5]}} />
                                        </div>
                                    </div>
                                )
                            }
                            return items;
                        })()}
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-4 absolute z-10 -translate-y-4" style={{maxWidth: 400}} >
                <Connection color="#f8fafc" />
            </div>
            {size && <ImageModal open={open} close={() => { setOpen(false); }} idx={idx} width={size.width} height={size.height} />}
        </Fragment>
    )
}

interface ImageModalProps {
    open: boolean;
    idx: number;
    width: number;
    height: number;
    close: () => void;
}
const ImageModal = ({ open, close, width, height, idx}: ImageModalProps) => {

    const [loading, setLoading] = React.useState<boolean>(true);
    if (!open) return <></>
    else {
        return (
            <div 
                onClick={() => {
                    setLoading(false)
                    close();
                }}
                className={`w-dvw h-dvh fixed top-0 left-0 z-40 bg-black`}
                // style={{
                //     backgroundImage: `url("/image/${idx}.jpg")`,
                //     backgroundSize: 'contain',
                //     backgroundPosition: 'center',
                //     backgroundRepeat: 'no-repeat',
                // }}
            >
                <div className="absolute top-4 right-4 z-50">
                    <IoMdClose style={{fontSize: 28, color: "#fff"}} />
                </div>
                <Swiper
                    initialSlide={idx-1}
                    spaceBetween={0}
                    slidesPerView={1}
                    onSlideChange={() => {

                    }}
                    onSwiper={(swiper) => {

                    }}
                >
                    {(() => {
                        let items = [];
                        for (let i=1; i<=25; i++){
                            items.push(
                                <SwiperSlide key={i}>
                                    <div className="w-dvw h-dvh flex items-center justify-center bg-black">
                                        <Image src={`/image/${i}.jpg`} alt={`image-${i}`} width={width} height={height} />
                                    </div>
                                </SwiperSlide>
                            )
                        }
                        return items;
                    })()}
                </Swiper>

                {/* {loading && 
                    <div 
                        className="w-dvw h-dvh fixed top-0 left-0 z-50 bg-black flex items-center justify-center"
                    >
                        <LoadingOutlined style={{ color: '#666', fontSize: 50 }} />
                    </div>
                }
                <Image 
                    src={`/image/${idx}.jpg`} 
                    alt={`image-${idx}`} 
                    width={width} 
                    height={height} 
                    onLoad={() => {
                        setLoading(false);
                    }}
                /> */}
            </div>
        )
    }
}

export default React.memo(Components);