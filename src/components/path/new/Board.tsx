"use client"
import React, { Fragment } from 'react';

const Components = () => {
    return (
        <Fragment>
            <div className="w-dvw h-dvh bg-teal-500 flex items-center justify-center">
                <p>방명록</p>
            </div>
        </Fragment>
    )
}

export default React.memo(Components);