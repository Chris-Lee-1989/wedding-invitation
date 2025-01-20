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
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

let isAutoPlay = true;
const Components = () => {

    // 이미지 조회
    const fetch1 = useQuery({
        queryKey: ['getImages'],
        queryFn: async () => {
            const res = await axios.get(`/api/images`);
            return res.data?.dataSet || [];
        }
    });

    const images: I_Images[] = fetch1.data||[];
    const { mainImage, calendarImage1, calendarImage2, gallery } = useMemo(() => {
            const mainImage = images.filter((v) => v.type === '01')[0];
            const calendarImage1 = images.filter((v) => v.type === '02' && v.sort === 0)[0];
            const calendarImage2 = images.filter((v) => v.type === '02' && v.sort === 1)[0];
            const gallery = images.filter((v) => v.type === '03');
            return { mainImage, calendarImage1, calendarImage2, gallery }
    }, [images]);

    // AOS
    useMount(() => {
        AOS.init();
    });

    const audioRef = useRef<HTMLAudioElement>(null);
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
        fetch1.isSuccess ? 
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
            {mainImage && <Main image={mainImage} />}
            <Text />
            {calendarImage1 && calendarImage2 && <Calendar image1={calendarImage1} image2={calendarImage2} />}
            {gallery.length > 0 && <Gallery gallery={gallery} />}
            <Map />
            <Transportation />
            <Infomation />
            <Accounts />
            <Board />
        </div>
        :
        <></>
    )
    
}

export default React.memo(Components);