"use client"

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { ReactNode } from 'react';


interface Props {
    children: ReactNode|ReactNode[];
}

const Components = ({ children }: Props) => {

    const [queryClient] = React.useState(() => new QueryClient())

    return (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )
}

export default React.memo(Components);