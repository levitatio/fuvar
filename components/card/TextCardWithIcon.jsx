function TextCardWithIcon (props) {
  return (
    <div className={props.className}>
      <svg className={props.iconClassName}>
        <use href={props.href} />
      </svg>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

export default TextCardWithIcon;
