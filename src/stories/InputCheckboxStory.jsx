import React from 'react';

import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { checkA11y } from '@storybook/addon-a11y';

import InputCheckbox from '../components/Form/InputCheckbox';

import Form from '../components/Form/Form';
import FormGroup from '../components/Form/FormGroup';


storiesOf('InputCheckbox', module)
    .addDecorator(centered)
    .addDecorator(checkA11y)
    .add('General', () => (
        <Form>
            <FormGroup>
                <InputCheckbox label="General checkbox" />
            </FormGroup>
        </Form>
    ));
