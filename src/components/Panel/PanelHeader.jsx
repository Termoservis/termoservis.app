import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    contrast: PropTypes.bool
};

const defaultProps = {
    contrast: false
};

const PanelHeader = ({ children, contrast, ...rest }) => (
    <div
        className={classnames(
            'card-header',
            contrast && 'card-header-contrast'
        )}
        {...rest}
    >
        {children}
    </div>
);

PanelHeader.propTypes = propTypes;
PanelHeader.defaultProps = defaultProps;

export default PanelHeader;
