"use client"
import { onApiErrorModal } from '@/components/layout/CommonModal';
import { useMutation } from '@tanstack/react-query';
import { Button, Input, Modal } from 'antd';
import axios, { formToJSON } from 'axios';
import React, { Fragment } from 'react';
import { CiImageOn } from "react-icons/ci";

interface Props {
    open: boolean;
    close: () => void;
    refetch: () => void;
}
const Components = ({open, close, refetch}: Props) => {

    const [form, setForm] = React.useState<any>({
        sort: '',
        id: '',
        content: '',
        tags: '',
        profileImage: undefined,
        feedImage: undefined,
    });

    const onInit = () => {
        setForm({
            sort: '',
            id: '',
            content: '',
            tags: '',
            profileImage: undefined,
            feedImage: undefined,
        })
    }

    const action1 = useMutation({
        mutationFn: async () => {
            const formdata = new FormData();
            formdata.append('id', form.id);
            formdata.append('type', '1');
            formdata.append('content', form.content);
            formdata.append('tags', form.tags);
            formdata.append('profile', form.profileImage);
            formdata.append('feed', form.feedImage);
            const res = await axios.post(`/api/feeds`, formdata);
            return res.data;
        },
        onSuccess(data, variables, context) {
            refetch();
            close();
        },
        onError: onApiErrorModal,
    })

    return (
        <Fragment>
            <Modal
                afterClose={onInit}
                title="피드 작성"
                open={open}
                onCancel={close}
                footer={
                    <Button loading={action1.isPending} onClick={() => action1.mutate()} type="primary" size="middle" >게시</Button>
                }
            >
                <div className="flex flex-col gap-4">
                    {
                        form.profileImage ? 
                        <div 
                            className="gap-3 border border-slate-200 rounded-lg px-4 transition-all duration-200 hover:border-slate-400 cursor-pointer flex items-center"
                            onClick={() => setForm({...form, profileImage: undefined})}
                            style={{
                                height: 40
                            }}
                        >
                            <CiImageOn />
                            <p className="text-sm text-slate-600">{form.profileImage.name}</p>
                        </div>
                        :
                        <label 
                            htmlFor="profile-image"
                            className="border border-slate-300 rounded-lg flex items-center px-4 transition-all duration-200 hover:border-slate-400 cursor-pointer"
                            style={{
                                height: 40
                            }}
                        >
                            <p className="text-sm text-slate-600">프로필 이미지 업로드</p>
                        </label>
                    }
                    <Input placeholder="아이디" value={form.id} onChange={(e) => setForm({...form, id: e.target.value})} />
                    <input 
                        id="profile-image"
                        style={{display: 'none'}}
                        type="file" 
                        accept="image/*"
                        onChange={(e: any) => { 
                            if (e.target.files) {
                                setForm({...form, profileImage: e.target.files[0]})
                            } else setForm({...form, profileImage: undefined})
                        }} 
                    />
                    <input 
                        id="feed-image"
                        style={{display: 'none'}}
                        type="file" 
                        accept="image/*"
                        onChange={(e: any) => { 
                            if (e.target.files) {
                                setForm({...form, feedImage: e.target.files[0]})
                            } else setForm({...form, feedImage: undefined})
                        }} 
                    />
                    {
                        form.feedImage ? 
                        <div 
                            className="gap-3 border border-slate-200 rounded-lg px-4 transition-all duration-200 hover:border-slate-400 cursor-pointer flex items-center"
                            onClick={() => setForm({...form, feedImage: undefined})}
                            style={{
                                height: 40
                            }}
                        >
                            <CiImageOn />
                            <p className="text-sm text-slate-600">{form.feedImage.name}</p>
                        </div>
                        :
                        <label 
                            htmlFor="feed-image"
                            className="border border-slate-300 rounded-lg flex items-center px-4 transition-all duration-200 hover:border-slate-400 cursor-pointer"
                            style={{
                                height: 40
                            }}
                        >
                            <p className="text-sm text-slate-600">피드 이미지 업로드</p>
                        </label>
                    }
                    <Input.TextArea placeholder="내용" autoSize rows={20}  value={form.content} onChange={(e) => setForm({...form, content: e.target.value})} />
                    <Input placeholder="태그"  value={form.tags} onChange={(e) => setForm({...form, tags: e.target.value})} />
                </div>

            </Modal>

        </Fragment>
    )
}

export default React.memo(Components);