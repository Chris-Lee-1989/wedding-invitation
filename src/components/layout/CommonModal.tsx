"use client"

import modalState from '@/atoms/modalState';
import { useUpdateEffect } from 'ahooks';
import { Modal } from 'antd'
import React from 'react'
import { useRecoilState } from 'recoil'

export default function CommonModal() {

    const [modalData, setModalData] = useRecoilState(modalState);
    const [modal, contextHolder] = Modal.useModal();

    const onClickOkButton = () => {
        if (modalData.status === "confirm") modalData.onOk();
        setModalData({...modalData, open: false});
    }

    useUpdateEffect(() => {
        if (modalData.open) {
            if (modalData.status === "info") {
                modal.info({
                    title: '알림',
                    content: modalData.message,
                    onOk: onClickOkButton
                });
            }
            else if (modalData.status === "success") {
                modal.success({
                    title: '성공',
                    content: modalData.message,
                    onOk: onClickOkButton,
                });
            }
            else if (modalData.status === "warning") {
                modal.warning({
                    title: '경고',
                    content: modalData.message,
                    onOk: onClickOkButton
                });
            }
            else if (modalData.status === "error") {
                let errorMessage: any = `알 수 없는 오류가 발생했습니다\n문제가 계속되면 관리자에게 문의주세요.`;
                if (modalData?.error?.response?.data) errorMessage = modalData.error.response.data;
                modal.error({
                    title: '오류',
                    content: typeof errorMessage === "string" ? errorMessage : errorMessage.message,
                    onOk: onClickOkButton,
                    okButtonProps: {
                        danger: true,  
                    },
                });
            }
            else if (modalData.status === "confirm") {
                modal.confirm({
                    title: '알림',
                    content: modalData.message,
                    onOk: onClickOkButton
                });
            }
        }
    }, [modalData]);

    return (
        <>
            {contextHolder}
        </>
    )
}

export const onApiErrorModal = (error: any) => {
    if (error.response) {
        if (error.response.status === 400 || error.response.status === 401 || error.response.status === 419) {
            Modal.error({content: error.response.data.message, title: "오류"})
        } 
        else if (error.response.status === 404) {
            window.location.href = "/404";
        }
        else if (error.response.status === 401) {
            window.location.href = "/";
        }
        else {
            Modal.error({content: "알 수 없는 오류가 발생했어요.", title: "오류"});
        }
    }
    else Modal.error({content: error.message, title: "오류"})
}