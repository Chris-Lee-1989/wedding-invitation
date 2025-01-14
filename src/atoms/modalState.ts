import { ReactNode } from "react";
import { atom } from "recoil";
import { v1 } from "uuid";

interface ErrorModalStateType {
    status: 'error',
    open: boolean;
    error?: any;
}

interface SuccessModalStateType {
    status: 'success',
    open: boolean;
    message: string;
}

interface WarningModalStateType {
    status: 'warning',
    open: boolean;
    message: string;
}

interface InfoModalStateType {
    status: 'info',
    open: boolean;
    message: string;
}

interface ConfirmModalStateType {
    status: 'confirm',
    open: boolean;
    message: ReactNode;
    onOk: () => void;
}

type ModalStateType = ErrorModalStateType | SuccessModalStateType | WarningModalStateType | InfoModalStateType | ConfirmModalStateType;

const modalState = atom({
    key: `modalState/${v1()}`, 
    default: <ModalStateType>{
        status: 'error',
        open: false,
        error: undefined,
    }, 
});

export default modalState