import App from 'next/app';
import '../style/style.css';
import Head from 'next/head';
import Header from '../partials/Header';
import { appWithTranslation } from '../services/i18n';

function FuvarApp ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My first Next</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className='headerBar u-clearfix js-headerBar'>
        <Header {...pageProps} />
      </header>
      <Component {...pageProps} />
    </>
  );
}

export async function getServerSideProps (appContext) {
  const appProps = await App.getServerSideProps(appContext);
  return { ...appProps };
}
export default appWithTranslation(FuvarApp);
