import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    color: PropTypes.oneOf(['secondary', 'primary', 'danger', 'warning', 'success']),
    size: PropTypes.oneOf(['xs', 'sm', 'lg', 'xl']),
    children: PropTypes.node.isRequired
};

const defaultProps = {
    color: 'secondary',
    size: null
};

const Button = ({
    children, color, size, ...rest
}) => (
    <button className={`btn btn-space btn-${color} ${size != null ? 'btn-' + size : ''}`} {...rest}>
        {children}
    </button>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
