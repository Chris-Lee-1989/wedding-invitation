"use client"
import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { Fragment, useMemo } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Parisienne, Gowun_Dodum } from 'next/font/google'
import { onApiErrorModal } from '@/components/layout/CommonModal';
import { Image } from 'antd';
import DragAndDrop from './DragAndDrop';
const parisienne = Parisienne({ subsets: ['latin'], weight: ['400']});  
const gowun = Gowun_Dodum({ subsets: ['latin'], weight: ['400']});

const Components = () => {

    const fetch1 = useQuery({
        queryKey: ['getImages'],
        queryFn: async () => {
            const res = await axios.get(`/api/images`);
            return res.data?.dataSet || [];
        }
    });
    const images: I_Images[] = fetch1.data||[];

    // 카운터
    const [count, setCount] = React.useState(0);

    const action1 = useMutation({
        mutationFn: async (props: FormData) => {
            const res = await axios.post(`/api/images`, props);
            return res.data;
        },
        onSuccess(data, variables, context) {
            fetch1.refetch();
        },
        onError: onApiErrorModal,
    })

    // 사진 선택
    const onSelectFiles = async (type: string, sort: number, files:FileList|null) => {
        if (files === null) {
            return false;
        }
        const file = Array.from(files)[0];
        // const url = URL.createObjectURL(file);
        const formdata = new FormData();
        formdata.append('type', type);
        formdata.append('sort', String(sort));
        formdata.append('file', file);
        action1.mutate(formdata);
    }


    const { mainImage, calendarImage1, calendarImage2, gallery} = useMemo(() => {
        const mainImage = images.filter((v) => v.type === '01')[0];
        const calendarImage1 = images.filter((v) => (v.type === '02' && v.sort === 0))[0];
        const calendarImage2 = images.filter((v) => v.type === '02' && v.sort === 1)[0];
        const gallery = images.filter((v) => v.type === '03');
        return { mainImage, calendarImage1, calendarImage2, gallery}
    }, [images]);

    const action2 = useMutation({
        mutationFn: async (props: any) => {
            const res = await axios.post(`/api/images/sort`, props);
            return res.data;
        },
        onSuccess(data, variables, context) {
            fetch1.refetch();
        },
        onError: onApiErrorModal,
    })

    return (
        <Fragment>
            <div className={`p-6 flex flex-wrap gap-6 ${gowun.className}`}>

                {/* 메인 사진 */}
                {/* <div className="border border-slate-200 bg-white p-4 rounded-md shadow-sm flex flex-col">
                    <p className="text-sm font-bold text-slate-600">메인 사진</p>
                    {
                        fetch1.isLoading || action1.isPending ?
                        // true ? 
                        <div className="mt-4 flex items-center justify-center">
                            <LoadingOutlined style={{fontSize: 44, color: '#ccc' }} />
                        </div>
                        :
                        mainImage ? 
                        <div className="mt-4">
                            <Image className="rounded-md" src={mainImage.url} width={100} height={100} />
                        </div>
                        :
                        <div className="mt-4">
                            <input id={`main-image-${count}`} type="file" className="hidden" accept='image/*' onChange={(e) => onSelectFiles("01", 0, e.target.files)} multiple={false} />
                            <label htmlFor={`main-image-${count}`} className="cursor-pointer">
                                <div className="px-4 py-2 border border-slate-200 rounded-md shadow-sm flex items-center justify-center">
                                    <p className="text-sm font-bold text-slate-600">사진 선택</p>
                                </div>
                            </label>
                        </div>
                    }
                </div> */}

                {/* 캘린더 좌/우 사진 */}
                {/* <div className="border border-slate-200 bg-white p-4 rounded-md shadow-sm flex flex-col">
                    <p className="text-sm font-bold text-slate-600">캘린더 좌/우 사진</p>
                    <div className="flex gap-4">
                        {
                            fetch1.isLoading || action1.isPending ?
                            // true ? 
                            <div className="mt-4 flex items-center justify-center">
                                <LoadingOutlined style={{fontSize: 44, color: '#ccc' }} />
                            </div>
                            :
                            calendarImage1 ? 
                            <div className="mt-4">
                                <Image className="rounded-md" src={calendarImage1.url} width={100} height={100} />
                            </div>
                            :
                            <div className="mt-4">
                                <input id={`calendar-image-1-${count}`} type="file" className="hidden" accept='image/*' onChange={(e) => onSelectFiles("02", 0, e.target.files)} multiple={false} />
                                <label htmlFor={`calendar-image-1-${count}`} className="cursor-pointer">
                                    <div className="px-4 py-2 border border-slate-200 rounded-md shadow-sm flex items-center justify-center">
                                        <p className="text-sm font-bold text-slate-600">사진 선택</p>
                                    </div>
                                </label>
                            </div>
                        }
                        {
                            fetch1.isLoading || action1.isPending ?
                            // true ? 
                            <div className="mt-4 flex items-center justify-center">
                                <LoadingOutlined style={{fontSize: 44, color: '#ccc' }} />
                            </div>
                            :
                            calendarImage2 ? 
                            <div className="mt-4">
                                <Image className="rounded-md" src={calendarImage2.url} width={100} height={100} />
                            </div>
                            :
                            <div className="mt-4">
                                <input id={`calendar-image-2-${count}`} type="file" className="hidden" accept='image/*' onChange={(e) => onSelectFiles("02", 1, e.target.files)} multiple={false} />
                                <label htmlFor={`calendar-image-2-${count}`} className="cursor-pointer">
                                    <div className="px-4 py-2 border border-slate-200 rounded-md shadow-sm flex items-center justify-center">
                                        <p className="text-sm font-bold text-slate-600">사진 선택</p>
                                    </div>
                                </label>
                            </div>
                        }
                    </div>
                </div> */}
            </div>

            <div className={``}>
                {
                    fetch1.isLoading || action1.isPending ?
                    <div className="px-6">
                        <div className="px-3 pt-1.5 pb-2 w-40 bg-white border border-slate-200 rounded-md shadow-sm flex gap-4">
                            <LoadingOutlined style={{fontSize: 20, color: '#ccc' }} />
                            <p className="text-sm text-slate-600">사진 업로드</p>
                        </div>
                    </div>
                    :
                    <div className="px-6">
                        <input id={`gallery-upload-${count}`} type="file" className="hidden" accept='image/*' onChange={(e) => onSelectFiles("03", 0, e.target.files)} multiple={false} />
                        <label htmlFor={`gallery-upload-${count}`} className="cursor-pointer">
                            <div className="px-3 pt-1.5 pb-2 w-40 bg-white border border-slate-200 rounded-md shadow-sm flex items-center justify-center">
                                <p className="text-sm text-slate-600">사진 업로드</p>
                            </div>
                        </label>
                    </div>
                }
                {gallery.length > 0 && 
                    <DragAndDrop 
                        gallery={gallery} 
                        onChangeSort={(data) => {
                            const updates = [];
                            for (let i=0; i<gallery.length; i++) {
                                if (data[i].sort !== i) {
                                    updates.push({ imageKey: data[i].imageKey, next: i });
                                }
                            }
                            action2.mutate({updates});
                        }}
                    />
                }
            </div>

        </Fragment>
    )
}

export default React.memo(Components);