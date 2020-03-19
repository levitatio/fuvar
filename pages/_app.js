import App from 'next/app';
import '../style/style.css';
import Head from 'next/head';
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import { appWithTranslation } from '../services/i18n';

function FuvarApp ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Fuvar.hu</title>
        {/* <link rel='icon' href='/favicon.ico' /> */}
      </Head>
      <Header {...pageProps} />
      <Component {...pageProps} />
      <Footer {...pageProps} />
    </>
  );
}

export async function getServerSideProps (appContext) {
  const appProps = await App.getServerSideProps(appContext);
  return { ...appProps };
}
export default appWithTranslation(FuvarApp);
