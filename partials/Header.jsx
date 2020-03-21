import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from '../services/i18n';
import MenuItem from '../components/menu/MenuItem';

function Header ({ t }, user) {
  const [isOpenMobilNav, setMobileNav] = useState('u-hidden');
  const container = useRef(null);

  function handleClickOutside (event) {
    if (container.current && !container.current.contains(event.target)) {
      setMobileNav('u-hidden');
    }
  }

  function handleClickAfterButton () {
    setMobileNav('u-hidden');
  }

  function handleCilckButton () {
    setMobileNav('');
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return (
    <>
      <header className='headerBar u-clearfix js-headerBar'>
        <div className='container'>
          <a className='headerBar__logo' href='/' title='Fuvar.hu'>
            <svg className='Logo'>
              <use href='assets/logo.svg#svg' />
            </svg>
          </a>
          <nav className='navBar u-floatLeft u-desktopBigOnly'>
            <ul>
              <li><MenuItem href='/#how-it-works' className='item' icon='assets/help.svg' text={t('így-működik')} title='Így működik' /></li>
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
          <a
            className='mobileNavButton u-desktopBigHidden'
            title='Navigáció'
            onClick={handleCilckButton}
          >
            <img src='assets/menu-icon.svg' className='icn icn--24 icn--primary' />
          </a>

        </div>
      </header>
      <nav className={`mobileNavDropdown menu u-maxWidth-5 ${isOpenMobilNav}`} style={{ right: '51px' }}>
        <ul>
          <li><MenuItem href='/#how-it-works' className='icn icn--24 icn--gray' icon='assets/help.svg' text={t('így-működik')} title={t('így-működik')} /></li>
          <li><MenuItem href='ajanlatkeres' className='icn icn--24 icn--gray' icon='assets/add-box.svg' text={t('ajánlatkérés')} title={t('ajánlatkérés')} /></li>
          <li><MenuItem href='/' className='icn icn--24 icn--gray' icon='assets/tree.svg' text={t('környezetünkért')} title={t('környezetünkért')} /></li>
          <li><MenuItem href='/' className='icn icn--24 icn--gray' text={t('bejelentkezés')} title={t('bejelentkezés')} /></li>
          <li><MenuItem href='signup' className='item' text={t('regisztráció')} title={t('regisztráció')} /></li>
          <li><MenuItem href='gyik' className='item' text={t('segítség')} title={t('segítség')} /></li>
        </ul>
      </nav>
    </>
  );
}

Header.getServerSideProps = async () => ({
  namespacesRequired: ['header']
});

Header.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation('header')(Header);
