"use client"
import React, { Fragment, useMemo } from 'react';
import {Image, Modal} from 'antd';

// 폰트
import { Parisienne, Gowun_Dodum, PT_Serif } from 'next/font/google'
import dayjs from 'dayjs';
import Connection from '@/components/layout/Connection';
const parisienne = Parisienne({ subsets: ['latin'], weight: ['400']});  
const gowun = Gowun_Dodum({ subsets: ['latin'], weight: ['400']});
const serif = PT_Serif({ subsets: ['latin'], weight: ['400']});
import { IoCloseOutline } from "react-icons/io5";
import { RiArrowRightWideLine, RiArrowLeftWideLine } from "react-icons/ri";
import { useUpdateEffect } from 'ahooks';

interface Props {
    gallery: I_Images[];
}
const Components = ({ gallery }: Props) => {

    const [popup, setPopup] = React.useState({open: false, index: 0});

    const imageArr = useMemo(() => {
        const result = [];
        for (let i = 0; i < gallery.length; i += 5) {
            result.push(gallery.slice(i, i + 2));
            result.push(gallery.slice(i + 2, i + 5));
        }
        return result;
    }, [gallery]);

    const columnWidth = 165;
    const itemHeight = 165 * 1.4;
    return (
        <Fragment>
            <div className="w-full pt-32 pb-40" style={{background: '#fff'}}>
                <div className="w-full flex flex-col" >
                    <div className={`flex justify-center items-center`} style={{height: '10vh'}}>
                        <p data-aos="fade-up" data-aos-duration="800" className={`${parisienne.className} w-full text-center text-2xl text-rose-300`}>Gallery</p>
                    </div>
                   
                    <Image.PreviewGroup >
                    <div className="flex-1 px-2" data-aos="fade-up" data-aos-duration="800">
                        <div className="w-full h-full overflow-y-hidden overflow-x-auto">
                            <div className="flex w-full h-full gap-2" style={{width: (columnWidth * imageArr.length) + (8 * (imageArr.length - 1))}}>
                            {imageArr.map((arr, idx) => {
                                return (
                                    <div 
                                        key={`col-${idx}`}
                                        className="flex flex-col gap-2 h-full"
                                        style={{
                                            width: columnWidth,
                                        }}
                                    >
                                    {(() => {
                                        const returnMap = [];
                                        if (arr.length === 2) {
                                            returnMap.push(
                                                <Image 
                                                    key={`${idx}-0`} 
                                                    style={{borderRadius: 8, objectFit: "cover", overflow: "hidden"}}
                                                    src={arr[0].url}
                                                    width={columnWidth}
                                                    height={itemHeight + 4}
                                                />
                                            )
                                            returnMap.push(
                                                <Image 
                                                    key={`${idx}-1`} 
                                                    style={{borderRadius: 8, objectFit: "cover", overflow: "hidden"}}
                                                    src={arr[1].url}
                                                    width={columnWidth}
                                                    height={itemHeight + 4}
                                                />
                                            )
                                        } else {

                                            returnMap.push(
                                                <Image 
                                                    style={{borderRadius: 8, objectFit: "cover", overflow: "hidden"}}
                                                    key={`${idx}-0`} 
                                                    src={arr[0].url}
                                                    width={columnWidth}
                                                    height={itemHeight * 0.7}
                                                />
                                            )
                                            returnMap.push(
                                                <Image 
                                                    key={`${idx}-1`} 
                                                    style={{borderRadius: 8, objectFit: "cover", overflow: "hidden"}}
                                                    src={arr[1].url}
                                                    width={columnWidth}
                                                    height={itemHeight * 0.6}
                                                />
                                            )
                                            returnMap.push(
                                                <Image 
                                                    key={`${idx}-2`} 
                                                    style={{borderRadius: 8, objectFit: "cover", overflow: "hidden"}}
                                                    src={arr[2].url}
                                                    width={columnWidth}
                                                    height={itemHeight * 0.7}
                                                />
                                            )
                                        }
                                        return returnMap;
                                    })()}
                                    </div>
                                )
                            })}
                            </div>
                        </div>
                    </div>       
                    </Image.PreviewGroup>         
                </div>
            </div>
            <div className="w-full h-4 absolute z-10 -translate-y-4" style={{maxWidth: 400}} >
                <Connection color="#f8fafc" />
            </div>
            <Popup open={popup.open} close={() => setPopup({...popup, open: false})} index={popup.index} gallery={gallery} />
        </Fragment>
    )
}

interface PopupProps extends Props {
    open: boolean;
    close: () => void;
    index: number;
}
const Popup = ({ open, close, index, gallery }: PopupProps) => {

    const [current, setCurrent] = React.useState(index);
    useUpdateEffect(() => {setCurrent(index)} , [index]);
    const item = gallery[current];

    const onClickIndexButton = (type: string) => {
        if (type === 'prev') {
            current !== 0 && setCurrent(current - 1);
        } else {
            gallery.length - 1 > current && setCurrent(current + 1);
        }
    }

    return (
        <Modal
            open={open}
            onCancel={close}
            centered
            footer={null}
            width="95dvw"
            height="95dvh"
            closable={false}
            styles={{
                content: {
                    padding: 0,
                }
            }}
        >
            <div 
                className="flex flex-col"
                style={{
                    width: '100%', 
                    height: '95dvh',
                    backgroundImage: `url(${item.url})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="flex justify-end p-2">
                    <div 
                        style={{
                            background: 'rgba(0,0,0,0.05)'
                        }}
                        className="p-2 cursor-pointer rounded-md transition-all duration-200 active:bg-slate-50" onClick={close}
                    >
                        <IoCloseOutline className="text-white font-bold text-3xl" />
                    </div>
                </div>
                <div className="flex-1 flex ">
                    <div 
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            onClickIndexButton('prev')
                        }} 
                        className="w-16 flex justify-center items-center cursor-pointer">
                        <RiArrowLeftWideLine className="text-white font-bold text-2xl" />
                    </div>
                    <div className="flex-1"></div>
                    <div 
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            onClickIndexButton('next')
                        }} 
                        className="w-16 flex justify-center items-center cursor-pointer">
                        <RiArrowRightWideLine className="text-white font-bold text-2xl" />
                    </div>
                </div>
            </div>
        </Modal>
    )
}
export default React.memo(Components);