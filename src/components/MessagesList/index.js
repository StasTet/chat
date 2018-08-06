import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

import { Message } from '../Message';

import './style.scss';

export const MessagesList = (props) => {
    const { messages } = props;

    return (
        <div className="message-list">
            <Row>
                <Col xs={12}>
                    {
                        messages.map((message => {
                            return (
                                <Message
                                    key={message.id}
                                    username={message.username}
                                    message={message.message}
                                />
                            );
                        }))
                    }
                </Col>
            </Row>
        </div>
    );
};

MessagesList.defaultProps  = {
    messages: []
};

MessagesList.propTypes = {
    messages: PropTypes.array
};

export default MessagesList; 
