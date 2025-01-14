"use client"

import { RecoilRoot } from 'recoil';
import React, { ReactNode } from 'react';

interface Props {
    children: ReactNode|ReactNode[];
}

const Components = ({ children }: Props) => {

    return (
        <RecoilRoot>
        {children}
        </RecoilRoot>
    )
}

export default React.memo(Components);