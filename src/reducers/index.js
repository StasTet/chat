import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import user from './user';
import messages from './messages';

export default combineReducers({
    user,
    messages,
    form: formReducer
});
