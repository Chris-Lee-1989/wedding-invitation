"use client"
import React, { Fragment } from 'react';



import StoryList from './StoryList';
import Header from './Header';
import Feeds from './Feeds';
import BottomMenu from '../bottomMenu';

const Components = () => {

    return (
        <Fragment>
            <Header />
            <StoryList />
            <Feeds />
            <BottomMenu />
        </Fragment>
    )
}

export default React.memo(Components);