import axios from 'axios';
import { mock } from '../utils'; 

import { API_USER } from '../constants/routs';

export const signInUser = (payload) => {
    mock.onPost(API_USER, { params: payload }).reply(200, { username: payload.username });

    return axios.post(API_USER, { params : payload });
};
