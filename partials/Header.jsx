import Button from '../components/button/Button';
import PropTypes from 'prop-types';
import { withTranslation } from '../services/i18n';

function Header ({ t }, user) {
  return (
    <>
      <div className='logo' />
      <div className='businessOptions'>
        <Button text={t('how-it-works')} />
        <Button text={t('send-me-a-quote')} />
        <Button text={t('for-our-environment')} />
      </div>
      <div className='userOptions'>
        <Button text={t('how-it-works')} />
        <Button text={t('send-me-a-quote')} />
        <Button text={t('for-our-environment')} />
      </div>
    </>
  );
}

Header.getInitialProps = async () => ({
  namespacesRequired: ['common']
});

Header.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation('common')(Header);
