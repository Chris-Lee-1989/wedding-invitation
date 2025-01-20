"use client"
import Connection from '@/components/layout/Connection';
import React, { Fragment } from 'react';

// 폰트
import { Parisienne, Gowun_Dodum } from 'next/font/google'
import { Button, Modal } from 'antd';
const parisienne = Parisienne({ subsets: ['latin'], weight: ['400']});  
const gowun = Gowun_Dodum({ subsets: ['latin'], weight: ['400']});

const Components = () => {

    // 탭 인덱스
    const [tabIndex, setTabIndex] = React.useState(0);

    const [modal1, setModal1] = React.useState(false);
    const [modal2, setModal2] = React.useState(false);
    const [modal3, setModal3] = React.useState(false);

    return (
        <Fragment>
            <div className="w-full flex flex-col items-center justify-center py-40" style={{background: '#f9f9f9'}}>

                {/* 타이틀 */}
                <div className={`flex justify-center w-full mb-12`}>
                    <p data-aos="fade-up" data-aos-duration="800" className={`${parisienne.className} w-full text-center text-2xl text-rose-300`}>Infomation</p>
                </div>

                <div className="w-full px-8 flex flex-col gap-6">
                    {/* 탭 */}
                    <div data-aos="fade-up" data-aos-duration="800" className={`w-full flex items-center ${gowun.className}`}>
                        <div 
                            style={{borderRadius: '4px 4px 0 0'}} 
                            className={`flex-1 h-12 flex items-center justify-center ${tabIndex === 0 ? 'border border-slate-200 border-b-0' : 'border-b border-b-slate-200'}`}
                            onClick={() => setTabIndex(0)}
                        >
                            <p className={`transition-all duration-100 text-sm ${tabIndex === 0 ? 'text-slate-800 font-bold' : 'text-slate-400'}`}>장소</p>
                        </div>
                        <div 
                            style={{borderRadius: '4px 4px 0 0'}} 
                            className={`flex-1 h-12 flex items-center justify-center ${tabIndex === 1 ? 'border border-slate-200 border-b-0' : 'border-b border-b-slate-200'}`}
                            onClick={() => setTabIndex(1)}
                        >
                            <p className={`transition-all duration-100 text-sm ${tabIndex === 1 ? 'text-slate-800 font-bold' : 'text-slate-400'}`}>예식</p>
                        </div>
                        <div 
                            style={{borderRadius: '4px 4px 0 0'}} 
                            className={`flex-1 h-12 flex items-center justify-center ${tabIndex === 2 ? 'border border-slate-200 border-b-0' : 'border-b border-b-slate-200'}`}
                            onClick={() => setTabIndex(2)}
                        >
                            <p className={`transition-all duration-100 text-sm ${tabIndex === 2 ? 'text-slate-800 font-bold' : 'text-slate-400'}`}>식사</p>
                        </div>
                    </div>
                    {/* 컨텐츠 */}
                    {tabIndex === 0 ?
                    <div data-aos="fade-up" data-aos-duration="800" className="flex flex-col gap-6">
                        <div 
                            className="w-full h-48 rounded-md"
                            style={{
                                backgroundImage: 'url("https://lh4.googleusercontent.com/proxy/zfThcNmOcS3qCgYoSKWe2sS0nD5AoZqhZ9GacdB_HvGejidgBAq-USDx3Ualho9YNG3hqPPc1U6844jNGPyI0WA5u6xKUAmThfjjb8o")',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }} 
                        />
                        <div className={`${gowun.className}`}>
                            <p className="text-center mt-2">서울 엘리에나 호텔 컨벤션 홀에서 </p>
                            <p className="text-center mt-2">저희 두 사람의 웨딩이 진행됩니다.</p>
                            <p className="text-center mt-2">들어오는 방향으로 <strong>좌측</strong>이 <strong>신랑 측</strong></p>
                            <p className="text-center mt-2"><strong>우측</strong>이 <strong>신부 측</strong> 좌석입니다.</p>
                        </div>
                        <div className="w-full flex justify-center">
                            <Button style={{width: '40%', borderColor: '#EEE', borderRadius: 4}} onClick={() => {setModal1(true)}}>
                                <p className={`${gowun.className} text-sm`}>배치도 보기</p>
                            </Button>
                        </div>
                    </div>
                    : tabIndex === 1 ?
                    <div data-aos="fade-up" data-aos-duration="800" className="flex flex-col gap-6">
                        <div 
                            className="w-full h-48 rounded-md"
                            style={{
                                backgroundImage: 'url("https://mblogthumb-phinf.pstatic.net/MjAyNDAxMjJfMjMx/MDAxNzA1ODUwNTkyMDg2.cJaqFJA6p0c6KKQF3Xb1zmIz9C6nVTOwFs_w9h_t00gg.2k5RFE_dkE4Lo9vKXzSf39A_Z2B-nRkzM3qotejfYaYg.JPEG.minmin0319/1705850346544.jpg?type=w800")',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }} 
                        />
                        <div className={`${gowun.className}`}>
                            <p className="text-center mt-2">1부 예식이 종료된 후</p>
                            <p className="text-center mt-2">코스 요리가 좌석에 개별 제공되는</p>
                            <p className="text-center mt-2"><strong>동시 예식</strong>으로 진행됩니다.</p>
                            <p className="text-center mt-2">자리에 계시면 요리가 서빙됩니다.</p>
                        </div>
                        <div className="w-full flex justify-center">
                            <Button style={{width: '40%', borderColor: '#EEE', borderRadius: 4}} onClick={() => {setModal2(true)}}>
                                <p className={`${gowun.className} text-sm`}>식순 보기</p>
                            </Button>
                        </div>
                    </div>
                    : 
                    <div data-aos="fade-up" data-aos-duration="800" className="flex flex-col gap-6">
                        <div 
                            className="w-full h-48 rounded-md"
                            style={{
                                backgroundImage: 'url("https://i1.korea-iphone.com/files/cdd06c889308a5b5bc74848da247598e.jpg")',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }} 
                        />
                        <div className={`${gowun.className}`}>
                            <p className="text-center mt-2">축하해주시는 분들을 위해</p>
                            <p className="text-center mt-2">코스요리를 준비하였습니다.</p>
                            <p className="text-center mt-2">그릴에 구운 안심 스테이크와</p>
                            <p className="text-center mt-2">담백함을 느낄 수 있는 잔치국수까지</p>
                            <p className="text-center mt-2">차례로 식사를 즐겨주시기 바랍니다.</p>
                        </div>
                        <div className="w-full flex justify-center">
                            <Button style={{width: '40%', borderColor: '#EEE', borderRadius: 4}} onClick={() => {setModal3(true)}}>
                                <p className={`${gowun.className} text-sm`}>메뉴 보기</p>
                            </Button>
                        </div>
                    </div>
                    }
                </div>
                
            </div>
            <div className="w-full h-4 absolute z-10 -translate-y-4" style={{maxWidth: 400}} >
                <Connection color="#FFFFFF" />
            </div>

            <Modal1 open={modal1} close={() => setModal1(false)} />
            <Modal2 open={modal2} close={() => setModal2(false)} />
            <Modal3 open={modal3} close={() => setModal3(false)} />
            
        </Fragment>
    )
}

