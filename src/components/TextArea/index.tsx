import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

export const TextArea = (props: any) => {
  const { id, label, name, className, value, error, onBlur, onChange, touched, rows, cols } = props;
  const classes = classnames({
    error: touched && error,
    'text-input': true
  });

  return (
    <div className={classes}>
      <label htmlFor={name}>{label}</label>
      <textarea
        className={`input ${className || ''}`}
        id={id}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        placeholder={label}
        value={value}
        rows={rows}
        cols={cols}
      />
      {touched && (error && <span className="message">{error}</span>)}
    </div>
  );
};

TextArea.defaultProps = {
  touched: false,
  error: ''
};

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  className: PropTypes.string,
  error: PropTypes.string,  
  touched: PropTypes.bool,
  children: PropTypes.node,
  rows: PropTypes.string,
  cols: PropTypes.string,
};