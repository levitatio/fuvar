import Link from 'next/link';
import PropTypes from 'prop-types';

function MenuItem (props) {
  return (
    <Link href={props.href}>
      <a className={props.class} title={props.title}>
        {props.icon && <img src={props.icon} />}
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
