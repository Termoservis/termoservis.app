import React from 'react';

const FormGroup = ({ className, children, ...rest }) => (
    <div className={`form-group ${className}`} {...rest}>
        {children}
    </div>
);

export default FormGroup;
