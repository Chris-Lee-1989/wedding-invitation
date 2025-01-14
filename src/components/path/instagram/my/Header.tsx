"use client"
import { Button } from 'antd';
import React, { Fragment, useEffect, useState } from 'react';
import { LuSend } from "react-icons/lu";

const Components = () => {
    
    // 스크롤 방향
    const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
    useEffect(() => {
        let lastScrollY = window.pageYOffset;
        const updateScrollDirection = () => {
            const scrollY = window.pageYOffset;
            const direction = scrollY > lastScrollY ? 'down' : 'up';
            if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
                setScrollDirection(direction);
            }
            lastScrollY = scrollY > 0 ? scrollY : 0;
        };
        window.addEventListener('scroll', updateScrollDirection);
        return () => {
            window.removeEventListener('scroll', updateScrollDirection);
        };
    }, [scrollDirection]);

    return (
        <Fragment>
            <div className={`fixed justify-between top-0 z-50 w-dvw flex items-center px-4 bg-white transition-all duration-300 overflow-hidden ${scrollDirection === 'down' ? 'h-0' : 'h-12'}`}>  
                <p className={`font-bold text-xl`} style={{color: '#222'}}>Wedding Invitation</p>
            </div>
            <div className="w-full h-12" />
        </Fragment>
    )
}

export default React.memo(Components);