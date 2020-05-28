import React from 'react';
import { mount } from 'enzyme';

import { TextInput } from '../../src/components/TextInput';

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
});
