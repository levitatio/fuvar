import Link from 'next/link';
import PropTypes from 'prop-types';

function MenuItem (props) {
  return (
    <Link href={props.href}>
      <a title={props.title} onClick={props.handleClick}>
        {props.icon && <img src={props.icon} className={props.className} style={props.style} />}
        <span>{props.text}</span>
        {props.children}
      </a>
    </Link>
  );
}

MenuItem.propTypes = {
  href: PropTypes.string.isRequired
};

export default MenuItem;
