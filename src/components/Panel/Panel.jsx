import React from 'react';

const Panel = ({ className, children, border, borderColor, contrast, ...rest }) => (
    <div className={`card ${border != null ? 'card-border' : ''} ${contrast != null ? 'card-contrast' : ''} ${borderColor != null ? 'card-border-color card-border-color-' + borderColor : ''} ${className}`} {...rest}>
        {children}
    </div>
);

export default Panel;