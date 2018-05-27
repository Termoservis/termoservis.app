import React from 'react';
import { resolveColumnClassName } from './TableHelpers';

const TableCell = ({ children, ...rest }) => (
    <td className={resolveColumnClassName(rest)}>{children}</td>
);

export default TableCell;
