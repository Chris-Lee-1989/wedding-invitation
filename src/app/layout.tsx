import React from "react";

// 글로벌 CSS
import "./globals.css";

// Ant Design
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from "antd";

// 폰트 설정
import { Metadata, Viewport } from "next";
import { Noto_Sans_KR, Noto_Serif_KR, Great_Vibes } from 'next/font/google'
const notoSans = Noto_Sans_KR({ subsets: ['latin'] });
const notoSerif = Noto_Serif_KR({ subsets: ['latin'], weight: ['200','300','400','500','600','700','900'] });
const greatVibes = Great_Vibes({ subsets: ['latin'], weight: '400'});

// 오류 페이지 설정
import { ErrorBoundary } from "react-error-boundary";
import ErrorHandler from "@/components/layout/ErrorHandler";
import ReactQueryRegistry from "@/components/layout/ReactQueryRegistry";

// 리코일 Recoil
import RecoilRegistry from "@/components/layout/RecoilRegistry";

//네이버 지도
import NaverScriptInit from '@/components/layout/NaverScriptInit'
declare global {
    interface Window {
        naver: any;
    }
}

// 메타데이터
export const metadata: Metadata = {
    title: "이윤민❤️김준형 결혼합니다.",
    applicationName: "이윤민❤️김준형 결혼합니다.",
    description: "이윤민❤️김준형 결혼합니다.",
    appleWebApp: {
        title: '이윤민❤️김준형 결혼합니다.',
        capable: true,
        startupImage: [
            {
                url: 'string',
                media: 'string',
            },
        ],
        statusBarStyle: 'default',
    },
    icons: [
        { rel: 'icon', url: '/icons/16.png', sizes: '16x16' },
        { rel: 'icon', url: '/icons/32.png', sizes: '32x32' },
        { rel: 'icon', url: '/icons/92.png', sizes: '92x92' },
        { rel: 'icon', url: '/icons/128.png', sizes: '128x128' },
        { rel: 'icon', url: '/icons/144.png', sizes: '144x144' },
        { rel: 'icon', url: '/icons/196.png', sizes: '196x196' },
        { rel: 'icon', url: '/icons/256.png', sizes: '256x256' },
        { rel: 'icon', url: '/icons/512.png', sizes: '512x512' },
    ],
    openGraph: {
        url: 'https://wedding.yoonmin.kr',
        title: '윤민 ♡ 준형 결혼식에 초대합니다',
        type: 'website',
        images: [
            {
                url: "https://kkotfarm-dev-ops.s3.ap-northeast-2.amazonaws.com/wedding/link_image2.jpeg",
                alt: "image",
                width: "1468",
                height: "1632",
            }
        ],
        description: "2025.03.29 SAT PM 14:00 엘리에나호텔 컨벤션홀 2층",
    },
    facebook: {
        appId: '',
    }
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    minimumScale: 1,
    userScalable: false,
    viewportFit: 'cover',
    themeColor: "#fff"
};

