import React from 'react';
import { mount } from 'enzyme';

import { Button } from '../../src/components/Button';

describe('<Button />', () => {
  it('should render an enabled button', () => {
    const button = mount(<Button id="test1" text="test" disabled>Test</Button>);
    expect(button.find('button[disabled=true]')).toHaveLength(1);
    expect(button).toMatchSnapshot();
  });

  it('should render a disabled button', () => {
    const button = mount(<Button id="test1" text="test" disabled={false}>Test</Button>);
    expect(button.find('button[disabled=false]')).toHaveLength(1);
    expect(button).toMatchSnapshot();
  });
});
