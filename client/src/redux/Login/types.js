// @flow

declare type LoginState = {
  token?: ?string,
  loginError?: ?string,
};

declare type LoginUserRequestAction = {
  type: 'Login/USER_LOGIN_REQUEST',
  payload: { email: string, password: string },
};

declare type LoginUserSuccessAction = {
  type: 'Login/USER_LOGIN_SUCCESS',
  payload: { token: string },
};

declare type LoginUserErrorAction = {
  type: 'Login/USER_LOGIN_ERROR',
  payload: { errorMessage: string },
};

declare type UserAction = LoginUserRequestAction | LoginUserSuccessAction | LoginUserErrorAction;
