import React from 'react';
import { mount } from 'enzyme';

import { TextArea } from './index';

describe('<TextArea />', () => {
  const fieldProps = {
    className: 'test',
    handleBlur: () => {},
    handleChange: () => {},
    id: 'test',
    label: 'Test label',
    name: 'test'
  };

  it('should render textarea field', () => {
    const textArea = mount(<TextArea {...fieldProps} />);
    expect(textArea.find('textarea')).toHaveLength(1);
    expect(textArea).toMatchSnapshot();
  });

  it('should render textarea field without error', () => {
    const touched = true;
    const textArea = mount(<TextArea {...fieldProps} touched={touched} className="" />);
    expect(textArea.find('textarea')).toHaveLength(1);
    expect(textArea.find('span')).toHaveLength(0);
    expect(textArea).toMatchSnapshot();
  });

  it('should render textarea field with error', () => {
    const touched = true;
    const error = 'error';
    const textArea = mount(<TextArea {...fieldProps} error={error} touched={touched} />);
    expect(textArea.find('textarea')).toHaveLength(1);
    expect(textArea.find('span')).toHaveLength(1);
    expect(textArea).toMatchSnapshot();
  });

  it('should handle events', () => {
    const localFieldProps = {
      ...fieldProps,
      onBlur: jest.fn(),
      onChange: jest.fn()
    };
    const textArea = mount(<TextArea {...localFieldProps} />);
    const textarea = textArea.find('textarea');
    expect(textarea).toHaveLength(1);
    textarea.simulate('change', {
      target: { name: 'test', value: 'test' }
    });
    expect(localFieldProps.onBlur).toHaveBeenCalledTimes(0);
    expect(localFieldProps.onChange).toHaveBeenCalledTimes(1);
    textarea.simulate('blur');
    expect(localFieldProps.onBlur).toHaveBeenCalledTimes(1);
    expect(localFieldProps.onChange).toHaveBeenCalledTimes(1);
  });
});
