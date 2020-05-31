import React from 'react';
import { mount } from 'enzyme';

import { TextInput } from './index';

describe('<TextInput />', () => {
  const fieldProps = {
    className: 'test',
    handleBlur: () => {},
    handleChange: () => {},
    id: 'test',
    label: 'Test label',
    name: 'test'
  };

  it('should render input field', () => {
    const textInput = mount(<TextInput {...fieldProps} />);
    expect(textInput.find('input')).toHaveLength(1);
    expect(textInput).toMatchSnapshot();
  });

  it('should render input field without error', () => {
    const touched = true;
    const textInput = mount(<TextInput {...fieldProps} touched={touched} className="" />);
    expect(textInput.find('input')).toHaveLength(1);
    expect(textInput.find('div')).toHaveLength(1);
    expect(textInput.find('.error-message')).toHaveLength(0);
    expect(textInput).toMatchSnapshot();
  });

  it('should render input field with error', () => {
    const touched = true;
    const error = 'error';
    const textInput = mount(<TextInput {...fieldProps} error={error} touched={touched} />);
    expect(textInput.find('input')).toHaveLength(1);
    expect(textInput.find('div')).toHaveLength(2);
    expect(textInput.find('.error-message')).toHaveLength(1);

    expect(textInput).toMatchSnapshot();
  });

  it('should handle events', () => {
    const localFieldProps = {
      ...fieldProps,
      onBlur: jest.fn(),
      onChange: jest.fn()
    };
    const textField = mount(<TextInput {...localFieldProps} />);
    const input = textField.find('input');
    expect(input).toHaveLength(1);
    input.simulate('change', {
      target: { name: 'test', value: 'test' }
    });
    expect(localFieldProps.onBlur).toHaveBeenCalledTimes(0);
    expect(localFieldProps.onChange).toHaveBeenCalledTimes(1);
    input.simulate('blur');
    expect(localFieldProps.onBlur).toHaveBeenCalledTimes(1);
    expect(localFieldProps.onChange).toHaveBeenCalledTimes(1);
  });
});
