"use client"
import { Button } from 'antd';
import React, { Fragment } from 'react';
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa6";

const Components = () => {

    const handleCall = (phoneNumber: string) => {
        window.location.href = `tel:${phoneNumber}`;
    };

    const handleMessage = (phoneNumber: string) => {
        window.location.href = `sms:${phoneNumber}`;
    };

    return (
        <Fragment>
            <div className="w-dvw flex flex-col items-center gap-32 bg-slate-100 justify-center" style={{height: '1200px'}}>
                <div className="flex w-full px-8">
                    <div className="flex-1 flex flex-col items-center justify-center gap-4">
                        <p>신랑</p>
                        <div className="flex items-center justify-center gap-6">
                            <Button onClick={() => handleCall('01084244558')} type="text" icon={<BsFillTelephoneFill style={{fontSize: 24, color: '#888'}} />} />
                            <Button onClick={() => handleMessage('01084244558')} type="text" icon={<FaEnvelope style={{fontSize: 24, color: '#888'}} />} />
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center gap-4">
                        <p>신부</p>
                        <div className="flex items-center justify-center gap-6">
                            <Button onClick={() => handleCall('01044407223')} type="text" icon={<BsFillTelephoneFill style={{fontSize: 24, color: '#888'}} />} />
                            <Button onClick={() => handleMessage('01044407223')} type="text" icon={<FaEnvelope style={{fontSize: 24, color: '#888'}} />} />
                        </div>
                    </div>
                </div>
                <div className="flex w-full px-8">
                    <div className="flex-1 flex flex-col items-center justify-center gap-4">
                        <p>신랑 측 혼주</p>
                        <div className="flex gap-2 items-center">
                            <p className="text-xs text-slate-600">아버지</p>
                            <p className="font-bold">이상호</p>
                        </div>
                        <div className="flex items-center justify-center gap-6">
                            <Button onClick={() => handleCall('01084244558')} type="text" icon={<BsFillTelephoneFill style={{fontSize: 24, color: '#888'}} />} />
                            <Button onClick={() => handleMessage('01084244558')} type="text" icon={<FaEnvelope style={{fontSize: 24, color: '#888'}} />} />
                        </div>
                        <div className="flex gap-2 items-center">
                            <p className="text-xs text-slate-600">어머니</p>
                            <p className="font-bold">정월순</p>
                        </div>
                        <div className="flex items-center justify-center gap-6">
                            <Button  onClick={() => handleCall('01084244558')} type="text" icon={<BsFillTelephoneFill style={{fontSize: 24, color: '#888'}} />} />
                            <Button onClick={() => handleMessage('01084244558')} type="text" icon={<FaEnvelope style={{fontSize: 24, color: '#888'}} />} />
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center gap-4">
                        <p>신부 측 혼주</p>
                        <div className="flex gap-2 items-center">
                            <p className="text-xs text-slate-600">아버지</p>
                            <p className="font-bold">김복규</p>
                        </div>
                        <div className="flex items-center justify-center gap-6">
                            <Button onClick={() => handleCall('01044407223')} type="text" icon={<BsFillTelephoneFill style={{fontSize: 24, color: '#888'}} />} />
                            <Button onClick={() => handleMessage('01044407223')} type="text" icon={<FaEnvelope style={{fontSize: 24, color: '#888'}} />} />
                        </div>
                        <div className="flex gap-2 items-center">
                            <p className="text-xs text-slate-600">어머니</p>
                            <p className="font-bold">김선자</p>
                        </div>
                        <div className="flex items-center justify-center gap-6">
                            <Button onClick={() => handleCall('01044407223')} type="text" icon={<BsFillTelephoneFill style={{fontSize: 24, color: '#888'}} />} />
                            <Button onClick={() => handleMessage('01044407223')} type="text" icon={<FaEnvelope style={{fontSize: 24, color: '#888'}} />} />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default React.memo(Components);