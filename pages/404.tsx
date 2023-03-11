import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import Head from "next/head";
import { ColCentered } from "../components/base";
import 'twin.macro';

const NotFound: React.FC = () => {
    const router = useRouter();
    const [secondsOnPage, setSecondsOnPage] = useState(0);
    const secondsToWaitBeforeRerouting = 5;

    useEffect(() => {
        setTimeout(() => {
            setSecondsOnPage(secondsOnPage + 1)
        }, 1000)
        
        if (secondsOnPage >= secondsToWaitBeforeRerouting) {
            router.push('/')
        }
    }, [secondsOnPage])
    
    return (
        <>
            <Head>
                <title>Ryan Barrs / 404</title>
                <meta charSet="utf-8"/>
                <meta name="theme-color" content="#212121"/>
                <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
                <link href="https://fonts.googleapis.com/css2?family=Vollkorn:wght@400;500;600;700&display=swap" rel="stylesheet"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=yes, viewport-fit=cover"/>
            </Head>
            <ColCentered tw="h-full text-white font-serif">
                <p>Oops! There's nothing here!</p>
                <p>In {secondsToWaitBeforeRerouting - secondsOnPage} seconds, you will be navigated to the <Link href="/">home page.</Link></p>
            </ColCentered>
        </>
    )
}

export default NotFound;