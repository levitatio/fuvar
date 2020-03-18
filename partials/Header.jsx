import PropTypes from 'prop-types';
import { withTranslation } from '../services/i18n';
import MenuItem from '../components/menu/MenuItem';

function Header ({ t }, user) {
  return (
    <header className='headerBar u-clearfix js-headerBar'>
      <div className='container'>
        <a className='headerBar__logo' href='/' title='Fuvar.hu'>
          <img src='assets/logo.svg' className='Logo' />
        </a>
        <nav className='navBar u-floatLeft u-desktopBigOnly'>
          <ul>
            <li><MenuItem href='/' className='item' icon='assets/help.svg' text={t('így-működik')} /></li>
            <li><MenuItem href='/' className='js-newShipmentButton' icon='assets/add-box.svg' text={t('ajánlatkérés')} /></li>
            <li><MenuItem href='/' className='item' icon='assets/tree.svg' text={t('környezetünkért')} /></li>
          </ul>
        </nav>
        <nav className='navBar navBar--secondary u-right-10 u-desktopBigOnly'>
          <ul>
            <li><MenuItem href='/' className='js-openAuthModal' text={t('bejelentkezés')} /></li>
            <li><MenuItem href='/' className='item' text={t('regisztráció')} /></li>
            <li><MenuItem href='/' className='item' text={t('segítség')} /></li>
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
    </header>
  );
}

Header.getServerSideProps = async () => ({
  namespacesRequired: ['header']
});

Header.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation('header')(Header);
