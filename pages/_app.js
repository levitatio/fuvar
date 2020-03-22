import App from 'next/app';
import '../style/style.css';
import '../style/suppliment.css';
import Head from 'next/head';
import { appWithTranslation } from '../services/i18n';
import { useRouter } from 'next/router';
import Header from '../partials/Header';
import Footer from '../partials/Footer';

function FuvarApp ({ Component, pageProps }) {
  const router = useRouter();
  if (router.pathname !== '/' && (typeof window !== 'undefined')) {
    router.push('/');
  }

  return (
    <>
      <Head>
        <title>Fuvar.hu</title>
        <link rel='icon' href='/favicon.ico' />
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