interface ModalProps1 {
    open: boolean;
    close: () => void;
}
const Modal1 = ({ open, close }: ModalProps1) => {
    return (
        <Modal
            title={<p className={`${gowun.className}`} >배치도</p>}
            open={open}
            centered
            footer={null}
            onCancel={close}
        >

        </Modal>
    )
}

interface ModalProps1 {
    open: boolean;
    close: () => void;
}
const Modal2 = ({ open, close }: ModalProps1) => {
    return (
        <Modal
            title={<p className={`${gowun.className}`} >식순</p>}
            open={open}
            centered
            footer={null}
            onCancel={close}
        >
            <div className="flex">
                <div className={`${gowun.className} flex flex-col gap-2 flex-1`}>
                    <p className="text-md">1부</p>
                    <p className="ml-4">1. 개회사</p>
                    <p className="ml-4">2. 화촉점화</p>
                    <p className="ml-4">3. 신랑 입장</p>
                    <p className="ml-4">4. 신부 입장</p>
                    <p className="ml-4">5. 신부 신부 맞절</p>
                    <p className="ml-4">6. 혼인서약</p>
                    <p className="ml-4">7. 성혼선언</p>
                    <p className="ml-4">8. 축가</p>
                    <p className="ml-4">9. 신랑 신부 행진</p>
                    <p className="ml-4">10. 폐회식</p>
                    <p className="ml-4">11. 사진 촬영</p>
                </div>
                <div className={`${gowun.className} flex flex-col gap-2 flex-1`}>
                    <p className="text-md">2부</p>
                    <p className="ml-4">1. 신랑 신부 입장</p>
                    <p className="ml-4">2. 케익 커팅식</p>
                </div>
            </div>
            
        </Modal>
    )
}

interface ModalProps1 {
    open: boolean;
    close: () => void;
}
const Modal3 = ({ open, close }: ModalProps1) => {
    return (
        <Modal
            title={<p className={`${gowun.className}`} >메뉴</p>}
            open={open}
            centered
            footer={null}
            onCancel={close}
        >
            <div className={`${gowun.className} flex flex-col gap-3`}>
                <div>
                    <p className="text-slate-900 font-bold">전통 모듬 떡</p>
                    <p className="text-sm text-slate-500">Korean Traditional Rice Cakes</p>
                </div>
                <div>
                    <p className="text-slate-900 font-bold">특제소스로 맛을 낸 에피타이저 & 훈제연어 샐러드</p>
                    <p className="text-sm text-slate-500">Smoked Salmon Salad with Special Sauce</p>
                </div>
                <div>
                    <p className="text-slate-900 font-bold">주방장이 추천하는 송로버섯 크림스프</p>
                    <p className="text-sm text-slate-500">{`Chef's Choice Truffle Soup`}</p>
                </div>
                <div>
                    <p className="text-slate-900 font-bold">그릴에 익힌 최상의 안심스테이크와 프랑스식 소스</p>
                    <p className="text-sm text-slate-500">The best Grilled Tenderloin Steak with French Style Sauce</p>
                </div>
                <div>
                    <p className="text-slate-900 font-bold">정통 일식 핸드메이드 초밥</p>
                    <p className="text-sm text-slate-500">{`Japanese Food Chef's Hand made Sushi`}</p>
                </div>
                <div>
                    <p className="text-slate-900 font-bold">잔치국수</p>
                    <p className="text-sm text-slate-500">Korean Banquet Noodles</p>
                </div>
                <div>
                    <p className="text-slate-900 font-bold">오늘의 특선 디저트</p>
                    <p className="text-sm text-slate-500">Dessert of the day</p>
                </div>
                <div>
                    <p className="text-slate-900 font-bold">커피</p>
                    <p className="text-sm text-slate-500">Coffee</p>
                </div>
            </div>
        </Modal>
    )
}

export default React.memo(Components);