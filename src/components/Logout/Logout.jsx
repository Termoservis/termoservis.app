import React from 'react';
import { observer } from 'mobx-react';
import Auth from '../../managers/Auth';
import SessionManager from '../../managers/SessionManager';
import ContentLoader from '../Loader/ContentLoader';
import Panel from '../Panel/Panel';
import PanelHeader from '../Panel/PanelHeader';
import PanelHeaderSubtitle from '../Panel/PanelHeaderSubtitle';
import PanelBody from '../Panel/PanelBody';

@observer
class LogoutView extends React.Component {
    render() {
        return (
            <div className="be-wrapper be-login">
                <div className="be-content">
                    <div className="main-content container-fluid">
                        <div className="splash-container">
                            <ContentLoader isLoading>
                                <Panel borderColor="danger">
                                    <PanelHeader>
                                        <div className="h2 logo-img">
                                            <img src="/images/Termoservis.png" alt="Termoservis Logo" />
                                        </div>
                                        <PanelHeaderSubtitle>
                                            <span>Odjava u tijeku...</span>
                                        </PanelHeaderSubtitle>
                                    </PanelHeader>
                                    <PanelBody />
                                </Panel>
                            </ContentLoader>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        SessionManager.instance.signout();
        Auth.instance.logout();
        this.props.history.replace('/');
    }
}

export default LogoutView;
