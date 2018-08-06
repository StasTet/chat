import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Form, Button } from 'reactstrap';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import isEmpty from 'lodash/isEmpty';

import { Field as CustomField } from '../Field';

class AddMessage extends Component {
    onSubmit = (value) => {
        const errors = {};

        if (!value.message) {
            errors.message = 'Message mustn\'t be empty';
        }

        if (value.message && value.message.length > 255) {
            errors.message = 'Message mustn\'t be longer than 255 characters';
        }
    
        if (!isEmpty(errors)) {
            throw new SubmissionError(errors);
        }
    
        this.props.addMessage(value.message);

        value.message = '';
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <Row className="add-message pt-3">
                <Col xs={12}>
                    <Form onSubmit={handleSubmit(this.onSubmit)} inline className="align-items-start">
                        <Col xs={12} md={10}>
                            <Field name="message" type="text" component={CustomField} className="w-100" />
                        </Col>

                        <Col xs={12} md={2}>
                            <Button type="submit" color="primary" className="btn-block">Send</Button>
                        </Col>
                        
                    </Form>
                </Col>
            </Row>
        );
    }
}

AddMessage.propTypes = {
    handleSubmit: PropTypes.func,
    addMessage: PropTypes.func,
};

export default reduxForm({ form: 'addMessage' })(AddMessage); 
