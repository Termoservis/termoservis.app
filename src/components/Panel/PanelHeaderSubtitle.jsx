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

const PanelHeaderSubtitle = ({ children, ...rest }) => (
    <div className="card-subtitle" {...rest}>
        {children}
    </div>
);

PanelHeaderSubtitle.propTypes = propTypes;

export default PanelHeaderSubtitle;
