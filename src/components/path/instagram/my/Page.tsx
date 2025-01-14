"use client"
import React, { Fragment } from 'react';
import BottomMenu from '../bottomMenu';
import Header from './Header';
import Profile from './Profile';
import Gallery from './Gallery';

const Components = () => {
    return (
        <Fragment>
            <Header />
            <Profile />
            <Gallery />
            <BottomMenu />
        </Fragment>
    )
}

export default React.memo(Components);