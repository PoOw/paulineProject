// @flow
import { expectSaga } from 'redux-saga-test-plan';
import { call, takeEvery } from 'redux-saga/effects';
import { throwError } from 'redux-saga-test-plan/providers';
import { makeGetRequest } from 'services/networking/request';
import fetchUserSaga, { fetchUser } from '../sagas';
import { fetchUserSuccess, fetchUserError } from '../actions';
import { USER_FETCH_REQUEST, USER_FETCH_SUCCESS } from '../constant';

const fetchUserRequest = {
  type: USER_FETCH_REQUEST,
  payload: { username: 'tcheymol' },
};

const endpoint = '/users/tcheymol';
const githubUser = { avatar_url: 'https://google.com' };
const outputMock = { body: githubUser };

describe('[Saga] Avatar redux', () => {
  describe('fetchUser', () => {
    describe('when request is a success', () => {
      it('should call the success action when request is a success', async () => {
        return expectSaga(fetchUser, fetchUserRequest)
          .provide([[call(makeGetRequest, endpoint), outputMock]])
          .put(fetchUserSuccess(githubUser))
          .run();
      });
    });

    describe('when request fails', () => {
      it('should call the error action', async () => {
        const error = new Error();
        return expectSaga(fetchUser, fetchUserRequest)
          .provide([[call(makeGetRequest, endpoint), throwError(error)]])
          .put(fetchUserError(error))
          .not.put.actionType(USER_FETCH_SUCCESS)
          .run();
      });
    });
  });

  describe('fetchUserSaga', () => {
    it('should take every USER_FETCH_REQUEST actions', () => {
      const gen = fetchUserSaga();
      expect(gen.next().value).toEqual(takeEvery(USER_FETCH_REQUEST, fetchUser));
    });
  });
});
