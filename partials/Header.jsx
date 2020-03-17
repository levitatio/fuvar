import Button from '../components/button/Button';
import PropTypes from 'prop-types';
import { withTranslation } from '../services/i18n';

function Header ({ t }, user) {
  return (
    <div className='container'>
      <a class='headerBar__logo' href='/' title='Fuvar.hu'>
        <img src='assets/logo.svg' className='Logo' />
      </a>
      <div className='navBar u-floatLeft u-desktopBigOnly'>
        <Button text={t('how-it-works')} />
        <Button text={t('send-me-a-quote')} />
        <Button text={t('for-our-environment')} />
      </div>
      <div className='navBar navBar--secondary u-right-10 u-desktopBigOnly'>
        <Button text={t('login')} />
        <Button text={t('registration')} />
        <Button text={t('help')} />
      </div>
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
