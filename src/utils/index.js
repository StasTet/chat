import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label } from 'reactstrap';

export const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <FormGroup>
        <Label>{label}</Label>
        <div>
            <input {...input} type={type} />
            {touched && error && <span>{error}</span>}
        </div>
    </FormGroup>
);

renderField.propTypes = {
    input: PropTypes.object,
    label: PropTypes.string,
    type: PropTypes.string,
    meta: PropTypes.shape({
        touched: PropTypes.bool,
        error: PropTypes.string,
    })
};
