"use client"
import { Button } from 'antd';
import { useRouter } from 'next/navigation';
import React, { Fragment } from 'react';

interface Props {
    tabIndex: number;
    setTabIndex: React.Dispatch<React.SetStateAction<number>>
}
const Components = ({tabIndex, setTabIndex}: Props) => {

    const router = useRouter();

    return (
        <Fragment>
            <div className="flex p-2 border-b border-b-slate-200 gap-4">
                <Button size="middle" type={tabIndex === 0 ? 'primary' : 'default'} onClick={() => setTabIndex(0)} >피드</Button>
                <Button size="middle" type={tabIndex === 1 ? 'primary' : 'default'} onClick={() => setTabIndex(1)} >게시물</Button>
            </div>
        </Fragment>
    )
}

export default React.memo(Components);