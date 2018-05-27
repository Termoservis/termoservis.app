import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    noIcon: PropTypes.bool
};

const defaultProps = {
    className: undefined,
    noIcon: false
};

const Icon = ({
    className, name, noIcon, ...rest
}) => (
    <i
        className={classnames(
            !noIcon && 'icon',
            'mdi',
            `mdi-${name}`,
            className
        )}
        {...rest}
    />
);

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
