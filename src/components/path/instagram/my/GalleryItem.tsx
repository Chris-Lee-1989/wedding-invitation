"use client"
import React, { Fragment } from 'react';
import {Image} from 'antd';

interface Props {
    data: FeedType;
    onClick: () => void;
}
const Components = ({ data }: Props) => {
    return (
        <Fragment>
            <div 
                className={"bg-slate-100 transition-all duration-100 active:opacity-50"}
                style={{
                    width: '33vw', 
                    height: '33vw',
                    overflow: 'hidden',
                    backgroundImage: `url(${data.feedImage})`,
                    backgroundSize: 'cover',
                }}
            >
                
            </div>
        </Fragment>
    )
}

export default React.memo(Components);