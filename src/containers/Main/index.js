import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button } from 'reactstrap';
import { connect } from 'react-redux';
import MessagesList from '../../components/MessagesList';
import AddMessage from '../../components/AddMessage';

import { addMessage } from '../../actions/messages';
import { signOut } from '../../actions/login';
import { LOGIN } from '../../constants/routs';

import './main.scss';

const mapStateToProps = ({ user, messages}) => ({ user, messages });

const mapDispatchToProps = (dispatch) => ({
    addMessage: (message) => dispatch(addMessage(message)),
    signOut: () => dispatch(signOut())
});

class Main extends Component {
    handleLogout = () => {
        this.props.signOut();
        this.props.history.push(LOGIN);
        sessionStorage.removeItem('user');
    }

    render() {
        const { addMessage, user, messages } = this.props;

        return (
            <div className="main-container">
                <Row>
                    <Col xs={12}>
                        <Button onClick={this.handleLogout}>
                            Sign out
                        </Button>
                    </Col>
                </Row>
                <Row className="main-container__message-list">
                    <Col xs={12}>
                        <MessagesList messages={messages.messages}/>
                    </Col>
                </Row>
                <Row className="main-container__add-message">
                    <Col xs={12}>
                        <AddMessage addMessage={(message) => addMessage({username: user.user, message})}/>
                    </Col>
                </Row>
            </div>
        );
    }
}

Main.defaultProps  = {
};

Main.propTypes = {
    user: PropTypes.object,
    addMessage: PropTypes.func,
    messages: PropTypes.object,
    signOut: PropTypes.func,
    history: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(Main); 
