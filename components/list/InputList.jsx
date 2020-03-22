import InputBox from '../input/InputBox';

function InputList (props) {
  return (
    <div className={props.className}>
      {props.data && props.data.map((item, index) =>
        <InputBox
          key={index}
          label={item.label}
          type={item.type}
          className={props.globalClassName}
          inputClassName={props.globalInputClassName}
          name={item.name}
          placeholder={item.placeholder}
          list={item.list}
          required={item.required}
        >
          {item.options && item.list && (
            <datalist id={item.list}>
              {item.options.map((opt, index) =>
                <option key={index} value={opt} />
              )}
            </datalist>
          )}
        </InputBox>
      )}
    </div>
  );
}

export default InputList;
