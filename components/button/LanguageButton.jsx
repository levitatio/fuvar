import PropTypes from 'prop-types';
import { i18n } from '../../services/i18n';

function LanguageButton (props) {
  return (
    <a
      className='language-btn'
      title={props.title}
      onClick={() => i18n.changeLanguage(props.language)}
      style={props.style}
    >
      {props.children}
      <span>{props.text}</span>
    </a>
  );
}

LanguageButton.propTypes = {
  language: PropTypes.string
};

export default LanguageButton;
