import React from 'react';
import classnames from 'classnames';

const Table = ({ children, hover, ...rest }) => (
    <table
        className={classnames(
            'table',
            hover && 'table-hover'
        )}
        {...rest}
    >
        {children}
    </table>
);

export default Table;
