import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Input from './Input';

const propTypes = {
    className: PropTypes.string,
    label: PropTypes.string.isRequired
};

const defaultProps = {
    className: undefined
};

const InputCheckbox = ({ className, label, ...rest }) => (
    <label className={classnames('custom-control custom-checkbox', className)}>
        <Input type="checkbox" className="custom-control-input" {...rest} />
        <span className="custom-control-label">{label}</span>
    </label>
);

InputCheckbox.propTypes = propTypes;
InputCheckbox.defaultProps = defaultProps;

export default InputCheckbox;
