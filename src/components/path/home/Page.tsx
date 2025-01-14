"use client"
import { Button } from 'antd';
import { useRouter } from 'next/navigation';
import React, { Fragment } from 'react';
const Components = () => {

    // 라우터
    const router = useRouter();

    return (
        <Fragment>
            <div className="p-4 flex flex-col gap-2">
                <Button onClick={() => router.push('/normal')}>일반적인 모바일 청첩장</Button>
                <Button onClick={() => router.push('/instagram/feed')}>인스타그램 모바일 청첩장</Button>
                <Button onClick={() => router.push('/new')}>정식 모바일 청첩장</Button>
            </div>
        </Fragment>
    )
}

export default React.memo(Components);