import PropTypes from 'prop-types';
import { i18n } from '../../services/i18n';

function LanguageButton (props) {
  return (
    <button
      type='button' className='language-btn'
      value={props.text}
      onClick={() => i18n.changeLanguage(props.language)}
    >
      {props.children}
    </button>
  );
}

LanguageButton.propTypes = {
  language: PropTypes.string
};

export default LanguageButton;
