import { signInUser } from '../api/user';

export const ADD_USER = 'ADD_USER';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAIL = 'SIGN_IN_FAIL';
export const SIGN_OUT = 'SIGN_OUT';

export const loginSuccess = (payload) => ({
    type: SIGN_IN_SUCCESS,
    payload
});

export const loginFail = (payload) => ({
    type: SIGN_IN_FAIL,
    payload
});

export const signIn = (payload) => dispatch => signInUser(payload)
    .then(result => dispatch(loginSuccess(result.data)))
    .catch(error => dispatch(loginFail(error.data)));

export const signOut = () => ({
    type: SIGN_OUT
});
