import { ADD_MESSAGE_FAIL, ADD_MESSAGE_SUCCESS, ADD_MESSAGE } from '../actions/messages';

const initialState = {
    messages: [],
    error: null
};

let initialId = 0;

const messages = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE_SUCCESS:
            return {
                ...state,
                messages: state.messages.concat({
                    id: initialId++,
                    username: action.payload.username,
                    message: action.payload.message
                })
            };

        case ADD_MESSAGE_FAIL:
            return {
                ...state,
                error: 'Server error'
            };

        case ADD_MESSAGE:
        default:
            return state;
    }
};

export default messages;
