import React from 'react';

import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { checkA11y } from '@storybook/addon-a11y';
import Alert from '../components/Alert/Alert';

storiesOf('Alert', module)
    .addDecorator(centered)
    .addDecorator(checkA11y)
    .add('General', () => (
        <Alert color="success">
            <span>Success alert message!</span>
        </Alert>
    ))
    .add('Color Styles', () => (
        <div className="col-6 offset-3">
            <Alert color="success">
                <span>Success <b>default</b>!</span>
            </Alert>
            <Alert color="success" colorStyle="contrast">
                <span>Success <b>contrast</b>!</span>
            </Alert>
            <Alert color="success" colorStyle="iconBackground">
                <span>Success <b>iconBackground</b>!</span>
            </Alert>
            <Alert color="success" colorStyle="iconContrast">
                <span>Success <b>iconContrast</b>!</span>
            </Alert>
            <Alert color="success" colorStyle="icon">
                <span>Success <b>icon</b>!</span>
            </Alert>
        </div>
    ));
