"use client"
import React, { Fragment } from 'react';

const Components = () => {
    return (
        <Fragment>
            <div className="w-full flex p-4 gap-4 max-w-full overflow-x-auto border-b border-b-slate-100">
                <Story id="dol__dol_2" profileImage="" />
                <Story id="love_2h2d" profileImage="" />
                <Story id="wjsmswls" profileImage="" />
                <Story id="leeyoonmi" profileImage="" />
                <Story id="salgoo" profileImage="" />
                <Story id="Elon Musk" profileImage="" />
            </div>
        </Fragment>
    )
}

interface StoryProps {
    id: string;
    profileImage: string;
}
const Story = ({ id, profileImage}: StoryProps) => {
    return (
        <div className="flex flex-col items-center justify-center gap-1">
            <div style={{width: 66, height: 66}} className="rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center">
                <div style={{width: 60, height: 60}} className="rounded-full bg-white flex items-center justify-center">  
                    <div style={{width: 54, height: 54}} className="rounded-full bg-slate-200">

                    </div>
                </div>
            </div>
            <p className="" style={{fontSize: 10}}>{id}</p>
        </div>
    )
}

export default React.memo(Components);