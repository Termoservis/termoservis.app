import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

const PasswordInput = ({ ...rest }) => (
    <Input type="password" {...rest} />
);

export default PasswordInput;
