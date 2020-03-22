import PropTypes from 'prop-types';
import { withTranslation } from '../services/i18n';
import { apiRequest } from '../services/apiRequest';
import LanguageButton from '../components/button/LanguageButton';
import FooterList from '../components/list/FooterList';

const footerImgStyle = {
  marginRight: '10px',
  marginTop: '10px'
};

function Footer ({ t }, user) {
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

  const learnMoreData = [{ href: '/', text: t('for-clients') },
    { href: '/', text: t('for-carriers') },
    { href: '/', text: t('for-webstores') },
    { href: '/', text: t('eco-mission') }];

  const informationData = [{ href: '/', text: t('support') },
    { href: '/', text: t('our-carrier-partners') },
    { href: '/', text: t('terms-and-conditions-of-use') },
    { href: '/', text: t('privacy-policy') }];

  const ourCompanyData = [{ href: '/', text: t('about-us') },
    { href: '/', text: t('impressum') },
    { href: '/', text: t('blog') },
    { href: '/', text: t('career') }];

  return (
    <footer className='footer js-footer'>
      <div className='container'>
        <div className='footer__top'>
          <div className='flexRow' style={{ justifyContent: 'space-between' }}>
            <div className='col-7 col-12--md'>
              <ul className='footer__nav'>
                <FooterList className='unformattedList' data={learnMoreData} title={t('learn-more')} />
                <FooterList className='unformattedList' data={informationData} title={t('information')} />
                <FooterList className='unformattedList' data={ourCompanyData} title={t('our-company')} />
              </ul>
            </div>
            <div className='col-5 col-6--md col-12--sm'>
              <form onSubmit={handleSubmit}>
                <label>{t('subscribe-to-our-newsletter')}</label>
                <div className='flexRow' style={{ flexWrap: 'nowrap', margin: '20px 0 0 0', padding: '5px 5px 5px 0', background: '#FFFFFF' }}>
                  <input type='email' name='name' className='required' placeholder={t('your-email')} required style={{ flexShrink: '2', background: '#FFFFFF' }} />
                  <button type='submit' className='btn btn--primary btn--expended--mobile' title={t('subscription')} style={{ margin: '0' }}>{t('subscription')}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className='footer__middle'>
          <div className='footer__languages'>
            <LanguageButton className='hu' language='hu' title='Magyar'>
              <img
                src='assets/flags/hungary.png' srcSet='assets/flags/hungary@2x.png 2x, assets/flags/hungary@3x.png 3x'
                className='hungary'
              />
              {'Magyar'}
            </LanguageButton>
            <LanguageButton className='en' language='en' title='English'>
              <img
                src='assets/flags/united-kingdom.png' srcSet='assets/flags/united-kingdom@2x.png 2x, assets/flags/united-kingdom@3x.png 3x'
                className='english'
              />
              {'English'}
            </LanguageButton>
            <LanguageButton className='hr' language='hr' title='Hrvatski'>
              <img
                src='assets/flags/croatia.png' srcSet='assets/flags/croatia@2x.png 2x, assets/flags/croatia@3x.png 3x'
                className='croatia'
              />
              {'Hrvatski'}
            </LanguageButton>
          </div>
          <p>Fuvar.hu © 2020 {t('all-rights-reserved')}</p>
        </div>

        <div className='footer__bottom'>
          <div className='flexRow' style={{ justifyContent: 'space-between', width: '100%', marginLeft: '0' }}>
            <div style={{ display: 'flex' }}>
              <img
                src='assets/footer-bottom/barion.png'
                srcSet='assets/footer-bottom/barion@2x.png 2x, assets/footer-bottom/barion@3x.png 3x'
                // width="208" height="25"
                alt='Barion'
                style={{ alignSelf: 'center' }}
              />
            </div>
            <div className='flexRow' style={{ margin: '0' }}>
              <img
                src='assets/footer-bottom/hiventures.png'
                srcSet='assets/footer-bottom/hiventures@2x.png 2x, assets/footer-bottom/hiventures@3x.png 3x'
                // width="204" height="45"
                alt='HiVentures'
                style={footerImgStyle}
              />
              <img
                src='assets/footer-bottom/new-szechenyi-logo.png'
                srcSet='assets/footer-bottom/new-szechenyi-logo@2x.png 2x, assets/footer-bottom/new-szechenyi-logo@3x.png 3x'
                // width="204" height="45"
                alt='HiVentures'
                style={{ marginTop: '10px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.getServerSideProps = async () => ({
  namespacesRequired: ['footer']
});

Footer.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation('footer')(Footer);
