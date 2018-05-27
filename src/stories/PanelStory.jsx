import React from 'react';

import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { checkA11y } from '@storybook/addon-a11y';

import Panel from '../components/Panel/Panel';
import PanelBody from '../components/Panel/PanelBody';
import PanelHeader from '../components/Panel/PanelHeader';
import PanelHeaderSubtitle from '../components/Panel/PanelHeaderSubtitle';
import PanelTools from '../components/Panel/PanelTools';
import Icon from '../components/Icon/Icon';
import Button from '../components/Button/Button';

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
    ))
    .add('Tools', () => (
        <div className="col-4 offset-md-4">
            <Panel>
                <PanelHeader>
                    <span>Header Tools</span>
                    <PanelTools>
                        <Button size="lg">
                            <Icon name="account-add" noIcon />
                        </Button>
                    </PanelTools>
                    <PanelHeaderSubtitle>
                        Header Tools panel subtitle
                    </PanelHeaderSubtitle>
                </PanelHeader>
                <PanelBody>
                    <p>Quisque gravida aliquam diam at cursus, quisque laoreet ac lectus a rhoncusac tempus odio.</p>
                    <p>Aliquam posuere volutpat turpis, ut euimod diam pellentesque at. Sed sit amet nulla a dui dignisim euismod. Morbi luctus elementum dictum. Donec convallis mattis elit id varius. Quisque facilisis sapien quis mauris, erat condimentum.</p>
                </PanelBody>
            </Panel>
        </div>
    ));

