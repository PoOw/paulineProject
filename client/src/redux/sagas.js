// @flow
import { all } from 'redux-saga/effects'; // eslint-disable-line
import type { Saga } from 'redux-saga';

import { sagas as avatarSagas } from 'redux/Avatar';
import { sagas as loginSagas } from 'redux/Login';

// single entry point to start all Sagas at once
export default function* rootSaga(): Saga<*> {
  // $FlowFixMe
  yield all([loginSagas(), avatarSagas()]);
}
