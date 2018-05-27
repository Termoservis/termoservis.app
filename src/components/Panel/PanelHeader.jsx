import React from 'react';

const Panel = ({ children, contrast }) => (
    <div className={`card-header ${contrast != null ? 'card-header-contrast' : ''}`}>
        {children}
    </div>
);

export default Panel;