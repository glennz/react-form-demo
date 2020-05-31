import React from 'react';
import DateOfBirthPropsType from '../../shared/DateOfBirthPropsType';
import DateOfBirthType from '../../shared/DateOfBirthType';
import PropTypes from 'prop-types';
import utility from '../../constant/ulitily';

export const DateOfBirth = (props: DateOfBirthPropsType) => {
  const {
    id, 
    name,   
    label,  
    touched,
    error,
    dateOfBirth,
    dateFormat,
    setTouched, 
    setValue,
  } = props;

  let value = dateOfBirth || {} as DateOfBirthType;

  const dateAuFormat = 'au';

  const inputProps = (fieldName: string) => ({
    className: 'dob-input-field',
    id: `${id}.${fieldName}`,
    name: `${name}.${fieldName}`,
    onBlur: () => {
      setTouched && setTouched(name, true);
    },
    onChange: (e: any) => {
      const targetValue = e.target.value;
      switch(fieldName) {
          case 'day':
              value.day = utility.updateControlData(targetValue);
              break;
          case 'month':
              value.month = utility.updateControlData(targetValue);
              break;
          case 'year':
              value.year = utility.updateControlData(targetValue);
              break;
          default:
              value.day = utility.initControlData;
              value.month = utility.initControlData;
              value.year = utility.initControlData;
              break;
      }

      const date = {
        day: value.day,
        month: value.month,
        year: value.year
      } as DateOfBirthType;

      setValue && setValue(date);
    }
  });

  const dayControl = () => {
    return ( 
      <input {...inputProps('day')} placeholder="dd" type="text" value={dateOfBirth.day.value} maxLength={2} />
    );
  };

  const monthControl = () => {
    return ( 
      <input {...inputProps('month')} placeholder="mm" type="text" value={dateOfBirth.month.value} maxLength={9} />
    );
  };

  const yearControl = () => {
    return ( 
      <input {...inputProps('year')} placeholder="yyyy" type="text" value={dateOfBirth.year.value} maxLength={4} />
    );
  };

  const auDateControl = () => {
    return (
      <div className="dob-inputs">
        {dayControl()} 
        <span className="splitter">/</span>
        {monthControl()} 
        <span className="splitter">/</span>
        {yearControl()}
      </div>
    );
  };

  const usaDateControl = () => {
    return (
      <div className="dob-inputs">
        {monthControl()}
        <span className="splitter">/</span>
        {dayControl()} 
        <span className="splitter">/</span>    
        {yearControl()}
      </div>
    );
  };

  const dateControl = () => {
    return (dateFormat === dateAuFormat) ? auDateControl() : usaDateControl();
  };

  const labelControl = () => {
    return (label) ? (<label>{label}</label>) : null;
  };

  return (
    <div className={`dob-inputs-section${touched && error ? ' error' : ''}`}>
      {labelControl()}
      {dateControl()}
      {touched && (error && <div className="error-message">{error}</div>)}
    </div>
  );
};

DateOfBirth.defaultProps = {
  dateFormat: 'usa'
};

DateOfBirth.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,  
  label: PropTypes.string,
  dateOfBirth: PropTypes.any.isRequired,
  dateFormat: PropTypes.string,
  error: PropTypes.string,
  touched: PropTypes.bool,
  children: PropTypes.node,
  setTouched: PropTypes.func,
  setValue: PropTypes.func,
};