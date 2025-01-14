"use client"
import { useQuery } from '@tanstack/react-query';
import { Button } from 'antd';
import axios from 'axios';
import React, { Fragment } from 'react';
import MyAddModal from './MyAddModal';

const Components = () => {

    // 피드 조회
    const fetch1 = useQuery({
        queryKey: ['getBoards'],
        queryFn: async () => {
            const res = await axios.get('/api/feeds', {
                params: {
                    type: '2',
                }
            });
            return res.data?.dataSet||[];
        },
    });
    const dataSet = fetch1.data||[];

    // 추가 모달 창
    const [isAdd, setAdd] = React.useState(false);
    // 수정 모달 창
    const [isEdit, setEdit] = React.useState({});
    
    return (
        <Fragment>
            <div className="flex items-center p-2 gap-2">
                <Button size="middle" loading={fetch1.isFetching} onClick={() => fetch1.refetch()}>새로고침</Button>
                <Button size="middle" onClick={() => setAdd(true)} >게시물 작성</Button>
            </div>
            <MyAddModal open={isAdd} close={() => setAdd(false)} refetch={() => fetch1.refetch()} />

        </Fragment>
    )
}

export default React.memo(Components);