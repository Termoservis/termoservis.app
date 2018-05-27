import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    type: PropTypes.string,
    className: PropTypes.string
};

const defaultProps = {
    type: 'text',
    className: undefined
};

const Input = ({ type, className, ...rest }) => (
    <input
        type={type}
        className={`form-control ${className}`}
        {...rest}
    />
);

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
