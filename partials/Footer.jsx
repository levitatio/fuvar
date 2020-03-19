import PropTypes from 'prop-types';
import { withTranslation } from '../services/i18n';
import MenuItem from '../components/menu/MenuItem';
import LanguageButton from '../components/button/LanguageButton';

function Footer ({ t }, user) {
  return (
    <footer className='footer js-footer'>
      <div className='container'>
        <div className='footer__top'>
          <ul className='footer__nav'>
            <li>
              <h4>{t('tudj-meg-többet')}</h4>
              <ul className='unformattedList'>
                <li><MenuItem href='/' text={t('megbízóknak')} /></li>
                <li><MenuItem href='/' text={t('fuvarozóknak')} /></li>
                <li><MenuItem href='/' text={t('webáruházaknak')} /></li>
                <li><MenuItem href='/' text={t('környezetünkért')} /></li>
                <li><MenuItem href='/' text={t('blog')} /></li>
                <li><MenuItem href='/' text={t('karrier')} /></li>
              </ul>
            </li>
            <li>
              <h4>{t('információk')}</h4>
              <ul className='unformattedList'>
                <li><MenuItem href='/' text={t('rólunk')} /></li>
                <li><MenuItem href='/' text={t('fuvarozó-partnereink')} /></li>
                <li><MenuItem href='/' text={t('impresszum')} /></li>
                <li><MenuItem href='/' text={t('felhasználási-feltételek')} /></li>
                <li><MenuItem href='/' text={t('adatvédelmi-szabályzat')} /></li>
              </ul>
            </li>
            <li>
              <h4>{t('kapcsolat')}</h4>
              <ul className='unformattedList'>
                <li>Fuvar.hu Kft.</li>
                <li>7626 Pécs, Farkas István utca 3/1.</li>
                <li><MenuItem href='/' text='+36 30 589 0000' /></li>
                <li><MenuItem href='/' text='info@fuvar.hu' /></li>
              </ul>
            </li>
          </ul>
          <form />
        </div>
        <div className='footer__middle'>
          <img
            src='assets/footer-bottom/barion.png'
            srcSet='assets/footer-bottom/barion@2x.png 2x, assets/footer-bottom/barion@3x.png 3x'
            //  width="208" height="25"
            alt='Barion'
          />
          <img
            src='assets/footer-bottom/hiventures.png'
            srcSet='assets/footer-bottom/hiventures@2x.png 2x, assets/footer-bottom/hiventures@3x.png 3x'
            // width="204" height="45"
            alt='HiVentures'
          />
          <img
            src='assets/footer-bottom/new-szechenyi-logo.png'
            srcSet='assets/footer-bottom/new-szechenyi-logo@2x.png 2x, assets/footer-bottom/new-szechenyi-logo@3x.png 3x'
            // width="204" height="45"
            alt='HiVentures'
          />
        </div>

        <div className='footer__bottom'>
          <ul className='footer__languages u-push-20--mobile'>
            <li><LanguageButton className='footer__languages__hu' language='hu' title='Magyar'>
              <img
                src='assets/flags/hungary.png' srcSet='assets/flags/hungary@2x.png 2x, assets/flags/hungary@3x.png 3x'
                className='hungary'
              />
              {'Magyar'}
                </LanguageButton>
            </li>
            <li><LanguageButton className='footer__languages__en' language='en' title='English'>
              <img
                src='assets/flags/united-kingdom.png' srcSet='assets/flags/united-kingdom@2x.png 2x, assets/flags/united-kingdom@3x.png 3x'
                className='english'
              />
              {'English'}
                </LanguageButton>
            </li>
            <li><LanguageButton className='footer__languages__hr' language='hr' title='Hrvatski'>
              <img
                src='assets/flags/croatia.png' srcSet='assets/flags/croatia@2x.png 2x, assets/flags/croatia@3x.png 3x'
                className='croatia'
              />
              {'Hrvatski'}
                </LanguageButton>
            </li>
          </ul>
          <p>Fuvar.hu © 2020</p>
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
