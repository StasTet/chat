import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button, Alert } from 'reactstrap';
import { connect } from 'react-redux';
import get from 'lodash/get';

import MessagesList from '../../components/MessagesList';
import AddMessage from '../../components/AddMessage';
import { addMessageRequest } from '../../actions/messages';
import { signOut } from '../../actions/login';
import { LOGIN } from '../../constants/routs';
import { SERVER_ERROR } from '../../constants/locale';

import './style.scss';

const mapStateToProps = ({ user, messages}) => ({ user, messages });

const mapDispatchToProps = (dispatch) => ({
    addMessage: (message) => dispatch(addMessageRequest(message)),
    signOut: () => dispatch(signOut())
});

class Chat extends Component {
    handleLogout = () => {
        this.props.signOut();
        this.props.history.push(LOGIN);
        sessionStorage.removeItem('user');
    }
  
    render() {
        const { addMessage, user, messages } = this.props;
        const error = (get(user, 'error', null) || get(messages, 'error', null)) ? SERVER_ERROR : null;

        return (
            <div className="container chat-container">
                <Row>
                    <Col xs={12}>
                        <Button onClick={this.handleLogout}>
                            Sign out
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                    {error && <Alert color="danger">{error}</Alert>}
                    </Col>
                </Row>
                <Row className="chat-container__message-list">
                    <Col xs={12}>
                        <MessagesList messages={messages.messages}/>
                    </Col>
                </Row>
                <Row className="chat-container__add-message">
                    <Col xs={12}>
                        <AddMessage addMessage={(message) => addMessage({username: user.user, message})} />
                    </Col>
                </Row>
            </div>
        );
    }
}

Chat.propTypes = {
    user: PropTypes.object,
    addMessage: PropTypes.func,
    messages: PropTypes.object,
    signOut: PropTypes.func,
    history: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat); 
