import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

// import './main.scss';

export const MessagesList = (props) => {
    const { messages } = props;

    return (
        <div className="messages-list">
            <Row>
                <Col xs={12}>
                    {
                        messages.map((message => {
                            return (
                                <p key={message.id}>
                                    <span>{message.username}</span>:
                                    <span> {message.message} </span>
                                </p>
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
