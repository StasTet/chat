import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducers';
import { handleNewMessage } from './sagas';
import setupSocket from './sockets';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(
            thunk,
            sagaMiddleware,
            logger
        )
    )
);

const socket = setupSocket(store.dispatch);

sagaMiddleware.run(handleNewMessage, { socket });

export default store;
