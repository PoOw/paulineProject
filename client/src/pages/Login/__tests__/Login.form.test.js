// @flow
import React from 'react';
import { shallow } from 'enzyme';

import InnerLoginForm from '../Login.form';

describe('The form component', () => {
  it('should render erros correctly', () => {
    const props = {
      errors: { email: 'email Error' },
      touched: { email: true },
      isSubmitting: true,
    };
    const wrapper = shallow(<InnerLoginForm {...props} />);
    expect(
      wrapper
        .find('button')
        .last()
        .prop('disabled'),
    ).toBe(true);
    expect(
      wrapper
        .find('div > div')
        .last()
        .text(),
    ).toEqual('email Error');
  });

  it('should render erros correctly', () => {
    const props = {
      errors: { password: 'password Error' },
      touched: { password: true },
      isSubmitting: false,
    };
    const wrapper = shallow(<InnerLoginForm {...props} />);
    expect(
      wrapper
        .find('button')
        .last()
        .prop('disabled'),
    ).toBe(false);
    expect(
      wrapper
        .find('div > div')
        .last()
        .text(),
    ).toEqual('password Error');
  });
});
