import React, { useState } from 'react';
import PropTypes from 'prop-types';
import icon from './images/calender.svg';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export const CalenderIcon = (props: any) => {
    const [datePicked, setDate] = useState(new Date());
    const { selectedDate, setDateValue } = props;

    if (!datePicked && selectedDate) {
        const date = new Date(selectedDate);
        setDate(date);     
    }

    const updateDate = (date: Date) => {
        setDate(date);
        setDateValue && setDateValue(date);
    };

    const ImageCustomInput = React.forwardRef((props: any, ref: any) => {
        return (
            <img src={icon} onClick={props.onClick} className="calender-icon" alt="" />
        )
    });
    
    return (        
        <DatePicker
        selected={datePicked}
        onChange={updateDate}
        customInput={<ImageCustomInput />}
        />
    );
};

CalenderIcon.propTypes = {
    selectedDate: PropTypes.any,
    setDateValue: PropTypes.func
};