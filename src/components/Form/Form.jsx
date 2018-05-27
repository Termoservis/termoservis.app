import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element
    ]).isRequired
};

const Form = ({ children, ...rest }) => (
    <form {...rest}>
        {children}
    </form>
);

Form.propTypes = propTypes;

export default Form;
