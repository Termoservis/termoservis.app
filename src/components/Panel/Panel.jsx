import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
    border: PropTypes.bool,
    contrast: PropTypes.bool,
    borderColor: PropTypes.oneOf(['secondary', 'primary', 'danger', 'warning', 'success', 'dark']),
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ]).isRequired
};

const defaultProps = {
    border: false,
    contrast: false,
    borderColor: null,
    className: null
};

const Panel = ({
    className, children, border, borderColor, contrast, ...rest
}) => (
    <div
        className={classnames(
            'card',
            border && 'card-border',
            contrast && 'card-contrast',
            borderColor && `card-border-color card-border-color-${borderColor}`,
            className
        )}
        {...rest}
    >
        {children}
    </div>
);

Panel.propTypes = propTypes;
Panel.defaultProps = defaultProps;

export default Panel;
