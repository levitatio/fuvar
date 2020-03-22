import PropTypes from 'prop-types';
import { withTranslation } from '../services/i18n';
import { apiRequest } from '../services/apiRequest';
import CardList from '../components/list/CardList';
import InputList from '../components/list/InputList';

function Home ({ t }, user) {
  async function handleSubmit (event) {
    event.preventDefault();
    try {
      const data = new FormData(event.target);
      const reqBody = {};
      data.forEach((value, key) => { reqBody[key] = value; });
      await apiRequest('backend-url/api', 'POST', reqBody);
    } catch (err) {
      console.error(err);
    }
  }

  const howItWorksData = [{ iconHref: 'assets/cheap.svg#svg', title: t('discount-price'), description: t('discount-price-description') },
    { iconHref: 'assets/insurance.svg#svg', title: t('insurance'), description: t('insurance-description') },
    { iconHref: 'assets/cod.svg#svg', title: t('cash-on-delivery-management'), description: t('cash-on-delivery-management-description') },
    { iconHref: 'assets/integration.svg#svg', title: t('simple-integration'), description: t('simple-integration-description') },
    { iconHref: 'assets/admin.svg#svg', title: t('user-friendly-administration-interface'), description: t('user-friendly-administration-interface-description') },
    { iconHref: 'assets/invoice.svg#svg', title: t('transparent-invoicing'), description: t('transparent-invoicing-description') }];

  const inputLeftData = [
    { label: t('full-name'), name: 'name', type: 'text', placeholder: t('full-name'), required: true },
    { label: t('phone-number'), name: 'phone', type: 'number', placeholder: t('phone-number'), required: true },
    { label: t('email'), name: 'email', type: 'email', placeholder: t('email'), required: true }];

  const packageOptions = [1, 2, 3, 4];
  const monthlyOptions = [1, 2, 3, 4];

  const inputRightData = [
    { label: t('webstore-url'), name: 'webshop', type: 'url', placeholder: t('webstore-url'), required: true },
    { label: t('package-dimension'), name: 'product', type: 'number', placeholder: t('please-select'), required: true, list: 'package-dimension', options: packageOptions },
    { label: t('number-of-monthly-shipments'), name: 'delivery-count', type: 'number', placeholder: t('please-select'), required: true, list: 'monthly-shipments', options: monthlyOptions }];

  return (
    <>
      <main className='homePage'>
        <section className='homeHeroSection homeBlock'>
          <div className='container'>
            <div className='flexRow'>
              <div className='col-6 col-12--md'>
                <div className='homeHeroSection__text' style={{ width: '100%' }}>
                  <h1>{t('focus-on-really-important-things')}</h1>
                  <p>{t('imagine-how-much-time')}
                  </p>
                  <p>{t('can-we-help-you')}
                  </p>
                </div>
              </div>
              <div className='col-6 homeHeroSection__illustration' style={{ objectFit: 'contain' }}>
                <img src='assets/illustration.png' srcSet='assets/illustration@2x.png, assets/illustration@3x.png' alt='Fuvarozót keresel? Találd meg a legjobb ajánlatot!' width='436' height='436' style={{ left: '20px', top: '50px' }} />
              </div>
            </div>
            <a className='btn btn--primary btn--big btn--expended--mobile' href='/' title={t('contact-us')}>{t('contact-us')}</a>
          </div>
        </section>

        <section className='fulfillmentPage fulfillmentHeroSection' id='how-it-works' style={{ paddingTop: '80px', paddingBottom: '50px' }}>
          <div className='container'>
            <h1 className='u-maxWidth-16'>{t('how-it-works-in-practice')}</h1>
            <CardList className='flexRow u-push-30' globalClassName='col-4 col-12--md u-push-30 u-push-30--tablet' globalIconClassName='icn icn--48 icn--primary' data={howItWorksData} />
          </div>
        </section>

        <section className='fulfillmentPage fulfillmentPartners'>
          <div className='container'>
            <h2>{t('partners')}</h2>
            <p className='u-maxWidth-20 u-center'>
              {t('partners-description')}
            </p>
            <ul>
              <li>
                <img src='assets/tnt.png' srcSet='assets/tnt@2x.png, assets/tnt@3x.png' align='TNT' width='138' height='50' />
              </li>
              <li>
                <img src='assets/mpl.png' srcSet='assets/mpl@2x.png, assets/mpl@3x.png' align='MPL' width='122' height='90' />
              </li>
              <li>
                <img src='assets/gls.png' srcSet='assets/gls@2x.png, assets/gls@3x.png' align='GLS' width='186' height='50' />
              </li>
            </ul>
          </div>
        </section>

        <section className='fulfillmentPage fulfillmentContact container'>
          <h2>{t('want-more-details')}</h2>
          <p className='u-maxWidth-20 u-center'>{t('enter-your-contact-information')}</p>
          <form className='flexRow u-maxWidth-20 u-push-20 u-center' onSubmit={handleSubmit}>
            <InputList className='col-6 col-12--sm' globalClassName='col-12 col-12--sm u-push-20' globalInputClassName='required' data={inputLeftData} />
            <InputList className='col-6 col-12--sm' globalClassName='col-12 col-12--sm u-push-20' globalInputClassName='required' data={inputRightData} />
            <div className='col-12'>
              <button type='submit' className='btn btn--primary btn--expended--mobile' title={t('contact')}>{t('contact')}</button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}

Home.getServerSideProps = async () => ({
  namespacesRequired: ['common']
});

Home.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation('common')(Home);
