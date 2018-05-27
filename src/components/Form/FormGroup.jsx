import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ]).isRequired
};

const defaultProps = {
    className: null
};

const FormGroup = ({ className, children, ...rest }) => (
    <div className={`form-group ${className}`} {...rest}>
        {children}
    </div>
);

FormGroup.propTypes = propTypes;
FormGroup.defaultProps = defaultProps;

export default FormGroup;