// 날짜
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/ko';
dayjs.locale('ko');
import ko_KR from 'antd/locale/ko_KR';
import Layout from "@/components/layout/Layout";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {

    return (
        <html lang="ko">
            <head>
                <meta charSet="utf-8" />
                <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="mobile-web-app-capable" content="yes" />

                <link rel="apple-touch-startup-image" media="screen and (device-width: 440px) and (device-height: 956px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" href="icons/iPhone_16_Pro_Max_landscape.png" />
                <link rel="apple-touch-startup-image" media="screen and (device-width: 402px) and (device-height: 874px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" href="icons/iPhone_16_Pro_landscape.png" />
                <link rel="apple-touch-startup-image" media="screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" href="icons/iPhone_16_Plus__iPhone_15_Pro_Max__iPhone_15_Plus__iPhone_14_Pro_Max_landscape.png" />
                <link rel="apple-touch-startup-image" media="screen and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" href="icons/iPhone_16__iPhone_15_Pro__iPhone_15__iPhone_14_Pro_landscape.png" />
                <link rel="apple-touch-startup-image" media="screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" href="icons/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_landscape.png" />
                <link rel="apple-touch-startup-image" media="screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" href="icons/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_landscape.png" />
                <link rel="apple-touch-startup-image" media="screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" href="icons/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_landscape.png" />
                <link rel="apple-touch-startup-image" media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" href="icons/iPhone_11_Pro_Max__iPhone_XS_Max_landscape.png" />
                <link rel="apple-touch-startup-image" media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" href="icons/iPhone_11__iPhone_XR_landscape.png" />
                <link rel="apple-touch-startup-image" media="screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" href="icons/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_landscape.png" />
                <link rel="apple-touch-startup-image" media="screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" href="icons/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_landscape.png" />
                <link rel="apple-touch-startup-image" media="screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" href="icons/4__iPhone_SE__iPod_touch_5th_generation_and_later_landscape.png" />
                <link rel="apple-touch-startup-image" media="screen and (device-width: 1032px) and (device-height: 1376px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" href="icons/13__iPad_Pro_M4_landscape.png" />
                <link rel="apple-touch-startup-image" media="screen and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" href="icons/12.9__iPad_Pro_landscape.png" />
                <link rel="apple-touch-startup-image" media="screen and (device-width: 834px) and (device-height: 1210px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" href="icons/11__iPad_Pro_M4_landscape.png" />
                <link rel="apple-touch-startup-image" media="screen and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" href="icons/11__iPad_Pro__10.5__iPad_Pro_landscape.png" />
                <link rel="apple-touch-startup-image" media="screen and (device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" href="icons/10.9__iPad_Air_landscape.png" />
                <link rel="apple-touch-startup-image" media="screen and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" href="icons/10.5__iPad_Air_landscape.png" />
                <link rel="apple-touch-startup-image" media="screen and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" href="icons/10.2__iPad_landscape.png" />
                <link rel="apple-touch-startup-image" media="screen and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" href="icons/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_landscape.png" />
                <link rel="apple-touch-startup-image" media="screen and (device-width: 744px) and (device-height: 1133px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" href="icons/8.3__iPad_Mini_landscape.png" />
                <link rel="apple-touch-startup-image" media="screen and (device-width: 440px) and (device-height: 956px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" href="icons/iPhone_16_Pro_Max_portrait.png" />
                <link rel="apple-touch-startup-image" media="screen and (device-width: 402px) and (device-height: 874px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" href="icons/iPhone_16_Pro_portrait.png" />
                <link rel="apple-touch-startup-image" media="screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" href="icons/iPhone_16_Plus__iPhone_15_Pro_Max__iPhone_15_Plus__iPhone_14_Pro_Max_portrait.png" />
                <link rel="apple-touch-startup-image" media="screen and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" href="icons/iPhone_16__iPhone_15_Pro__iPhone_15__iPhone_14_Pro_portrait.png" />
                <link rel="apple-touch-startup-image" media="screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" href="icons/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_portrait.png" />
                <link rel="apple-touch-startup-image" media="screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" href="icons/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.png" />
                <link rel="apple-touch-startup-image" media="screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" href="icons/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_portrait.png" />
                <link rel="apple-touch-startup-image" media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" href="icons/iPhone_11_Pro_Max__iPhone_XS_Max_portrait.png" />
                <link rel="apple-touch-startup-image" media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" href="icons/iPhone_11__iPhone_XR_portrait.png" />
                <link rel="apple-touch-startup-image" media="screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" href="icons/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_portrait.png" />
                <link rel="apple-touch-startup-image" media="screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" href="icons/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_portrait.png" />
                <link rel="apple-touch-startup-image" media="screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" href="icons/4__iPhone_SE__iPod_touch_5th_generation_and_later_portrait.png" />
                <link rel="apple-touch-startup-image" media="screen and (device-width: 1032px) and (device-height: 1376px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" href="icons/13__iPad_Pro_M4_portrait.png" />
                <link rel="apple-touch-startup-image" media="screen and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" href="icons/12.9__iPad_Pro_portrait.png" />
                <link rel="apple-touch-startup-image" media="screen and (device-width: 834px) and (device-height: 1210px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" href="icons/11__iPad_Pro_M4_portrait.png" />
                <link rel="apple-touch-startup-image" media="screen and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" href="icons/11__iPad_Pro__10.5__iPad_Pro_portrait.png" />
                <link rel="apple-touch-startup-image" media="screen and (device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" href="icons/10.9__iPad_Air_portrait.png" />
                <link rel="apple-touch-startup-image" media="screen and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" href="icons/10.5__iPad_Air_portrait.png" />
                <link rel="apple-touch-startup-image" media="screen and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" href="icons/10.2__iPad_portrait.png" />
                <link rel="apple-touch-startup-image" media="screen and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" href="icons/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_portrait.png" />
                <link rel="apple-touch-startup-image" media="screen and (device-width: 744px) and (device-height: 1133px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" href="icons/8.3__iPad_Mini_portrait.png" />
            </head>
            <body
                className={`antialiased ${notoSans.className} `}
            >
                <RecoilRegistry>
                    <ReactQueryRegistry>
                        <AntdRegistry>
                            <ConfigProvider 
                                locale={ko_KR as any}
                                componentSize="large"
                                theme={{ 
                                    token: { 
                                        colorPrimary: '#999',
                                    },
                                    components: {
                                        Input: {
                                            controlOutlineWidth: 0,
                                            fontFamily: `'__Gowun_Dodum_41ed10', '__Gowun_Dodum_Fallback_41ed10'`
                                        }
                                    }
                                }}
                            >
                                <ErrorBoundary FallbackComponent={ErrorHandler}>
                                    <NaverScriptInit>
                                        <Layout>
                                        {children}
                                        </Layout>
                                    </NaverScriptInit>
                                </ErrorBoundary>
                            </ConfigProvider>
                        </AntdRegistry>
                    </ReactQueryRegistry>
                </RecoilRegistry>
            </body>
        </html>
    );
}
