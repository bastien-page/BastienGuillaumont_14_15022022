import React from "react";

function Input({ type, label, name, method }) {
  return (
    <div className="input">
      <label className="input__label" htmlFor={name}>
        {label}
      </label>
      <input
        className="input__input"
        type={type}
        id={name}
        name={name}
        onChange={method}
      />
    </div>
  );
}

export default Input;
