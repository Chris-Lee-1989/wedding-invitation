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
import Accounts from './Accounts';

let isAutoPlay = true;
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

    const [isPlay, setIsPlay] = useState<boolean>(audioRef.current?.paused||false);
    const onPlay = useCallback(() => {
        if (audioRef.current) {
            if (audioRef.current.paused && isAutoPlay) {
                audioRef.current.play()
                .then(() => {
                    setIsPlay(true)
                })
                .catch((error) => {
                    console.error(error);
                    setIsPlay(false)
                });
            }
        }
    }, []);


    useMount(() => {
        document.addEventListener('scroll', onPlay);
    });

    useUnmount(() => {
        document.removeEventListener('scroll', onPlay);
    })

    return (
        <div>
            <input type="hidden" id="audio" value="on" />
            <audio ref={audioRef} src="/bgm.mp3" loop />
            <FloatButton 
                onClick={() => {
                    if (isPlay) {
                        isAutoPlay = false;
                        setIsPlay(false);
                        audioRef.current?.pause();
                    } else {
                        isAutoPlay = true;
                        setIsPlay(true);
                        audioRef.current?.play();
                    }
                }}
                icon={isPlay ? <HiOutlineSpeakerWave /> : <HiOutlineSpeakerXMark />}
            />
            <Main />
            <Text />
            <Calendar />
            <Gallery />
            <Map />
            <Transportation />
            <Infomation />
            <Accounts />
            <Board />
        </div>
    )
    
}

export default React.memo(Components);