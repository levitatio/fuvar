import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from '../services/i18n';
import MenuItem from '../components/menu/MenuItem';
import NavBar from '../components/list/NavBar';

const menuIconStyle = {
  margin: '3px 10px 0 0'
};

const mobileMenuIconStyle = {
  float: 'left',
  margin: '12px 8px 0 0'
};

function Header ({ t }, user) {
  const [isOpenMobilNav, setMobileNav] = useState('u-hidden');
  const container = useRef(null);

  function handleClickOutside (event) {
    if (container.current && !container.current.contains(event.target)) {
      setMobileNav('u-hidden');
    }
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

  const menuBarLeftItems = [{ href: '/#how-it-works', className: 'icn icn--24 icn--primary', icon: 'assets/help.svg', text: t('how-it-works') },
    { href: '/', className: 'icn icn--24 icn--primary', icon: 'assets/add-box.svg', text: t('get-a-quote') },
    { href: '/', className: 'icn icn--24 icn--primary', icon: 'assets/tree.svg', text: t('eco-mission') }];

  const menuBarRightItems = [{ href: '/', className: 'js-openAuthModal', text: t('login') },
    { href: '/', className: 'item', text: t('signup') },
    { href: '/', className: 'item', text: t('help') }];

  return (
    <>
      <header className='headerBar u-clearfix js-headerBar'>
        <div className='container'>
          <a className='headerBar__logo' href='/' title='Fuvar.hu'>
            <svg className='Logo'>
              <use href='assets/logo.svg#svg' />
            </svg>
          </a>
          <NavBar className='navBar u-floatLeft u-desktopBigOnly' data={menuBarLeftItems} itemStyle={menuIconStyle} />
          <NavBar className='navBar navBar--secondary u-right-10 u-desktopBigOnly' data={menuBarRightItems} itemStyle={menuIconStyle} />
          <a
            className='mobileNavButton u-desktopBigHidden'
            title={t('navigation')}
            onClick={handleCilckButton}
          >
            <img src='assets/menu-icon.svg' className='icn icn--24 icn--primary' />
          </a>

        </div>
      </header>
      {/* <NavBar ref={container} className={`mobileNavDropdown menu u-maxWidth-5 ${isOpenMobilNav}`} data={[...menuBarLeftItems, ...menuBarRightItems]} itemStyle={mobileMenuIconStyle} style={{ right: '51px' }}/> */}
      <nav ref={container} className={`mobileNavDropdown menu u-maxWidth-5 ${isOpenMobilNav}`} style={{ right: '51px' }}>
        <ul>
          <li><MenuItem href='/#how-it-works' className='icn icn--24 icn--gray' icon='assets/help.svg' text={t('how-it-works')} title={t('how-it-works')} style={mobileMenuIconStyle} /></li>
          <li><MenuItem href='/' className='icn icn--24 icn--gray' icon='assets/add-box.svg' text={t('get-a-quote')} title={t('get-a-quote')} style={mobileMenuIconStyle} /></li>
          <li><MenuItem href='/' className='icn icn--24 icn--gray' icon='assets/tree.svg' text={t('eco-mission')} title={t('eco-mission')} style={mobileMenuIconStyle} /></li>
          <li><MenuItem href='/' className='icn icn--24 icn--gray' text={t('login')} title={t('login')} style={mobileMenuIconStyle} /></li>
          <li><MenuItem href='/' className='item' text={t('signup')} title={t('signup')} style={mobileMenuIconStyle} /></li>
          <li><MenuItem href='/' className='item' text={t('help')} title={t('help')} style={mobileMenuIconStyle} /></li>
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
