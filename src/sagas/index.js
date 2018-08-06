import { takeEvery } from 'redux-saga/effects';
import { ADD_MESSAGE } from '../actions/messages';

export const handleNewMessage = function* handleNewMessage(params) {
    yield takeEvery(ADD_MESSAGE, (action) => {
        params.socket.send(JSON.stringify(action));
    });
};
