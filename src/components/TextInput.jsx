/* eslint-disable react/prop-types */
import React from "react";

function TextInput({ type, values, handleChange, placeholder, name }) {
  return (
    <label htmlFor={name}>
      <input
        type={type}
        value={values[name]}
        onChange={handleChange}
        placeholder={placeholder}
        id={name}
        name={name}
      />
    </label>
  );
}

export default TextInput;
