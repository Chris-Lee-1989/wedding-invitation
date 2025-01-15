"use client"
import React, { Fragment, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';

// AOS
import AOS from "aos";
import "aos/dist/aos.css";
import { useMount, useTimeout, useUnmount, useUpdateEffect } from 'ahooks';

import Main from './Main';
import Text from './Text';
import Gallery from './Gallery';
import Board from './Board';
import Map from './Map';
import Calendar from './Calendar';
import Transportation from './Transportation';
import Infomation from './Infomation';
import { FloatButton } from 'antd';
import { FaPlay } from "react-icons/fa6";
import { FaPause } from "react-icons/fa";
import { HiOutlineSpeakerWave, HiOutlineSpeakerXMark } from "react-icons/hi2";


const Components = () => {

    // AOS
    useMount(() => {
        AOS.init();
    });

    const audioRef = useRef<HTMLAudioElement>(null);
    const handleAudioToggle = () => {
        if (audioRef.current) {
            if (audioRef.current.paused) {
                audioRef.current.play().then(() => setIsPlay(true)).catch(() => setIsPlay(false));
            } else {
                setIsPlay(false);
                audioRef.current.pause();
            }
        }
    };

    const onPlay = () => {
        if (audioRef.current) {
            if (audioRef.current.paused) {
                audioRef.current.play().then(() => setIsPlay(true)).catch(() => setIsPlay(false));
            }
        }
    };

    const [isPlay, setIsPlay] = useState<boolean>(audioRef.current?.paused||false);

    useMount(() => {
        document.addEventListener('scroll', onPlay);
        document.addEventListener('visibilitychange', handleAudioToggle);
    });

    useUnmount(() => {
        document.removeEventListener('scroll', onPlay);
        document.removeEventListener('visibilitychange', handleAudioToggle);
    })
    
    return (
        <Fragment>
            <audio ref={audioRef} src="/bgm.mp3" loop />
            <FloatButton 
                onClick={handleAudioToggle}
                icon={isPlay ? <HiOutlineSpeakerWave /> : <HiOutlineSpeakerXMark />}
            />
            <Main />
            <Text />
            <Calendar />
            <Gallery />
            <Map />
            <Transportation />
            <Infomation />
            <Board />
        </Fragment>
    )
    
}

export default React.memo(Components);