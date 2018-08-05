import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Form, Button } from 'reactstrap';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import isEmpty from 'lodash/isEmpty';

import { renderField } from '../../utils';

// import './main.scss';

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
        const { error, handleSubmit } = this.props;

        return (
            <div className="add-message">
               <Form onSubmit={handleSubmit(this.onSubmit)} inline>
                    <Field name="message" type="text" component={renderField} />
                    <Button type="submit" color="primary">Send</Button>
                    {error && <span>{error}</span>}
                </Form>
            </div>
        );
    }
}

AddMessage.defaultProps  = {
};

AddMessage.propTypes = {
    error: PropTypes.string,
    handleSubmit: PropTypes.func,
    addMessage: PropTypes.func,
};

export default reduxForm({ form: 'addMessage' })(AddMessage); 
