import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import Button from '../Button/Button';
import FormGroup from '../Form/FormGroup';
import Form from '../Form/Form';
import Panel from '../Panel/Panel';
import PanelBody from '../Panel/PanelBody';
import PanelHeader from '../Panel/PanelHeader';
import PanelHeaderSubtitle from '../Panel/PanelHeaderSubtitle';
import ContentLoader from '../Loader/ContentLoader';
import Alert from '../Alert/Alert';

const propTypes = {
    isLoading: PropTypes.bool,
    loginCommandCanExecute: PropTypes.bool.isRequired,
    loginCommandExecute: PropTypes.func.isRequired,
    isError: PropTypes.bool,
    errorMessage: PropTypes.string
};

const defaultProps = {
    isLoading: false,
    isError: false,
    errorMessage: ''
};

/**
 * The login component.
 *
 * @returns {React.ReactNode} Returns the react noce.
 */
const Login = ({
    isLoading, loginCommandCanExecute, loginCommandExecute, isError, errorMessage
}) => (
    <div className="be-wrapper be-login">
        <div className="be-content">
            <div className="main-content container-fluid">
                <div className="splash-container">
                    <ContentLoader isLoading={isLoading}>
                        <Panel borderColor="danger">
                            <PanelHeader>
                                <div className="h2 logo-img">
                                    <img src="/images/Termoservis.png" alt="Termoservis Logo" />
                                </div>
                                <PanelHeaderSubtitle>
                                    <span>Za pristup portalu izvršite prijavu.</span>
                                </PanelHeaderSubtitle>
                            </PanelHeader>
                            <PanelBody>
                                <Form>
                                    {isError ?
                                        <Alert color="danger" colorStyle="iconContrast" isDismissible={false}>
                                            <strong>Prijava</strong>
                                            <p>{errorMessage}</p>
                                        </Alert>
                                        : null}

                                    <FormGroup className="login-submit">
                                        <Button
                                            size="xl"
                                            color="primary"
                                            disabled={!loginCommandCanExecute}
                                            onClick={loginCommandExecute}
                                        >Prijava
                                        </Button>
                                    </FormGroup>
                                </Form>
                            </PanelBody>
                        </Panel>
                    </ContentLoader>
                </div>
            </div>
        </div>
    </div>
);

Login.propTypes = propTypes;
Login.defaultProps = defaultProps;

@inject('loginViewModel')
@observer
class LoginView extends React.Component {
    render() {
        const {
            loginCommandCanExecute,
            loginCommandExecute,
            isLoading,
            isError,
            errorMessage,
            setRoute
        } = this.props.loginViewModel;

        setRoute(this.props.location, this.props.history);

        return (
            <Login
                loginCommandCanExecute={loginCommandCanExecute}
                loginCommandExecute={loginCommandExecute}
                isLoading={isLoading}
                isError={isError}
                errorMessage={errorMessage}
            />
        );
    }

    componentDidMount() {
        this.props.loginViewModel.checkAuthCallback();
    }
}

export default LoginView;
