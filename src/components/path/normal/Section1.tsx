"use client"
import React, { Fragment } from 'react';
import { BsFillBalloonHeartFill } from "react-icons/bs";

const Components = () => {
    return (
        <Fragment>
            <div className="flex pt-8 px-4 items-center">
                <div className='flex-1 flex flex-col items-center' data-aos="fade-up" data-aos-once="false" data-aos-duration="600">
                    <p className="text-sm">신랑</p>
                    <p className="text-3xl font-medium">이윤민</p>
                </div>
                <div data-aos="fade-up" data-aos-delay="400" data-aos-once="false"  data-aos-duration="800">
                    <BsFillBalloonHeartFill className="text-rose-500"  />
                </div>
                <div className='flex-1 flex flex-col items-center' data-aos="fade-up" data-aos-delay="200" data-aos-once="false" data-aos-duration="600">
                    <p className="text-sm">신부</p>
                    <p className="text-3xl font-medium">김준형</p>
                </div>
            </div>
            <div className="mt-12 flex flex-col items-center gap-1">
                <p data-aos="fade-up" data-aos-delay="500" data-aos-once="false"  data-aos-duration="800">2025.03.29 SAT PM 14:00</p>
                <div className="flex items-center gap-2" data-aos="fade-up" data-aos-delay="700" data-aos-once="false"  data-aos-duration="800">
                    <p>엘리에나호텔</p>
                    <div style={{width: 1, height: 16, marginTop: 3, background: '#ddd'}} />
                    <p>컨벤션홀 2층</p>
                </div>
            </div>
        </Fragment>
    )
}

export default React.memo(Components);