import React from 'react';

const TableRow = ({ children, ...rest }) => (
    <tr {...rest}>
        {children}
    </tr>
);

export default TableRow;
