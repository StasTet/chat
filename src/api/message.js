import axios from 'axios';
import { mock } from '../utils'; 

import { API_MESSAGES } from '../constants/routs';

export const sendMessage = (payload) => {
    mock.onPost(API_MESSAGES, { params: payload }).reply(200, { username: payload.username, message: payload.message });

    return axios.post(API_MESSAGES, { params : payload });
};
