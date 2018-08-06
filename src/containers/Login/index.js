import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button, Form } from 'reactstrap';
import { connect } from 'react-redux';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import isEmpty from 'lodash/isEmpty';

import { Field as CustomField } from '../../components/Field';
import { signIn } from '../../actions/login';

import './style.scss';

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
        const { handleSubmit } = this.props;

        return (
            <div className="container login-container">
                <Row>
                    <Col xs={12}>
                        <Form onSubmit={handleSubmit(this.onSubmit)} className="login-container__form">
                            <Field name="username" type="text" component={CustomField} label="Username" />
                            <Button type="submit" color="primary" className="login-container__form__btn btn-block">Sign-in</Button>
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
