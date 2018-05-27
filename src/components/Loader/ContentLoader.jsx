import React from 'react';
import classnames from 'classnames';

const ContentLoader = ({
    className, children, isLoading, ...rest
}) => (
    <div
        className={classnames(
            'be-loading',
            isLoading && 'be-loading-active',
            className
        )}
        {...rest}
    >
        {children}

        <div className="be-spinner">
            <svg width="40px" height="40px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                <circle fill="none" strokeWidth="4" strokeLinecap="round" cx="33" cy="33" r="30" className="circle" />
            </svg>
        </div>
    </div>
);

export default ContentLoader;
