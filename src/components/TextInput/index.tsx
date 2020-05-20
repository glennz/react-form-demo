import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

export const TextInput = (props: any) => {
  const { id, type, label, name, className, value, error, onBlur, onChange, touched } = props;
  const classes = classnames({
    'text-input': true,
    error: touched && error    
  });

  return (
    <div className={classes}>
      <label htmlFor={name}>{label}</label>
      <input
        className={`input ${className || ''}`}
        id={id}
        type={type}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        placeholder={label}
        value={value}
      />
      {touched && (error && <div className="error-message">{error}</div>)}
    </div>
  );
};

TextInput.defaultProps = {
  type: "text",
  touched: false,
  error: ''
};

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,  
  type: PropTypes.string,
  value: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  className: PropTypes.string,
  customChange: PropTypes.func,
  error: PropTypes.string,
  touched: PropTypes.bool,
  children: PropTypes.node
};