/* eslint-disable react/prop-types */
import React from "react";

const TextInput = React.forwardRef((props, ref) => {
  const { type, values, handleChange, placeholder, name, label } = props;
  return (
    <label htmlFor={name} className="input-box">
      {" "}
      {label}
      <input
        type={type}
        value={values[name]}
        onChange={handleChange}
        placeholder={placeholder}
        id={name}
        name={name}
        ref={ref}
      />
    </label>
  );
});

export default TextInput;
