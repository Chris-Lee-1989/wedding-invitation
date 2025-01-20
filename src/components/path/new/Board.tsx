"use client"
import Connection from '@/components/layout/Connection';
import React, { Fragment } from 'react';
import { TfiClose } from "react-icons/tfi";
import { message } from "antd";
import crypto from "crypto-js";
import { cryptoKey } from '@/configs/keys';

// 폰트
import { Button, Input } from 'antd';
import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { onApiErrorModal } from '@/components/layout/CommonModal';
import dayjs from 'dayjs';
import { Parisienne, Gowun_Dodum } from 'next/font/google'
const parisienne = Parisienne({ subsets: ['latin'], weight: ['400']});  
const gowun = Gowun_Dodum({ subsets: ['latin'], weight: ['400']});

const Components = () => {

    // 메시지
    const [messageApi, contextHolder] = message.useMessage();
    
    // 글쓰기 모드
    const [mode, setMode] = React.useState<'read'|'write'|'edit'>('read');

    // 글쓰기 양식
    const [title, setTitle] = React.useState<string>('');
    const [content, setContent] = React.useState<string>('');

    // 수정 데이터
    const [editData, setEditData] = React.useState<any>(undefined);

    // 데이터 조회
    const fetch1 = useQuery({
        queryKey: ['getGuestbook'],
        queryFn: async () => {
            const res = await axios.get(`/api/guestbook`);
            return res.data?.dataSet||[];
        }
    });
    const dataSet = fetch1.data||[];

    // 글쓰기 로직
    const action1 = useMutation({
        mutationFn: async (password: string) => {
            const res = await axios.post(`/api/guestbook`, {
                title: crypto.AES.encrypt(title, cryptoKey).toString(),
                content: crypto.AES.encrypt(content, cryptoKey).toString(),
                password: crypto.AES.encrypt(password, cryptoKey).toString(),
            })
            return res.data;
        },
        onSuccess(data, variables, context) {
            setTitle("");
            setContent("");
            fetch1.refetch();
            messageApi.success('방명록이 등록되었습니다.');
            setMode('read');
        },
        onError: onApiErrorModal,
    });

    // 글쓰기 버튼 클릭 이벤트
    const onWrite = () => {
        if (!title) messageApi.error('이름을 입력해주세요.');
        else if (!content) messageApi.error('내용을 입력해주세요.');
        else {
            const password = prompt('비밀번호를 입력해주세요.');
            if (password) action1.mutate(password);
            else messageApi.error('비밀번호를 입력해주세요.');
        }
    }

    // 삭제 로직
    const action2 = useMutation({
        mutationFn: async (props: {rowKey: string; password: string;}) => {
            const res = await axios.delete(`/api/guestbook/${props.rowKey}?password=${crypto.AES.encrypt(props.password, cryptoKey).toString()}`);
            return res.data;
        },
        onSuccess(data, variables, context) {
            fetch1.refetch();
            messageApi.success('방명록이 삭제되었습니다.');
            setMode('read');
        },
        onError: onApiErrorModal,
    });

    // 비밀번호 확인 로직
    const action3 = useMutation({
        mutationFn: async (props: {rowKey: string; password: string;}) => {
            const res = await axios.get(`/api/guestbook/${props.rowKey}`, {
                params: {
                    password: crypto.AES.encrypt(props.password, cryptoKey).toString()
                }
            });
            return res.data?.dataSet;
        },
        onSuccess(data, variables, context) {
            setMode('edit');
            setEditData(data);
        },
        onError: onApiErrorModal,
    });

    // 수정 로직
    const action4 = useMutation({
        mutationFn: async (editData: any) => {
            const res = await axios.patch(`/api/guestbook/${editData.rowKey}`, {
                name: crypto.AES.encrypt(editData.name, cryptoKey).toString(),
                content: crypto.AES.encrypt(editData.content, cryptoKey).toString(),
                password: crypto.AES.encrypt(action3.variables?.password ? action3.variables?.password : '', cryptoKey).toString(),
            });
            return res.data;
        },
        onSuccess(data, variables, context) {
            setEditData(undefined);
            fetch1.refetch();
            messageApi.success('방명록이 수정되었습니다.');
            setMode('read');
        },
        onError: onApiErrorModal,
    });

    const onEdit = () => {
        if (!editData.name) messageApi.error('이름을 입력해주세요.');
        else if (!editData.content) messageApi.error('내용을 입력해주세요.');
        else action4.mutate(editData);
    }

    return (
        <Fragment>
            {contextHolder}
            <div className="w-full flex flex-col items-center justify-center py-40" style={{background: '#F4EDDB'}}>

                <div className={`flex justify-center w-full`}>
                    <p data-aos="fade-up" data-aos-duration="800" className={`${parisienne.className} w-full text-center text-2xl text-rose-300`}>Guest book</p>
                </div>

                <p className={`mt-8 w-full text-center text-slate-700 font-bold ${gowun.className}`} data-aos="fade-up" data-aos-duration="800"><strong>방명록</strong></p>

                <div className={`mt-10 p-6 flex flex-col items-center  border-t border-dashed w-full ${gowun.className}`} style={{borderTopColor: '#D4CDBB'}} data-aos="fade-up" data-aos-duration="800">
                {
                    mode === 'read' ? 
                    <>
                        <div className={`w-full h-12 flex items-center justify-center border rounded-md bg-white active:border-slate-400`} onClick={() => setMode('write')}>
                            <p className="text-slate-700 text-sm">글쓰기</p>
                        </div>
                        {dataSet.length === 0 && <div className="flex flex-col gap-2 justify-center mt-12">
                            <p className="text-slate-800 text-sm text-center font-bold">작성된 방명록이 없어요.</p>    
                            <p className="text-slate-400 text-xs text-center">첫 방명록을 작성해주세요.</p>    
                        </div>} 
                        {dataSet.map((r: any, idx: number) => {
                            return (
                                <div 
                                    key={`guestbook-${idx}`}
                                    className="bg-white border border-slate-200 p-4 rounded-md w-full mt-2 shadow-sm flex flex-col gap-2"
                                >
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm font-bold">{r.name}</p>
                                        <div className="flex">
                                            <p 
                                                onClick={() => {
                                                    try {
                                                        const password = prompt('비밀번호를 입력해주세요.');
                                                        if (password) {
                                                            action3.mutate({rowKey: r.rowKey, password});
                                                        }
                                                    } catch (err) {
                                                        console.error(err);
                                                    }
                                                    
                                                }} 
                                                className="text-xs p-1 text-slate-600 active:text-slate-300"
                                            >수정</p>
                                            <p 
                                                onClick={() => {
                                                    try {
                                                        const password = prompt('비밀번호를 입력해주세요.');
                                                        if (password) {
                                                            action2.mutate({rowKey: r.rowKey, password});
                                                        }
                                                    } catch (err) {
                                                        console.error(err);
                                                    }
                                                }} 
                                                className="text-xs p-1 text-slate-600  active:text-slate-300"
                                            >삭제</p>
                                        </div>
                                    </div>
                                    <p className="text-sm">{r.content}</p>
                                    <p className="text-xs text-slate-400">{dayjs(r.insertDate).format('YY.MM.DD HH:mm')}</p>
                                </div>

                            )
                        })}
                    </>
                    : mode === "write" ?
                    <>
                        <div className="w-full flex justify-end bg-white p-4" style={{borderRadius: '6px 6px 0 0'}}>
                            <Button size="small" type="text" icon={<TfiClose style={{color: '#999'}} />} onClick={() => setMode('read')} />
                        </div>
                        <div className={`note-bg w-full flex flex-col items-center bg-white `} style={{borderRadius: '0 0 6px 6px'}}>
                            
                            <div className="w-full flex" style={{height: 32}}>
                                <div className="w-20 flex items-center justify-end pr-2" style={{height: 32}}>
                                    <p>이름:</p>
                                </div>
                                <div className="flex-1">
                                    <Input 
                                        autoFocus
                                        value={title} 
                                        type="text" 
                                        className={`${gowun.className} w-full`}
                                        onChange={(e) => setTitle(e.target.value)} 
                                        style={{
                                            padding: 0,
                                            border: 0,
                                            marginTop: 3,
                                            paddingLeft: 12,
                                            background: 'transparent',
                                            outline: 'none',
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="w-full flex">
                                <div className="w-20 flex items-center justify-end pr-2" style={{height: 32}}>
                                    <p>내용:</p>
                                </div>
                                <div className={`${gowun.className} flex-1`}>
                                    <Input.TextArea
                                        className={`${gowun.className} w-full`}
                                        value={content} 
                                        onChange={(e) => setContent(e.target.value)} 
                                        autoSize={{ minRows: 6, maxRows: 12 }}
                                        style={{
                                            padding: 0,
                                            border: 0,
                                            lineHeight: '32px',
                                            marginTop: 3,
                                            paddingLeft: 12,
                                            background: 'transparent',
                                            outline: 'none',
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="w-full flex justify-end bg-white p-4" style={{borderRadius: '0 0 6px 6px'}}>
                                <div className={`w-full h-12 flex items-center justify-center border rounded-md bg-white transition-all duration-150 active:border-slate-400`} onClick={onWrite}>
                                    <p className="text-slate-700 text-sm">글쓰기</p>
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div className="w-full flex justify-end bg-white p-4" style={{borderRadius: '6px 6px 0 0'}}>
                            <Button size="small" type="text" icon={<TfiClose style={{color: '#999'}} />} onClick={() => setMode('read')} />
                        </div>
                        <div className={`note-bg w-full flex flex-col items-center bg-white transition-all duration-150`} style={{borderRadius: '0 0 6px 6px'}}>
                            
                            <div className="w-full flex" style={{height: 32}}>
                                <div className="w-20 flex items-center justify-end pr-2" style={{height: 32}}>
                                    <p>이름:</p>
                                </div>
                                <div className="flex-1">
                                    <Input 
                                        autoFocus
                                        value={editData.name} 
                                        type="text" 
                                        className={`${gowun.className} w-full`}
                                        onChange={(e) => setEditData({...editData, name: e.target.value})} 
                                        style={{
                                            padding: 0,
                                            border: 0,
                                            marginTop: 3,
                                            paddingLeft: 12,
                                            background: 'transparent',
                                            outline: 'none',
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="w-full flex">
                                <div className="w-20 flex items-center justify-end pr-2" style={{height: 32}}>
                                    <p>내용:</p>
                                </div>
                                <div className={`${gowun.className} flex-1`}>
                                    <Input.TextArea
                                        className={`${gowun.className} w-full`}
                                        value={editData.content} 
                                        onChange={(e) => setEditData({...editData, content: e.target.value})} 
                                        autoSize={{ minRows: 6, maxRows: 12 }}
                                        style={{
                                            padding: 0,
                                            border: 0,
                                            lineHeight: '32px',
                                            marginTop: 3,
                                            paddingLeft: 12,
                                            background: 'transparent',
                                            outline: 'none',
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="w-full flex justify-end bg-white p-4" style={{borderRadius: '0 0 6px 6px'}}>
                                <div className={`w-full h-12 flex items-center justify-center border rounded-md bg-white transition-all duration-150 active:border-slate-400`} onClick={onEdit}>
                                    <p className="text-slate-700 text-sm">수정하기</p>
                                </div>
                            </div>
                        </div>
                    </>
                }

                    

                </div>

            </div>
        </Fragment>
    )
}

export default React.memo(Components);