/* eslint-disable react/prop-types */
import React from "react";

const TextInput = React.forwardRef((props, ref) => {
  const { type, values, handleChange, placeholder, name } = props;
  return (
    <label htmlFor={name} className="input-box">
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
