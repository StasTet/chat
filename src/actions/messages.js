import { sendMessage } from '../api/message';

export const ADD_MESSAGE = 'ADD_MESSAGE';
export const ADD_MESSAGE_SUCCESS = 'ADD_MESSAGE_SUCCESS';
export const ADD_MESSAGE_FAIL = 'ADD_MESSAGE_FAIL';

export const addMessageSuccess = (payload) => ({
    type: ADD_MESSAGE_SUCCESS,
    payload
});

export const addMessageFail = (payload) => ({
    type: ADD_MESSAGE_FAIL,
    payload
});

export const addMessage = (payload) => dispatch => sendMessage(payload)
    .then(result => dispatch(addMessageSuccess(result.data)))
    .catch(error => dispatch(addMessageFail(error.data)));

export const addMessageRequest = (payload) => ({
    type: ADD_MESSAGE,
    payload
});
