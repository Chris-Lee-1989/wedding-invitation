"use client"
import Connection from '@/components/layout/Connection';
import React, { Fragment } from 'react';
import { Button, message, Tooltip } from 'antd';
import { GoCopy } from "react-icons/go";

// 폰트
import { Parisienne, Gowun_Dodum } from 'next/font/google'
const parisienne = Parisienne({ subsets: ['latin'], weight: ['400']});  
const gowun = Gowun_Dodum({ subsets: ['latin'], weight: ['400']});
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Components = () => {

    const [isShow, setIsShow] = React.useState(false);

    const onClickCopyButton = (accountsNum: string) => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(accountsNum).catch(err => {
                console.error('Failed to copy: ', err);
            });
        } else {
            const textArea = document.createElement("textarea");
            textArea.value = accountsNum;
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            try {
                document.execCommand('copy');
            } catch (err) {
                console.error('Failed to copy: ', err);
            }
            document.body.removeChild(textArea);
        }
    }

    return (
        <Fragment>
            <div className="w-full flex flex-col items-center justify-center py-40" style={{background: '#ffffff'}}>

                {/* 타이틀 */}
                <div className={`flex justify-center w-full mb-8`}>
                    <p data-aos="fade-up" data-aos-duration="800" className={`${parisienne.className} w-full text-center text-2xl text-rose-300`}>Account</p>
                </div>

                {/* 마음 전하실 곳 */}
                <div className={`flex flex-col items-center ${gowun.className}`}>
                    <p data-aos="fade-up" data-aos-duration="800" className={`w-full text-center text-slate-800 font-bold`}>마음 전하실 곳</p>
                    <div className="mt-9 flex flex-col gap-2 items-center">
                        <p data-aos="fade-up" data-aos-duration="800" className="text-sm">참석이 어려워 직접 축하를 전하지는 못하는</p>
                        <p data-aos="fade-up" data-aos-duration="800" className="text-sm">분들을 위해 계좌번호를 기재하였습니다.</p>
                        <p data-aos="fade-up" data-aos-duration="800" className="text-sm">넓은 마음으로 양해 부탁드립니다.</p>
                        <p data-aos="fade-up" data-aos-duration="800" className="text-sm">전해주시는 진심은 소중하게 간직하여</p>
                        <p data-aos="fade-up" data-aos-duration="800" className="text-sm">좋은 부부의 모습으로 보답하겠습니다.</p>
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-duration="800" className="flex justify-center w-full flex-col items-center">
                    <div 
                        className={`
                            ${gowun.className} transition-all duration-300 border border-slate-200 mt-10 w-72 h-12 flex items-center justify-center 
                            active:border-slate-300 shadow-sm cursor-pointer ${isShow ? 'bg-slate-50': 'bg-white'}
                        `} 
                        style={{
                            borderRadius: isShow ? '6px 6px 0 0' : '6px'
                        }}
                        onClick={() => setIsShow(!isShow)}
                    >
                        <div className="w-12" />
                        <p className="flex-1 text-center text-slate-800 text-sm">확인하기</p>
                        <div className="w-12 h-12 flex items-center justify-center">
                            <MdOutlineKeyboardArrowDown className={`text-slate-300 text-lg transition-all duration-200 ${isShow ? 'rotate-180' : ''}`} />
                        </div>
                    </div>
                    <div 
                        className={`${gowun.className} transition-all flex flex-col duration-300 border border-t-0 border-slate-200 w-72 overflow-hidden ${isShow ? 'opacity-1' : 'opacity-0'}`}
                        style={{
                            height: isShow ? '158px' : '0',
                        }}
                    >
                        <div className="flex items-center p-4">
                            <div className="flex flex-col gap-1.5 flex-1">
                                <p className="text-sm">신랑 <strong>이윤민</strong></p>
                                <p className="text-sm">부산은행 112-2185-5008-07</p>
                            </div>
                            <div>
                                <Tooltip title="계좌번호가 복사되었습니다." trigger={'click'}>
                                    <div className="flex border border-slate-200 gap-1 rounded-md items-center justify-center px-2 py-1.5 transition-all duration-200 hover:border-slate-400" onClick={() => onClickCopyButton('1122185500807')}>
                                        <GoCopy className="text-slate-700 text-xs" />
                                        <p className="text-xs text-slate-700">복사</p>
                                    </div>
                                </Tooltip>
                            </div>
                        </div>
                        <div className="flex items-center p-4 border-t border-slate-200">
                            <div className="flex flex-col gap-1.5 flex-1">
                                <p className="text-sm">신부 <strong>김준형</strong></p>
                                <p className="text-sm">국민은행 722702-00-068946</p>
                            </div>
                            <div>
                                <Tooltip title="계좌번호가 복사되었습니다." trigger={'click'}>
                                    <div className="flex border border-slate-200 gap-1 rounded-md items-center justify-center px-2 py-1.5 transition-all duration-200 hover:border-slate-400" onClick={() => onClickCopyButton('72270200068946')}>
                                        <GoCopy className="text-slate-700 text-xs" />
                                        <p className="text-xs text-slate-700">복사</p>
                                    </div>
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="w-full h-4 absolute z-10 -translate-y-4" style={{maxWidth: 400}} >
                <Connection color="#F4EDDB" />
            </div>
        </Fragment>
    )
}

export default React.memo(Components);