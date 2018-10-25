// @flow
import reducer from '../reducer';
import { USER_LOGIN_SUCCESS, USER_LOGIN_ERROR } from '../constant';

const token = 'OX1dSSVRFX1BPU1QsQ0FOX1JFQURfTkV';
const initialState = { token: null, loginError: null };

describe('Login reducer', () => {
  describe('Default case', () => {
    it('should return the inital state when passing no state', () => {
      // $FlowFixMe
      expect(reducer(undefined, { type: 'FAKE_TYPE' })).toEqual(initialState);
    });

    it('should return the inital state when passing an unknown action', () => {
      // $FlowFixMe
      expect(reducer(initialState, { type: 'FAKE_TYPE' })).toEqual(initialState);
    });

    it('should return the state we pass it when passing an unknown action', () => {
      const newState = { token, loginError: 'User not logged in' };
      // $FlowFixMe
      expect(reducer(newState, { type: 'FAKE_TYPE' })).toEqual(newState);
    });
  });

  describe('USER_LOGIN_SUCCESS case', () => {
    it('Should return an initial state with a token in the token field', () => {
      const action = {
        type: USER_LOGIN_SUCCESS,
        payload: { token },
      };
      const expectedState = { ...initialState, token };

      expect(reducer(initialState, action)).toEqual(expectedState);
    });
  });

  describe('USER_LOGIN_ERROR case', () => {
    it('Should return an initial state with an error in the loginError field', () => {
      const errorMessage = 'User not logged in';
      const action = {
        type: USER_LOGIN_ERROR,
        payload: { errorMessage },
      };
      const expectedState = { ...initialState, loginError: errorMessage };

      expect(reducer(initialState, action)).toEqual(expectedState);
    });
  });
});
