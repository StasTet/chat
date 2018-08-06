import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export const Message = (props) => {
    const { username, message } = props;

    return (
        <p className="message">
             <span className="message__username">{username}: </span><span className="message__message"> {message} </span>
        </p>
    );
};

Message.propTypes = {
    message: PropTypes.string,
    username: PropTypes.string
};

export default Message; 
