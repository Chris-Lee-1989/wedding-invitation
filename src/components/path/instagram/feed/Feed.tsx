"use client"
import { Button, Image } from 'antd';
import React, { Fragment } from 'react';
import { BsPatchCheckFill } from "react-icons/bs";
import { GoHeart } from "react-icons/go";
import { BiMessageRounded, BiHeart } from "react-icons/bi";
import dayjs from 'dayjs';


interface Props {
    number: number;
    data: FeedType;
}
const Components = ({ data, number }: Props) => {

    // 더보기
    const [isMore, setIsMore] = React.useState(false);

    return (
        <Fragment>
            <div className={`flex flex-col ${number ? 'border-t border-t-100' : ''}`} >
                {/* 헤더 */}
                <div className="flex items-center border-b border-b-slate-100 h-12 px-2 gap-2">
                    <Image 
                        preview={false} 
                        src={data.profileImage}
                        style={{
                            borderRadius: '100%',
                            width: 32,
                            height: 32,
                        }}
                    />
                    <p className="text-xs font-bold mb-0.5">{data.id}</p>
                    <BsPatchCheckFill style={{fontSize: 12, color: "#0ea5e9"}} className="text-sky-500" />
                </div>
                {/* 이미지 */}
                <div style={{width: '100dvw', height: '100dvw'}} className="bg-rose-50 flex items-center justify-center">
                    <Image 
                        preview={false}
                        src={data.feedImage}
                        style={{
                            width: '100dvw',
                            height: '100dvw',
                            objectFit: 'cover',
                        }}
                    />
                </div>
                {/* 버튼 리스트 */}
                <div className="flex flex-col">
                    <div className="flex h-12 items-center gap-4 px-4">
                        <Button type="text" size="small" icon={<BiHeart style={{fontSize: 28}} />}/>
                        <Button type="text" size="small" icon={<BiMessageRounded style={{fontSize: 28}} />}/>
                    </div>
                    <div className="px-4 flex items-center">
                        <p className="text-sm font-bold">좋아요 397개</p>
                    </div>
                </div>
                {/* 컨텐츠 */}
                <div className="px-4 py-3 break-words whitespace-pre-wrap">
                    {
                        isMore ? 
                            <p key="is-more-1" className="text-sm inline-block"><p className="inline-block font-bold mr-2">{data.id}</p>{data.content}</p>
                        :
                            <p key="is-more-2" className="text-sm inline-block"><p className="inline-block font-bold mr-2">{data.id}</p>{data.content.substring(0, 50) + '...'}<Button size="small" type="link" onClick={() => setIsMore(true)} >더보기</Button></p>
                    }
                    {isMore && <div className="flex items-center flex-wrap py-2">
                    {data.tags.split(',').map((r, idx) => {
                        return (
                            <p key={idx} className="text-sm text-blue-600 mr-1">#{r}</p>
                        )
                    })}
                    </div>}
                </div>
                <div className="px-4 pb-2">
                    <p className="text-xs text-slate-400"># 위 피드는 AI가 작성하였습니다.</p>
                </div>
                {/* 댓글 */}
                <div className="px-4 flex flex-col gap-1 mb-4">
                    <div>
                        <Button type="text" size="small" style={{padding: 0}}>
                            <p className="text-sm text-slate-600">댓글 1391개 모두 보기</p>
                        </Button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default React.memo(Components);