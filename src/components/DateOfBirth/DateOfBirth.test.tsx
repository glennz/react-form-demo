import React from 'react';
import { mount } from 'enzyme';

import { DateOfBirth } from './index';
import DateOfBirthType from '../../shared/DateOfBirthType';



describe('<DateOfBirth />', () => {
    const fieldProps = {
        id: 'test',
        name: 'test',
        label: 'Event date',
        dateOfBirth: {
            day: {value: ''}, 
            month: {value: ''}, 
            year: {value: ''}
        } as DateOfBirthType,
    };

  it('should render a DateOfBirth', () => {
    const dob = mount(<DateOfBirth {...fieldProps}></DateOfBirth>);
    expect(dob.find('div[className="dob-inputs"]')).toHaveLength(1);
    expect(dob.find('input[className="dob-input-field"]')).toHaveLength(3);
    expect(dob.find('.error-message')).toHaveLength(0);
    expect(dob).toMatchSnapshot();
  });

  it('should render a DateOfBirth', () => {
    const dob = mount(<DateOfBirth {...fieldProps} touched={true} error="Date of birth is required" />);
    expect(dob.find('div[className="dob-inputs"]')).toHaveLength(1);
    expect(dob.find('input[className="dob-input-field"]')).toHaveLength(3);
    expect(dob.find('.error-message')).toHaveLength(1);
    const err = dob.find('div[className="error-message"]');
    expect(err.text()).toBe('Date of birth is required');
    expect(dob).toMatchSnapshot();
  });
});