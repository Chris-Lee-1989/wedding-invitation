import dynamic from 'next/dynamic';
// import Page from '@/components/path/new/Page';
const Page = dynamic(() => import('@/components/path/new/Page'), { ssr: false });
export default function Home() {
    return (
        <>
            <Page />
        </>
    );
}