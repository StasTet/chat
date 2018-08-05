import { SIGN_IN_FAIL, SIGN_IN_SUCCESS, SIGN_OUT } from '../actions/login';
import { SET_USER } from '../actions/user';

const initialState = {
    user: null,
    isLogin: false,
    error: null
};

const user = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN_SUCCESS:
            return {
                ...state,
                user: action.payload.username,
                isLogin: true
            };

        case SIGN_IN_FAIL:
            return {
                ...state,
                error: 'Server error'
            };

        case SET_USER:
            return {
                ...state,
                user: action.payload,
                isLogin: true
            };

        case SIGN_OUT:
        default:
            return state;
    }
};

export default user;
