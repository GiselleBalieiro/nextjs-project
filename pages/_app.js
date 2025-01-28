import { useEffect } from 'react';
import GlobalStyle from '../src/theme/GlobalStyle';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://www.googletagmanager.com/gtag/js?id=G-VP129V7Q2E";
        script.async = true;
        document.head.appendChild(script);

        const script2 = document.createElement('script');
        script2.innerHTML = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VP129V7Q2E');
        `;
        document.head.appendChild(script2);
    }, []);

    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />
            </Head>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;