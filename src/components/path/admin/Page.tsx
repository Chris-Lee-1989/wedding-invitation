"use client"
import React, { Fragment } from 'react';
import Feeds from './Feeds';
import Tabs from './Tabs';
import My from './My';

const Components = () => {
    const [tabIndex, setTabIndex] = React.useState(0);
    return (
        <Fragment>
            <Tabs tabIndex={tabIndex} setTabIndex={setTabIndex}  />
        {tabIndex === 0 && <Feeds />}
        {tabIndex === 1 && <My />}
        </Fragment>
    )
}

export default React.memo(Components);