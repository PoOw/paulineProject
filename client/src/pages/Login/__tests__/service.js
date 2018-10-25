// @flow
import { handleSubmit, mapPropsToValues, validateForm } from '../service';

describe('Login form service', () => {
  describe('validateForm function', () => {
    it('Should return an error "Email required" in email field if email field is empty in values', () => {
      const values = {};
      const errors = validateForm(values);

      expect(errors.email).toBe('Email required');
      expect(errors.password).not.toBeDefined();
    });

    it('Should return an error "Invalid email" in email field if email field is not an email', () => {
      const values = {
        email: 'I am definitely not an email',
      };
      const errors = validateForm(values);

      expect(errors.email).toBe('Invalid email');
      expect(errors.password).not.toBeDefined();
    });

    it('Should return an empty object if the email is valid', () => {
      const values = {
        email: 'gandalf.leblanc@lacontee.co',
      };
      const errors = validateForm(values);

      expect(errors).toEqual({});
    });
  });

  describe('mapPropsToValues function', () => {
    it('Should return an object with empty fields for email and password fields', () => {
      const expectedValues = {
        email: '',
        password: '',
      };
      expect(mapPropsToValues()).toEqual(expectedValues);
    });
  });

  describe('handleSubmit function', () => {
    it('Should return a function that calls props.login function with the values we pass to it', () => {
      const values = {
        email: 'elrond@rivendel.fr',
        password: 'I wa$ there',
      };
      const props = {
        login: jest.fn(),
      };
      handleSubmit()(values, { props });
      expect(props.login).toHaveBeenCalledTimes(1);
      expect(props.login).toHaveBeenCalledWith(values);
    });
  });
});
