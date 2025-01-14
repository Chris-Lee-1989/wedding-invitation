"use client"
import React, { Fragment } from 'react';
import Feed from './Feed';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const Components = () => {

    // 피드 조회
    const fetch1 = useQuery({
        queryKey: ['getFeeds'],
        queryFn: async () => {
            const res = await axios.get('/api/feeds', {
                params: {
                    type: '1',
                }
            });
            return res.data?.dataSet||[];
        },
    });
    const dataSet: FeedType[] = fetch1.data||[];
    
    return (
        <Fragment>
            <div>
            {dataSet.map((r: any, idx: number) => {
                return (
                    <Feed key={`feed-${idx}`} number={idx} data={r} />
                )
            })}
            </div>
        </Fragment>
    )
}

export default React.memo(Components);