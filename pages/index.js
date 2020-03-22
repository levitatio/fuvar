import PropTypes from 'prop-types';
import { withTranslation } from '../services/i18n';

function Home ({ t }, user) {
  function handleSubmit (event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const reqBody = {};
    data.forEach((value, key) => { reqBody[key] = value; });
    const body = JSON.stringify(reqBody);
    // apiRequest
    console.log(body);
  }

  return (
    <>
      <main className='homePage'>
        <section className='homeHeroSection homeBlock'>
          <div className='container'>
            <div className='flexRow'>
              <div className='col-6 col-12--md'>
                <div className='homeHeroSection__text'>
                  <h1>{t('focus-on-really-important-things')}</h1>
                  <p>{t('imagine-how-much-time')}</p>
                  <p>{t('can-we-help-you')}</p>
                </div>
              </div>
              <div className='col-6 homeHeroSection__illustration'>
                <img src='assets/illustration.png' srcSet='assets/illustration@2x.png, assets/illustration@3x.png' alt='Fuvarozót keresel? Találd meg a legjobb ajánlatot!' width='395' height='399' className='js-homeMen' style={{ bottom: '0px', position: 'static' }} />
              </div>
            </div>
            <a className='btn btn--primary btn--big btn--expended--mobile' href='ajanlatkeres' title='Kérj ajánlatot most'>{t('contact-us')}</a>
          </div>
        </section>

        <section className='fulfillmentPage fulfillmentHeroSection' id='how-it-works'>
          <div className='container'>
            <h1 className='u-maxWidth-16'>{t('how-it-works-in-practice')}</h1>
            <div className='flexRow'>
              <div className='col-4 col-12--md u-push-20--tablet'>
                <svg className='icn icn--48 icn--primary'>
                  <image href='assets/cheap.svg' />
                </svg>
                <h3>{t('discount-price')}</h3>
                <p>{t('discount-price-description')}</p>
              </div>
              <div className='col-4 col-12--md u-push-20--tablet'>
                <svg className='icn icn--48 icn--primary'>
                  <image href='assets/insurance.svg' />
                </svg>
                <h3>{t('insurance')}</h3>
                <p>{t('discount-price-description')}</p>
              </div>
              <div className='col-4 col-12--md'>
                <svg className='icn icn--48 icn--primary'>
                  <image href='assets/cod.svg' />
                </svg>
                <h3>{t('cash-on-delivery-management')}</h3>
                <p>{t('cash-on-delivery-management-description')}</p>
              </div>
              <div className='col-4 col-12--md'>
                <svg className='icn icn--48 icn--primary'>
                  <image href='assets/integration.svg' />
                </svg>
                <h3>{t('simple-integration')}</h3>
                <p>{t('simple-integration-description')}</p>
              </div>
              <div className='col-4 col-12--md'>
                <svg className='icn icn--48 icn--primary'>
                  <image href='assets/admin.svg' />
                </svg>
                <h3>{t('user-friendly-administration-interface')}</h3>
                <p>{t('user-friendly-administration-interface-description')}</p>
              </div>
              <div className='col-4 col-12--md'>
                <svg className='icn icn--48 icn--primary'>
                  <image href='assets/invoice.svg' />
                </svg>
                <h3>{t('transparent-invoicing')}</h3>
                <p>{t('transparent-invoicing-description')}</p>
              </div>
            </div>
          </div>
          <div className='fulfillmentHeroSection__fade' />
        </section>

        <section className='fulfillmentPage fulfillmentPartners'>
          <div className='container'>
            <h2>{t('partners')}</h2>
            <p className='u-maxWidth-20 u-center'>
              {t('partners-description')}<br />
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
          <form className='flexRow u-maxWidth-20 u-push-20 u-center is-validate js-fulfillmentForm' onSubmit={handleSubmit}>
            <div className='col-6 col-12--sm'>
              <div className='col-6 col-12--sm u-push-20'>
                <label>{t('full-name')}:</label>
                <input type='text' name='name' className='required' placeholder={t('full-name')} required />
              </div>
              <div className='col-6 col-12--sm u-push-20'>
                <label>{t('phone-number')}:</label>
                <input type='number' name='phone' className='required' placeholder={t('phone-number')} required />
              </div>
              <div className='col-6 col-12--sm u-push-20'>
                <label>{t('email')}:</label>
                <input type='email' name='email' className='required' placeholder={t('email')} required />
              </div>
            </div>
            <div className='col-6 col-12--sm'>
              <div className='col-6 col-12--sm u-push-20'>
                <label>{t('webstore-url')}:</label>
                <input type='url' name='webshop' className='required' size='' placeholder={t('webstore-url')} required />
              </div>
              <div className='col-6 col-12--sm'>
                <label>{t('package-dimension')}:</label>
                <input list='mylist' type='text' name='product' className='required' placeholder={t('package-dimension')} required />

                <datalist id='mylist'>
                  <option value='1'>one</option>
                  <option value='2'>two</option>
                  <option value='3'>three</option>
                  <option value='4'>four</option>
                </datalist>
              </div>
              <div className='col-6 col-12--sm u-push-20'>
                <label>{t('number-of-monthly-shipments')}:</label>
                <input type='number' name='delivery_count' className='required' placeholder={t('number-of-monthly-shipments')} required />
              </div>
            </div>
            <div className='col-12'>
              <button type='submit' className='btn btn--primary btn--expended--mobile'>{t('contact')}</button>

            </div>
          </form>
        </section>
      </main>
      {/* <fieldset>
          <legend>Selecting elements</legend>
          <p>
             <label>Select list</label>
             <select id = "myList">
               <option value = "1">one</option>
               <option value = "2">two</option>
               <option value = "3">three</option>
               <option value = "4">four</option>
             </select>
          </p>
       </fieldset> */}
      {/* <style jsx>{`
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    `}
    </style> */}
    </>
  );
}

Home.getInitialProps = async () => ({
  namespacesRequired: ['common']
});

Home.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation('common')(Home);
