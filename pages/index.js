import PropTypes from 'prop-types';
import { withTranslation } from '../services/i18n';

function Home ({ t }, user) {
  return (
    <>
      <main className='homePage'>
        <section className='homeHeroSection homeBlock'>
          <div className='container'>
            <div className='flexRow'>
              <div className='col-6 col-12--md'>
                <div className='homeHeroSection__text'>
                  <h1>Fuvarozót keresel?<br />Találd meg a legjobb ajánlatot!</h1>
                  <p>Fuvarozóink versenyeztetésével jelentős költséget és időt takaríthatsz meg. Tedd fel ajánlatkérésed ingyen, a többit intézzük.</p>
                </div>
                <div className='homeHeroSection__categories flexRow'>
                  <div className='col-4'>
                    <a href='ajanlatkeres?cat=9' title='Raklapos szállítás'>
                      <svg className='icn icn--48 icn--primary'>
                        <use xlinkHref='' />
                      </svg>
                      <h3>Raklapos szállítás</h3>
                      <small className='u-textAlignCenter'>EUR, részrakomány</small>
                    </a>
                  </div>
                  <div className='col-4'>
                    <a href='ajanlatkeres?cat=1' title='Költöztetés'>
                      <svg className='icn icn--48 icn--primary'>
                        <use xlinkHref='' />
                      </svg>
                      <h3>Költöztetés</h3>
                      <small className='u-textAlignCenter'>Lakás, ház, iroda</small>
                    </a>
                  </div>
                  <div className='col-4'>
                    <a href='ajanlatkeres?cat=14' title='Bútorszállítás'>
                      <svg className='icn icn--48 icn--primary'>
                        <use xlinkHref='' />
                      </svg>
                      <h3>Bútorszállítás</h3>
                      <small className='u-textAlignCenter'>Szekrény, fotel, ágy</small>
                    </a>
                  </div>
                  <div className='col-4'>
                    <a href='ajanlatkeres?cat=7' title='Háztartási eszköz szállítás'>
                      <svg className='icn icn--48 icn--primary'>
                        <use xlinkHref='' />
                      </svg>
                      <h3>Háztartási eszköz szállítás</h3>
                      <small className='u-textAlignCenter'>Hűtő, TV, mosógép</small>
                    </a>
                  </div>
                  <div className='col-4'>
                    <a href='ikea' title='IKEA Házhozszállítás'>
                      <svg className='icn icn--48 icn--primary'>
                        <use xlinkHref='' />
                      </svg>
                      <h3>IKEA</h3>
                      <small className='u-textAlignCenter'>Házhozszállítás</small>
                    </a>
                  </div>
                  <div className='col-4'>
                    <a href='csomagkuldes?cat=2' title='Csomagszállítás'>
                      <svg className='icn icn--48 icn--primary'>
                        <use xlinkHref='' />
                      </svg>
                      <h3>Csomagszállítás</h3>
                      <small className='u-textAlignCenter'>Doboz, boríték</small>
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-6 homeHeroSection__illustration'>
                <div>
                  <img src='assets/illustration.png' srcSet='assets/illustration@2x.png, assets/illustration@3x.png' alt='Fuvarozót keresel? Találd meg a legjobb ajánlatot!' width='395' height='399' className='js-homeMen' style={{ bottom: '0px' }} />
                </div>
              </div>
            </div>
            <a className='btn btn--primary btn--big btn--expended--mobile' href='ajanlatkeres' title='Kérj ajánlatot most'>Kezdjük el!</a>
          </div>
        </section>
        <section className='fulfillmentPage fulfillmentHeroSection'>
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
            <h2>Partnereink)</h2>
            <p className='u-maxWidth-20 u-center'>
              Minden egyes szállítási megbízásánál az alábbi szolgáltatók közül választhatsz.<br />
              <small>(Természetesen Neked elég csak velünk szerződnöd)</small>
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
          <h2>Érdekelnek a részletek?</h2>
          <p className='u-maxWidth-20 u-center'>Add meg elérhetőségeidet és kollégánk hamarosan felveszi veled a kapcsolatot.</p>
          <form className='flexRow u-maxWidth-20 u-push-20 u-center is-validate js-fulfillmentForm' action='fulfillment' method='POST' novalidate='novalidate'>
            <div className='col-6 col-12--sm u-push-20'>
              <label>Vezetéknév:</label>
              <input type='text' name='lastname' className='required' />
            </div>
            <div className='col-6 col-12--sm u-push-20'>
              <label>Keresztnév:</label>
              <input type='text' name='firstname' className='required' />
            </div>
            <div className='col-6 col-12--sm u-push-20'>
              <label>Telefonszám:</label>
              <input type='text' name='phone' className='required' />
            </div>
            <div className='col-6 col-12--sm u-push-20'>
              <label>Email cím:</label>
              <input type='text' name='email' className='required' />
            </div>
            <div className='col-12'>
              <small>A megadott elérhetőségeken csak és kizárólag a fenti webáruházas szállítással kapcsolatban fogunk keresni. Azokat harmadik félnek nem adjuk ki, és semmilyen más marketing célra nem használjuk fel.</small>
            </div>
            <div className='col-6 col-12--sm'>
              <label>Csomagméret:</label>
              <div className='u-push-20'>
                <div className='checkboxWrap'>
                  <input type='checkbox' id='shipment_type_0' name='shipment_type[]' value='Boríték' className='js-confirm' />
                  <label for='shipment_type_0' />
                </div>
                <label className='label--thin' for='shipment_type_0'>Boríték</label>
              </div>
              <div className='u-push-20'>
                <div className='checkboxWrap'>
                  <input type='checkbox' id='shipment_type_1' name='shipment_type[]' value='Csomag [1kg - 40kg között]' className='js-confirm' />
                  <label for='shipment_type_1' />
                </div>
                <label className='label--thin' for='shipment_type_1'>Csomag [1kg - 40kg között]</label>
              </div>
              <div className='u-push-20'>
                <div className='checkboxWrap'>
                  <input type='checkbox' id='shipment_type_2' name='shipment_type[]' value='Csomag [40kg felett]' className='js-confirm' />
                  <label for='shipment_type_2' />
                </div>
                <label className='label--thin' for='shipment_type_2'>Csomag [40kg felett]</label>
              </div>
              <div className='u-push-20'>
                <div className='checkboxWrap'>
                  <input type='checkbox' id='shipment_type_3' name='shipment_type[]' value='Raklap [max 1000kg]' className='js-confirm' />
                  <label for='shipment_type_3' />
                </div>
                <label className='label--thin' for='shipment_type_3'>Raklap [max 1000kg]</label>
              </div>
            </div>
            <div className='col-6 col-12--sm'>
              <label>Webáruház linkje:</label>
              <input type='text' name='webshop' className='required' />
              <div className=' u-pushTop-20'>
                <label>Feladási telephely:</label>
                <input type='text' name='pickup' className='required' />
              </div>
            </div>
            <div className='col-6 col-12--sm u-push-20'>
              <label>Heti szállítások száma:</label>
              <input type='text' name='delivery_count' className='required' />
            </div>
            <div className='col-6 col-12--sm'>
              <label>Termék megnevezése / leírása:</label>
              <input type='text' name='product' className='required' />
            </div>
            <div className='col-12 col-12--sm u-push-20'>
              <label>Egyéb:</label>
              <div className='checkboxWrap'>
                <input type='checkbox' id='fulfillment' name='request_fulfillment' value='1' className='js-confirm' />
                <label for='fulfillment' />
              </div>
              <label className='label--thin' for='fulfillment'>A szállításon kívül fulfillment [raktározás, csomagolás, címkézés] szolgáltatást szeretnék.</label>
            </div>
            <div className='col-12'>
              <div className='js-fulfillmentResponse' />
              <input type='hidden' name='hash' value='71b8f3be0217df148bfbc7872c13b623' />
              <input type='hidden' name='cptch' value='' />
              <button type='submit' className='btn btn--primary btn--expended--mobile'>Küldés</button>
            </div>
          </form>
        </section>
      </main>

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

Home.getServerSideProps = async () => ({
  namespacesRequired: ['common']
});

Home.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation('common')(Home);
