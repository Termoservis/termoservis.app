import React from 'react';
import { Link } from 'react-router-dom';
import { resolveColumnClassName } from './TableHelpers';

const TableCell = ({ to, children, ...rest }) => (
    <td className={resolveColumnClassName({ to, ...rest })}>
        {to
            ? (
                <Link to={to}>{children}</Link>
            )
            : children}
    </td>
);

export default TableCell;
