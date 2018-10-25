// @flow
export const getUserToken = (store: State): ?string => store.login.token;
export const getLoginError = (store: State) => store.login.loginError;
