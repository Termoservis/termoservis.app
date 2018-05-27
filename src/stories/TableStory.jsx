import React from 'react';

import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { checkA11y } from '@storybook/addon-a11y';

import Table from '../components/Table/Table';
import TableHeader from '../components/Table/TableHeader';
import TableColumn from '../components/Table/TableColumn';
import TableBody from '../components/Table/TableBody';
import TableRow from '../components/Table/TableRow';
import TableCell from '../components/Table/TableCell';

import Icon from '../components/Icon/Icon';
import Panel from '../components/Panel/Panel';
import PanelBody from '../components/Panel/PanelBody';
import PanelHeader from '../components/Panel/PanelHeader';

storiesOf('Table', module)
    .addDecorator(centered)
    .addDecorator(checkA11y)
    .add('Basic', () => (
        <Panel table>
            <PanelHeader>
                <span>Basic Table</span>
            </PanelHeader>
            <PanelBody>
                <Table hover>
                    <TableHeader>
                        <TableColumn>Name</TableColumn>
                        <TableColumn>Description</TableColumn>
                        <TableColumn>Date</TableColumn>
                        <TableColumn number>Number</TableColumn>
                        <TableColumn actions />
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>Name 1</TableCell>
                            <TableCell>Description 1</TableCell>
                            <TableCell>2018-05-27</TableCell>
                            <TableCell number>4475.5</TableCell>
                            <TableCell actions>
                                <Icon name="plus" />
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </PanelBody>
        </Panel>
    ));
