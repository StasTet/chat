import { createStore, applyMiddleware } from '../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './reducers';

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(
            thunk,
            logger
        )
    )
);

export default store;
