import PropTypes from 'prop-types';
import { i18n } from '../../services/i18n';

function LanguageButton (props) {
  return (
    <a
      className='language-btn'
      value={props.text}
      title={props.title}
      onClick={() => i18n.changeLanguage(props.language)}
    >
      {props.children}
    </a>
  );
}

LanguageButton.propTypes = {
  language: PropTypes.string
};

export default LanguageButton;
