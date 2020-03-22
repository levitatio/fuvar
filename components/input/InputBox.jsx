function InputBox (props) {
  return (
    <div className={props.className}>
      <label>{props.label}:</label>
      {props.required ? (
        <input
          type={props.type}
          name={props.name}
          className={props.inputClassName}
          placeholder={props.placeholder}
          list={props.list}
          required
        />
      ) : (
        <input
          type={props.type}
          name={props.name}
          className={props.inputClassName}
          placeholder={props.placeholder}
          list={props.list}
        />
      )}
      {props.children}
    </div>
  );
}

export default InputBox;
