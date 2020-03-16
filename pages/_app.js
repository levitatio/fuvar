import App from 'next/app';
import Head from 'next/head';
import Header from '../partials/Header';

function FuvarApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>My first Next</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header {...pageProps} />
            <Component {...pageProps} />
        </>
    );

}

export async function getServerSideProps(appContext) {
    const appProps = await App.getServerSideProps(appContext); 
    return { ...appProps };
}
export default FuvarApp;