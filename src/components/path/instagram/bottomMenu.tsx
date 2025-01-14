"use client"
import { usePathname, useRouter } from 'next/navigation';
import React, { Fragment, useMemo, useState } from 'react';
import { GoHome, GoHomeFill, GoPerson, GoPersonFill } from "react-icons/go";
import { FaMessage, FaRegMessage } from "react-icons/fa6";
import { FaComment, FaRegComment } from "react-icons/fa6";
import { Button } from 'antd';

const Components = () => {
    const router = useRouter();
    const pathname = usePathname();
    const path = useMemo(() => {
        const pathArr = pathname.split('/');
        const path = pathArr[2];
        return path
    }, [pathname]);
    return (
        <Fragment>
            <div className="h-12" />
            <div className="fixed bottom-0 left-0 w-full bg-white border-t border-slate-100 h-12 flex items-center justify-evenly">
                <div className="flex flex-col">
                    <Button onClick={() => {router.push('/instagram/feed')}} type="text" icon={path === 'feed' ? <GoHomeFill className="text-3xl" /> : <GoHome className="text-3xl" />} />
                </div>
                <div className="flex flex-col">
                    <Button onClick={() => {router.push('/instagram/message')}} type="text" icon={path === 'message' ? <FaComment className="text-2xl" /> : <FaRegComment className="text-2xl" />} />
                </div>
                <div className="flex flex-col">
                    <Button onClick={() => {router.push('/instagram/my')}} type="text" icon={path === 'my' ? <GoPersonFill className="text-3xl" /> : <GoPerson className="text-3xl" />} />
                </div>
            </div>
        </Fragment>
    )
}

export default React.memo(Components);