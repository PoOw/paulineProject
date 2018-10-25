// @flow
/* eslint-disable no-undef, flowtype/delimiter-dangle */
import type { Dispatch as ReduxDispatch } from 'redux';

declare type Dispatch<A> = (action: A) => ReduxDispatch<A>;

declare type User = {
  avatar_url?: string,
};

declare type State = {
  avatar: AvatarState,
  login: LoginState,
  runSaga?: any,
  asyncReducers?: any,
};

declare type Action = AvatarAction | UserAction;
