import React from 'react';
import moment from 'moment';
import DateOfBirthPropsType from '../../shared/DateOfBirthPropsType';
import DateOfBirthType from '../../shared/DateOfBirthType';
import PropTypes from 'prop-types';
import utility from '../../constant/ulitily';

export const parseFields = (value: string, name: string) => {
  if (name === 'day') {
    return value.replace(/[^0-9]/g, '');
  }
  if (name === 'month') {
    return value.replace(/[^0-9a-zA-Z]/g, '');
  }
  if (name === 'year') {
    return value.replace(/[^0-9]/g, '');
  }
  if (name === 'parsed') {
    return value && moment.utc(value, 'YYYY-MM-DD').format();
  }
  return value;
};

export const formatFields = (value: string, name: string) => {
  let newVal = value;
  if (name === 'parsed' && newVal) {
    newVal = moment.utc(newVal).format('YYYY-MM-DD');
  }
  return newVal || '';
};

/* eslint-disable complexity */
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
    className: 'dob-field',
    id: `${id}.${fieldName}`,
    name: `${name}.${fieldName}`,
    onBlur: () => {
        setTouched && setTouched(`${name}.parsed`, true);
    },
    onChange: (e: any) => {
      // const inputValue = parseFields(e.target.value, `${fieldName}`);
      // // setValue && setValue(`${name}.${fieldName}`, inputValue);
      const targetValue = e.target.value;
      switch(fieldName) {
          case 'day':
              value.day = utility.udpateControlData(targetValue);
              break;
          case 'month':
              value.month = utility.udpateControlData(targetValue);
              break;
          case 'year':
                value.year = utility.udpateControlData(targetValue);
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
      {touched && (error && <div className="error message">{error}</div>)}
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
  error: PropTypes.string,
  touched: PropTypes.bool,
  children: PropTypes.node,
  setTouched: PropTypes.func,
  setValue: PropTypes.func,
};