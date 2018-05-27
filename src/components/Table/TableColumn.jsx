import React from 'react';
import { resolveColumnClassName } from './TableHelpers';

const TableColumn = ({
    children, width, ...rest
}) => (
    <th className={resolveColumnClassName(rest)} style={{ width }}>
        {children}
    </th>
);

export default TableColumn;
