import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, FormFeedback, Input } from 'reactstrap';

export const renderField = ({ input, label, type, meta: { touched, error }, className }) => (
    <FormGroup>
        <Label>{label}</Label>
        <Input {...input} type={type} className={`${className}${ touched && error ? ' is-invalid' : ''  }`} />
        {touched && error && <FormFeedback className="error">{error}</FormFeedback>}
    </FormGroup>
);

renderField.propTypes = {
    input: PropTypes.object,
    label: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
    meta: PropTypes.shape({
        touched: PropTypes.bool,
        error: PropTypes.string,
    })
};
