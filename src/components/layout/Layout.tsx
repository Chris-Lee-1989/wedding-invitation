"use client"
import { usePathname } from 'next/navigation';
import React, { Fragment } from 'react';

interface Props {
    children?: React.ReactNode;
}
const Components = ({children}: Props) => {

    const pathname  = usePathname();
    const pathArr = pathname.split('/');

    return (
        <Fragment>
            {
                pathArr[1] === 'admin' ? 
                children
                :
                <div 
                    style={{
                        width: '100%', 
                        maxWidth: '400px', 
                        margin: 'auto', 
                        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 2px 15px 0px', 
                        minHeight: '100dvh', 
                        overflow: 'hidden'
                    }}
                >
                {children}
                </div>
            }
            
        </Fragment>
    )
}

export default React.memo(Components);