import PropTypes from 'prop-types';

function MenuItem (props) {
  return (
    <a href={props.href} className={props.class} title={props.title}>
      {props.icon && <img src={props.icon} />}
      <span>{props.text}</span>
      {props.children}
    </a>
  );
}

MenuItem.propTypes = {
  href: PropTypes.string.isRequired
};

export default MenuItem;
