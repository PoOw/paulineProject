// @flow
import { withFormik } from 'formik';
import InnerLoginForm from './Login.form';

import { validateForm, mapPropsToValues, handleSubmit } from './service';

const LoginFormContainer = withFormik({
  mapPropsToValues,
  validate: validateForm,
  handleSubmit,
})(InnerLoginForm);

export default LoginFormContainer;
