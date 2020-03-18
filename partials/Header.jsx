import Button from '../components/button/Button';
import PropTypes from 'prop-types';
import { withTranslation } from '../services/i18n';
import MenuItem from '../components/menu/MenuItem';

function Header ({ t }, user) {
  return (
    <div className='container'>
      <a className='headerBar__logo' href='/' title='Fuvar.hu'>
        <img src='assets/logo.svg' className='Logo' />
      </a>
      <nav className='navBar u-floatLeft u-desktopBigOnly'>
        <ul>
          <li><MenuItem href='/' className='item' icon='assets/help.svg' text={t('how-it-works')} /></li>
          <li><MenuItem href='/' className='item' icon='assets/add-box.svg' text={t('send-me-a-quote')} /></li>
          <li><MenuItem href='/' className='item' icon='assets/tree.svg' text={t('for-our-environment')} /></li>
        </ul>
      </nav>
      <nav className='navBar navBar--secondary u-right-10 u-desktopBigOnly'>
        <ul>
          <li><MenuItem href='/' className='item' text={t('login')} /></li>
          <li><MenuItem href='/' className='item' text={t('registration')} /></li>
          <li><MenuItem href='/' className='item' text={t('help')} /></li>
        </ul>
      </nav>
      <nav className='mobileNavButton u-desktopBigHidden js-mobileNavButton'>
        <svg className='icn icn--24 icn--primary js-openMobileNav' title='Navigáció'>

          <svg viewBox='0 0 24 24' id='icn-menu'>
            <text fontSize='45px' x='0' y='24'>&#8801;</text>
          </svg>
        </svg>
      </nav>
    </div>
  );
}

Header.getInitialProps = async () => ({
  namespacesRequired: ['common']
});

Header.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation('common')(Header);
