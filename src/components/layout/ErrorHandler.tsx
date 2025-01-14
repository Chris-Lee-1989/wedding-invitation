"use client"
import { Button } from 'antd';
import React, { Fragment } from 'react';
import { HiOutlineRefresh } from "react-icons/hi";
import { FiHome } from "react-icons/fi";
import { useRouter } from 'next/navigation';
import { useJandi } from '@/hooks/useJandi';
import { useMount } from 'ahooks';

const Components = ({error, resetErrorBoundary}: any) => {

    // 라우터
    const router = useRouter();

    const sendJandi = useJandi();
    useMount(() => {
        sendJandi.mutate({type: 'error', message: JSON.stringify(error)});
    });
    

    return (
        <Fragment>
            <div className="w-full h-dvh bg-zinc-100 flex flex-col items-center juscenter pt-20">
                <img className="w-20 h-20" src="https://cdn-icons-png.flaticon.com/512/1304/1304038.png" alt="Error Icon" />
                <p className="mt-4 font-medium text-zinc-700">오류가 발생했습니다</p>
                <div className="p-4 mt-4">
                    <div className="p-4 bg-white shadow-sm rounded-lg">
                        <p className="text-xs text-zinc-500 whitespace-pre-wrap">{error.message}</p>
                    </div>
                </div>
                <div className='px-4 w-full flex gap-4'>
                    <Button size="large" block icon={<HiOutlineRefresh />} onClick={() => resetErrorBoundary()}>재시도</Button>
                    <Button type="primary" size="large" block icon={<FiHome />} onClick={() => router.push('/')}>홈으로</Button>
                </div>
            </div>
        </Fragment>
    )
}

export default React.memo(Components);