import React from 'react';

import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { checkA11y } from '@storybook/addon-a11y';

import Panel from '../components/Panel/Panel';
import PanelBody from '../components/Panel/PanelBody';
import PanelHeader from '../components/Panel/PanelHeader';
import ContentLoader from '../components/Loader/ContentLoader';

storiesOf('Loader', module)
    .addDecorator(centered)
    .addDecorator(checkA11y)
    .add('ContentLoader', () => (
        <div className="container-fluid">
            <div className="row">
                <div className="col-4 offset-md-2">
                    <ContentLoader isLoading>
                        <Panel>
                            <PanelHeader>
                                <span>Basic Panel - Loading</span>
                            </PanelHeader>
                            <PanelBody>
                                <p>Quisque gravida aliquam diam at cursus, quisque laoreet ac lectus a rhoncusac tempus odio.</p>
                                <p>Aliquam posuere volutpat turpis, ut euimod diam pellentesque at. Sed sit amet nulla a dui dignisim euismod. Morbi luctus elementum dictum. Donec convallis mattis elit id varius. Quisque facilisis sapien quis mauris, erat condimentum.</p>
                            </PanelBody>
                        </Panel>
                    </ContentLoader>
                </div>
                <div className="col-4">
                    <ContentLoader>
                        <Panel>
                            <PanelHeader>
                                <span>Basic Panel - Not Loading</span>
                            </PanelHeader>
                            <PanelBody>
                                <p>Quisque gravida aliquam diam at cursus, quisque laoreet ac lectus a rhoncusac tempus odio.</p>
                                <p>Aliquam posuere volutpat turpis, ut euimod diam pellentesque at. Sed sit amet nulla a dui dignisim euismod. Morbi luctus elementum dictum. Donec convallis mattis elit id varius. Quisque facilisis sapien quis mauris, erat condimentum.</p>
                            </PanelBody>
                        </Panel>
                    </ContentLoader>
                </div>
            </div>
        </div>
    ));
