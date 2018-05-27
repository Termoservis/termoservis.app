import React from 'react';

import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { checkA11y } from '@storybook/addon-a11y';

import '../styles/App.scss';
import Tooltip from '../components/tooltip/Tooltip';
import Button from '../components/Button/Button';
import Panel from '../components/Panel/Panel';
import PanelBody from '../components/Panel/PanelBody';
import PanelHeader from '../components/Panel/PanelHeader';
import PanelHeaderSubtitle from '../components/Panel/PanelHeaderSubtitle';

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

storiesOf('Tooltip', module)
    .addDecorator(centered)
    .addDecorator(checkA11y)
    .add('over Icon', () => (
        <div>
            <div className="p-3">
                <Tooltip title="Top over icon" placement="top">
                    <i className="icon mdi mdi-chevron-up" style={{ fontSize: '2em' }} />
                </Tooltip>
            </div>
            <div className="p-3">
                <Tooltip title="Right over icon" placement="right">
                    <i className="icon mdi mdi-chevron-right" style={{ fontSize: '2em' }} />
                </Tooltip>
            </div>
            <div className="p-3">
                <Tooltip title="Bottom over icon" placement="bottom">
                    <i className="icon mdi mdi-chevron-down" style={{ fontSize: '2em' }} />
                </Tooltip>
            </div>
            <div className="p-3">
                <Tooltip title="Left over icon" placement="left">
                    <i className="icon mdi mdi-chevron-left" style={{ fontSize: '2em' }} />
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

storiesOf('Panel', module)
    .addDecorator(centered)
    .addDecorator(checkA11y)
    .add('Basic', () => (
        <div className="col-4 offset-md-4">
            <Panel>
                <PanelHeader>
                    <span>Basic Panel</span>
                </PanelHeader>
                <PanelBody>
                    <p>Quisque gravida aliquam diam at cursus, quisque laoreet ac lectus a rhoncusac tempus odio.</p>
                    <p>Aliquam posuere volutpat turpis, ut euimod diam pellentesque at. Sed sit amet nulla a dui dignisim euismod. Morbi luctus elementum dictum. Donec convallis mattis elit id varius. Quisque facilisis sapien quis mauris, erat condimentum.</p>
                </PanelBody>
            </Panel>
        </div>
    ))
    .add('Border Color', () => (
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 offset-1">
                    <div className="row">
                        <Panel borderColor="primary" className="col">
                            <PanelHeader>
                                <span>Border Color - Primary</span>
                            </PanelHeader>
                            <PanelBody>
                                <p>Quisque gravida aliquam diam at cursus, quisque laoreet ac lectus a rhoncusac tempus odio.</p>
                                <p>Aliquam posuere volutpat turpis, ut euimod diam pellentesque at. Sed sit amet nulla a dui dignisim euismod. Morbi luctus elementum dictum. Donec convallis mattis elit id varius. Quisque facilisis sapien quis mauris, erat condimentum.</p>
                            </PanelBody>
                        </Panel>
                        <Panel borderColor="danger" className="col offset-1">
                            <PanelHeader>
                                <span>Border Color - Danger</span>
                            </PanelHeader>
                            <PanelBody>
                                <p>Quisque gravida aliquam diam at cursus, quisque laoreet ac lectus a rhoncusac tempus odio.</p>
                                <p>Aliquam posuere volutpat turpis, ut euimod diam pellentesque at. Sed sit amet nulla a dui dignisim euismod. Morbi luctus elementum dictum. Donec convallis mattis elit id varius. Quisque facilisis sapien quis mauris, erat condimentum.</p>
                            </PanelBody>
                        </Panel>
                    </div>
                    <div className="row">
                        <Panel borderColor="warning" className="col">
                            <PanelHeader>
                                <span>Border Color - Warning</span>
                            </PanelHeader>
                            <PanelBody>
                                <p>Quisque gravida aliquam diam at cursus, quisque laoreet ac lectus a rhoncusac tempus odio.</p>
                                <p>Aliquam posuere volutpat turpis, ut euimod diam pellentesque at. Sed sit amet nulla a dui dignisim euismod. Morbi luctus elementum dictum. Donec convallis mattis elit id varius. Quisque facilisis sapien quis mauris, erat condimentum.</p>
                            </PanelBody>
                        </Panel>
                        <Panel borderColor="success" className="col offset-1">
                            <PanelHeader>
                                <span>Border Color - Success</span>
                            </PanelHeader>
                            <PanelBody>
                                <p>Quisque gravida aliquam diam at cursus, quisque laoreet ac lectus a rhoncusac tempus odio.</p>
                                <p>Aliquam posuere volutpat turpis, ut euimod diam pellentesque at. Sed sit amet nulla a dui dignisim euismod. Morbi luctus elementum dictum. Donec convallis mattis elit id varius. Quisque facilisis sapien quis mauris, erat condimentum.</p>
                            </PanelBody>
                        </Panel>
                    </div>
                    <div className="row">
                        <Panel borderColor="secondary" className="col">
                            <PanelHeader>
                                <span>Border Color - Secondary</span>
                            </PanelHeader>
                            <PanelBody>
                                <p>Quisque gravida aliquam diam at cursus, quisque laoreet ac lectus a rhoncusac tempus odio.</p>
                                <p>Aliquam posuere volutpat turpis, ut euimod diam pellentesque at. Sed sit amet nulla a dui dignisim euismod. Morbi luctus elementum dictum. Donec convallis mattis elit id varius. Quisque facilisis sapien quis mauris, erat condimentum.</p>
                            </PanelBody>
                        </Panel>
                        <Panel borderColor="dark" className="col offset-1">
                            <PanelHeader>
                                <span>Border Color - Dark</span>
                            </PanelHeader>
                            <PanelBody>
                                <p>Quisque gravida aliquam diam at cursus, quisque laoreet ac lectus a rhoncusac tempus odio.</p>
                                <p>Aliquam posuere volutpat turpis, ut euimod diam pellentesque at. Sed sit amet nulla a dui dignisim euismod. Morbi luctus elementum dictum. Donec convallis mattis elit id varius. Quisque facilisis sapien quis mauris, erat condimentum.</p>
                            </PanelBody>
                        </Panel>
                    </div>
                </div>
            </div>
        </div>
    ))
    .add('Contrast', () => (
        <div className="col-4 offset-md-4">
            <Panel border contrast>
                <PanelHeader contrast>
                    <span>Header Contrast</span>
                    <PanelHeaderSubtitle>
                        Header Contrast panel subtitle
                    </PanelHeaderSubtitle>
                </PanelHeader>
                <PanelBody>
                    <p>Quisque gravida aliquam diam at cursus, quisque laoreet ac lectus a rhoncusac tempus odio.</p>
                    <p>Aliquam posuere volutpat turpis, ut euimod diam pellentesque at. Sed sit amet nulla a dui dignisim euismod. Morbi luctus elementum dictum. Donec convallis mattis elit id varius. Quisque facilisis sapien quis mauris, erat condimentum.</p>
                </PanelBody>
            </Panel>
        </div>
    ));
