// @flow
import { expectSaga } from 'redux-saga-test-plan';
import { put, takeEvery } from 'redux-saga/effects';

import { throwError } from 'redux-saga-test-plan/providers';
import * as matchers from 'redux-saga-test-plan/matchers';
import { login } from 'services/networking/request';
import loginUserSaga, { loginUser } from '../sagas';
import { loginUserSuccess, loginUserError } from '../actions';
import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from '../constant';

const loginUserRequest = {
  type: USER_LOGIN_REQUEST,
  payload: { email: 'bilbo@culdesac.gnd', password: 'm0ñPr3cieuX' },
};
const token = 'OX1dSSVRFX1BPU1QsQ0FOX1JFQURfTkV';
const endpoint = '/api/login_check';

describe('[Saga] Login redux', () => {
  describe('loginUser', () => {
    describe('when request is a success', () => {
      it('should call the success action when request is a success', async () => {
        return expectSaga(loginUser, loginUserRequest)
          .provide([[matchers.call.fn(login), token]])
          .put(loginUserSuccess(token))
          .run();
      });
    });

    describe('when request fails', () => {
      it('should call the error action', async () => {
        const error = new Error();
        return expectSaga(loginUser, loginUserRequest)
          .provide([[matchers.call.fn(login), throwError(error)]])
          .put(loginUserError(error))
          .not.put.actionType(USER_LOGIN_SUCCESS)
          .run();
      });
    });
  });

  describe('loginUserSaga', () => {
    it('should take every USER_FETCH_REQUEST actions', () => {
      const gen = loginUserSaga();
      expect(gen.next().value).toEqual(takeEvery(USER_LOGIN_REQUEST, loginUser));
    });
  });
});
