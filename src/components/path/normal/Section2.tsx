"use client"
import { useScroll, useUpdateEffect } from 'ahooks';
import React, { Fragment, useRef } from 'react';

const Components = () => {



    return (
        <Fragment>
        <div style={{height: '400px'}} />
        <div className="w-dvw flex flex-col items-center gap-10 bg-rose-50 justify-center" style={{height: '1200px'}}>
            <p data-aos="fade-up" data-aos-once="false" data-aos-duration="600" className="text-lg">같은 생각, 같은 느낌.</p>
            <p data-aos="fade-up" data-aos-once="false" data-aos-duration="600" className="text-lg">나 자신을 바라보는 듯한 편안함.</p>
            <p data-aos="fade-up" data-aos-once="false" data-aos-duration="600" className="text-lg">그런 사람이 내 곁에서</p>
            <p data-aos="fade-up" data-aos-once="false" data-aos-duration="600" className="text-lg">나를 바라보고 있다는 것.</p>
            <p data-aos="fade-up" data-aos-once="false" data-aos-duration="600" className="text-lg">나를 믿어주고,</p>
            <p data-aos="fade-up" data-aos-once="false" data-aos-duration="600" className="text-lg">내 편이 되어준다는 것이 참 좋습니다.</p>
            <p data-aos="fade-up" data-aos-once="false" data-aos-duration="600" className="text-lg">그래서 많이 행복합니다.</p>
            <p data-aos="fade-up" data-aos-once="false" data-aos-duration="600" className="text-lg">꼭 오셔서 축복해 주십시오.</p>
            <p data-aos="fade-up" data-aos-once="false" data-aos-duration="600" className="text-lg">흐뭇하실 수 있도록 잘 살겠습니다.</p>
        </div>
        </Fragment>
    )
}

export default React.memo(Components);