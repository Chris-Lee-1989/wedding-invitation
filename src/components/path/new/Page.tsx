"use client"
import React, { Fragment, useEffect, useState } from 'react';

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

import { FullpageContainer, FullpageSection } from '@shinyongjun/react-fullpage';
import '@shinyongjun/react-fullpage/css';
import Main from './Main';
import { useMount } from 'ahooks';
import Text from './Text';
import Gallery from './Gallery';
import Board from './Board';
import Map from './Map';

const Components = () => {

    // AOS
    useMount(() => {
        AOS.init();
    });
    
    const [activeIndex, setActiveIndex] = useState<number>(2);
    return (
        <Fragment>
            <FullpageContainer
                transitionDuration={500}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            >
            <FullpageSection>
                <Main />
            </FullpageSection>
            <FullpageSection>
                <Text />
            </FullpageSection>
            <FullpageSection>
                <Gallery />
            </FullpageSection>
            <FullpageSection>
                <Map />
            </FullpageSection>
            <FullpageSection>
                <Board />
            </FullpageSection>
            </FullpageContainer>
        </Fragment>
    )
}

export default React.memo(Components);