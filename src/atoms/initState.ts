import { atom } from "recoil";
import { v1 } from "uuid";

interface InitStateType {
    init: boolean;
    isMobile: boolean;
    isServiceWorker: boolean;
    isNavigator: boolean;
    isPushManager: boolean;
    isStandalone: boolean;
    permission: 'default'|'denied'|'granted';
    isFirebase: boolean;
    pushToken: string;
}

const initState = atom({
    key: `initState/${v1()}`, 
    default: <InitStateType>{
        init: false,
        isMobile: false,
        isServiceWorker: false,
        isNavigator: false,
        isPushManager: false,
        isStandalone: false,
        permission: 'default',
        isFirebase: false,
        pushToken: '',
    }, 
});
export default initState
