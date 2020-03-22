import MenuItem from '../menu/MenuItem';

function FooterList (props) {
  return (
    <li>
      <h4>{props.title}</h4>
      <ul className={props.className}>
        {props.data && props.data.map((item, index) =>
          <li key={index}><MenuItem href={item.href} text={item.text} title={item.text} icon={props.icon} style={props.style} /></li>
        )}
      </ul>
    </li>
  );
}

export default FooterList;
