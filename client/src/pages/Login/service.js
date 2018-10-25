// @flow
export type FormValues = {
  email?: string,
  password?: string,
};

export type StateProps = {
  loginError?: ?string,
};

export type DispatchProps = {
  login: (values: FormValues) => Dispatch<LoginUserRequestAction>,
};

type Props = StateProps & DispatchProps;

export const validateForm = (values: FormValues): FormValues => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email';
  }
  return errors;
};

export const mapPropsToValues = (): FormValues =>
  ({
    email: '',
    password: '',
  }: FormValues);

export const handleSubmit = () => (values: FormValues, { props }: { props: Props }): void => {
  props.login(values);
};
