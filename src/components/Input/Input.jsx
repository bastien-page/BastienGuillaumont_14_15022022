import React from "react";
import PropTypes from "prop-types";

function Input({ type, label, name, onChange }) {
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
        onChange={onChange}
        // required
      />
    </div>
  );
}

export default Input;

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
};
