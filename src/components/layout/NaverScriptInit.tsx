'use client';
import { useMount, useUpdateEffect } from "ahooks";
import Script from "next/script";
import { Fragment, useEffect, useState } from "react";

interface Props {
	children: React.ReactNode;
}
export default function KakaoScript({children}: Props) {

	const [naverLoaded, setNaverLoaded] = useState(false);

	useMount(() => {
		if (typeof window !== 'undefined') {
			if (window.naver !== undefined) {
				setNaverLoaded(true);
			}
		}
	})

	useUpdateEffect(() => {
		if (window.naver) {
			console.info('Naver Map Loaded.');
		}
	}, [naverLoaded]);

	return (
		<Fragment>
			<Script
				src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${`9wnheh8zpt`}`}
				onLoad={() => setNaverLoaded(true)}
			/>
			{ naverLoaded ? children : <></>}
		</Fragment>
	);
}