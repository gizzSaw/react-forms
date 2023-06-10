import React from "react";
import PropTypes from "prop-types";

const TextField = ({ label, type, name, vaalue, onChange, placeholder }) => {
  return (
    <div>
      <label htmlFor="email">{label}</label>
      <input
        placeholder={placeholder}
        type={type}
        id={name}
        name={name}
        value={vaalue}
        onChange={onChange}
      />
    </div>
  );
};

TextField.defaultProps = {
  type: "text",
};

TextField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  vaalue: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextField;
