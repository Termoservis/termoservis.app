import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

const PanelTools = ({ children, ...rest }) => (
    <div className="tools" {...rest}>
        {children}
    </div>
);

PanelTools.propTypes = propTypes;

export default PanelTools;
