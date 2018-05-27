import React from 'react';

import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { checkA11y } from '@storybook/addon-a11y';

import Tooltip from '../components/Tooltip/Tooltip';

import Icon from '../components/Icon/Icon';
import Button from '../components/Button/Button';


storiesOf('Tooltip', module)
    .addDecorator(centered)
    .addDecorator(checkA11y)
    .add('over Icon', () => (
        <div>
            <div className="p-3">
                <Tooltip title="Top over icon" placement="top">
                    <Icon name="chevron-up" style={{ fontSize: '2em' }} />
                </Tooltip>
            </div>
            <div className="p-3">
                <Tooltip title="Right over icon" placement="right">
                    <Icon name="chevron-right" style={{ fontSize: '2em' }} />
                </Tooltip>
            </div>
            <div className="p-3">
                <Tooltip title="Bottom over icon" placement="bottom">
                    <Icon name="chevron-down" style={{ fontSize: '2em' }} />
                </Tooltip>
            </div>
            <div className="p-3">
                <Tooltip title="Left over icon" placement="left">
                    <Icon name="chevron-left" style={{ fontSize: '2em' }} />
                </Tooltip>
            </div>
        </div>
    ))
    .add('over Button', () => (
        <div>
            <div className="p-3">
                <Tooltip title="Top over icon" placement="top">
                    <Button>Top</Button>
                </Tooltip>
            </div>
            <div className="p-3">
                <Tooltip title="Right over icon" placement="right">
                    <Button>Right</Button>
                </Tooltip>
            </div>
            <div className="p-3">
                <Tooltip title="Bottom over icon" placement="bottom">
                    <Button>Bottom</Button>
                </Tooltip>
            </div>
            <div className="p-3">
                <Tooltip title="Left over icon" placement="left">
                    <Button>Left</Button>
                </Tooltip>
            </div>
        </div>
    ));
