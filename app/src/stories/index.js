import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import centered from "@storybook/addon-centered";
import { checkA11y } from '@storybook/addon-a11y';

import { Button, Welcome } from "@storybook/react/demo";

import "../styles/App.scss";

storiesOf("Welcome", module).add("to Storybook", () => (
    <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
    .addDecorator(centered)
    .addDecorator(checkA11y)
    .add("with text", () => (
        <div class="btn btn-primary">with text</div>
    ));
