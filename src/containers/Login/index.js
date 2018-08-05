import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button, Form } from 'reactstrap';
import { connect } from 'react-redux';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import isEmpty from 'lodash/isEmpty';
import { renderField } from '../../utils';

import { signIn } from '../../actions/login';

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = (dispatch) => ({
    signIn: (credentials) => dispatch(signIn(credentials))
});

class Login extends Component {
    onSubmit = (value) => {
        const errors = {};

        if (!value.username) {
            errors.username = 'Username mustn\'t be empty';
        }

        if (value.username && value.username.length > 32) {
            errors.username = 'Username mustn\'t be longer than 32 characters';
        }
    
        if (!isEmpty(errors)) {
            throw new SubmissionError(errors);
        }
    
        this.props.signIn(value);
    }

    render() {
        const { error, handleSubmit } = this.props;

        return (
            <div className="login-container">
                <Row>
                    <Col xs={12}>
                        <Form onSubmit={handleSubmit(this.onSubmit)}>
                            <Field name="username" type="text" component={renderField} label="Username" />
                            {error && <span>{error}</span>}
                            <Button type="submit" color="primary">Sign in</Button>
                        </Form>
                    </Col>
                </Row>
            </div>
        );
    }
}

Login.propTypes = {
    signIn: PropTypes.func.isRequired,
    error: PropTypes.string,
    handleSubmit: PropTypes.func
};
  
export default reduxForm({ form: 'login' })(connect(mapStateToProps, mapDispatchToProps)(Login));
