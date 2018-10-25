// @flow

declare type AvatarState = {
  userAvatarUrl?: ?string,
  username?: ?string,
};

declare type UpdateUsernameAction = {
  type: 'Avatar/UPDATE_USERNAME',
  payload: { username: string },
};

declare type FetchUserRequestAction = {
  type: 'Avatar/USER_FETCH_REQUEST',
  payload: { username: string },
};

declare type FetchUserSuccessAction = {
  type: 'Avatar/USER_FETCH_SUCCESS',
  payload: { user: User },
};

declare type FetchUserErrorAction = {
  type: 'Avatar/USER_FETCH_ERROR',
  payload: { errorMessage: string },
};

declare type AvatarAction =
  | UpdateUsernameAction
  | FetchUserRequestAction
  | FetchUserSuccessAction
  | FetchUserErrorAction;
