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

const PanelBody = ({ children }) => (
    <div className="card-body">
        {children}
    </div>
);

PanelBody.propTypes = propTypes;

export default PanelBody;
