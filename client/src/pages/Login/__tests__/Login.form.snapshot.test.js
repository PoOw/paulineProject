// @flow
import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import InnerLoginForm from '../Login.form';

describe('The form component', () => {
  it('should render correctly', () => {
    const props = { errors: {}, touched: {}, isSubmitting: false };
    const tree = shallow(<InnerLoginForm {...props} />);
    expect(toJSON(tree)).toMatchSnapshot();
  });
});
