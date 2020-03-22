import MenuItem from '../menu/MenuItem';

function NavBar (props) {
  return (
    <nav className={props.className}>
      <ul>
        {props.data && props.data.map((item, index) =>
          <li key={index}>
            <MenuItem
              href={item.href}
              text={item.text}
              title={item.text}
              icon={item.icon}
              className={item.className}
              style={props.itemStyle}
            />
          </li>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
