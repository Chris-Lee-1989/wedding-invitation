"use client"
import React, { Fragment } from 'react';
import { IoAppsSharp } from "react-icons/io5";
import { BsInfoCircle } from "react-icons/bs";
import { IoImageOutline, IoImage } from "react-icons/io5";
import { IoVideocamOutline, IoVideocam } from "react-icons/io5";
import { BsCameraVideo, BsCameraVideoFill } from "react-icons/bs";
import GalleryItem from './GalleryItem';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const Components = () => {

    // 탭 인덱스
    const [tabIndex, setTabIndex] = React.useState(0);
    const items = Array.from({length: 20}, (v, i) => `https://kkotfarm-dev-ops.s3.ap-northeast-2.amazonaws.com/wedding/${i+1}.jpeg`);

    // 피드 조회
    const fetch1 = useQuery({
        queryKey: ['getFeeds', '2'],
        queryFn: async () => {
            const res = await axios.get('/api/feeds', {
                params: {
                    type: '2',
                }
            });
            return res.data?.dataSet||[];
        },
    });
    const dataSet: FeedType[] = fetch1.data||[];
    
    return (
        <Fragment>
            <div className="flex flex-col mt-12">
                {/* 메뉴 */}
                <div className="h-12 w-full flex border-b border-b-slate-100">
                    <div className={`flex-1 flex justify-center items-center border-b-2 transition-all duration-100 ${tabIndex === 0 ? 'border-black' : 'border-white'}`} onClick={() => setTabIndex(0)}>
                    {
                    tabIndex === 0 ? 
                        <div className="">
                            <IoAppsSharp style={{fontSize: 20}} /> 
                        </div>
                    :
                        <div>
                            <IoAppsSharp style={{fontSize: 20, color: '#999'}} />
                        </div>
                    }
                    </div>
                    <div className={`flex-1 flex justify-center items-center border-b-2 transition-all duration-100 ${tabIndex === 1 ? 'border-black' : 'border-white'}`} onClick={() => setTabIndex(1)}>
                    {
                    tabIndex === 1 ? 
                        <div>
                            <IoImage style={{fontSize: 24}} />
                        </div>
                    :
                        <div>
                            <IoImageOutline style={{fontSize: 24, color: '#999'}} />
                        </div>
                    }
                    </div>
                    <div className={`flex-1 flex justify-center items-center border-b-2 transition-all duration-100 ${tabIndex === 2 ? 'border-black' : 'border-white'}`} onClick={() => setTabIndex(2)}>
                    {
                    tabIndex === 2 ? 
                        <div>
                            <BsCameraVideoFill style={{fontSize: 26}} />
                        </div>
                    :
                        <div>
                            <BsCameraVideo style={{fontSize: 26, color: '#999'}} />
                        </div>
                    }
                    </div>
                </div>
            </div>
            {
                tabIndex === 0 ? 
                <div className="flex flex-wrap" style={{gap: '0.5dvw'}}>
                {dataSet.map((r, i) => {
                    return (
                        <GalleryItem 
                            key={i} 
                            data={r} 
                            onClick={() => {
                                
                            }} 
                        />
                    )
                })}
                </div>
                :
                tabIndex === 1 ?
                <div className="flex flex-wrap" style={{gap: '0.5dvw'}}>
                {dataSet.map((r, i) => {
                    return (
                        <GalleryItem 
                            key={i} 
                            data={r} 
                            onClick={() => {
                                
                            }} 
                        />
                    )
                })}
                </div>
                : 
                <div className="bg-slate-50 flex items-center justify-center" style={{height: '100dvw'}}>
                    <p className="text-sm text-slate-400">게시물이 없어요</p>
                </div>
            }
        </Fragment>
    )
}

export default React.memo(Components);