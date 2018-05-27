import React from 'react';

import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { checkA11y } from '@storybook/addon-a11y';

import Button from '../components/Button/Button';

storiesOf('Button', module)
    .addDecorator(centered)
    .addDecorator(checkA11y)
    .add('colors', () => (
        <div>
            <Button>Default</Button>
            <Button color="secondary">Secondary</Button>
            <Button color="primary">Primary</Button>
            <Button color="danger">Danger</Button>
            <Button color="warning">Warning</Button>
            <Button color="success">Success</Button>
        </div>
    ))
    .add('sizes', () => (
        <div>
            <Button size="xs">Extra small</Button>
            <Button size="sm">Small</Button>
            <Button>Default</Button>
            <Button size="lg">Large</Button>
            <Button size="xl">Extra large</Button>
        </div>
    ));
