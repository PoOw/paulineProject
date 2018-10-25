// @flow
import { connect } from 'react-redux';

import { getLoginError } from 'redux/Login';
import { loginUserRequest } from 'redux/Login/actions';
import LoginFormContainer from './Login';
import { type StateProps, type DispatchProps, type FormValues } from './service';

const mapStateToProps = (state: State): StateProps => ({
  loginError: getLoginError(state),
});

const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  login: (values: FormValues) => dispatch(loginUserRequest(values)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginFormContainer);
