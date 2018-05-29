import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import Button from '../Button/Button';
import FormGroup from '../Form/FormGroup';
import PasswordInput from '../Form/PasswordInput';
import Input from '../Form/Input';
import Form from '../Form/Form';
import Panel from '../Panel/Panel';
import PanelBody from '../Panel/PanelBody';
import PanelHeader from '../Panel/PanelHeader';
import PanelHeaderSubtitle from '../Panel/PanelHeaderSubtitle';
import InputCheckbox from '../Form/InputCheckbox';
import ContentLoader from '../Loader/ContentLoader';
import Alert from '../Alert/Alert';

const propTypes = {
    isLoading: PropTypes.bool,
    userName: PropTypes.any,
    password: PropTypes.any,
    setUserName: PropTypes.func.isRequired,
    setPassword: PropTypes.func.isRequired,
    loginCommandCanExecute: PropTypes.bool.isRequired,
    loginCommandExecute: PropTypes.func.isRequired,
    isError: PropTypes.bool,
    errorMessage: PropTypes.string
};

const defaultProps = {
    isLoading: false,
    userName: '',
    password: '',
    isError: false,
    errorMessage: ''
};

/**
 * The login component.
 *
 * @returns {React.ReactNode} Returns the react noce.
 */
const Login = ({
    isLoading, userName, password, setUserName, setPassword, loginCommandCanExecute, loginCommandExecute, isError, errorMessage
}) => (
    <div className="be-wrapper be-login">
        <div className="be-content">
            <div className="main-content container-fluid">
                <div className="splash-container">
                    <ContentLoader isLoading={isLoading}>
                        <Panel borderColor="danger">
                            <PanelHeader>
                                <div className="h2 logo-img">TERMOSERVIS</div>
                                <PanelHeaderSubtitle>
                                    <span>Molimo unesite vaše pristupne podatke.</span>
                                </PanelHeaderSubtitle>
                            </PanelHeader>
                            <PanelBody>
                                <Form>
                                    <FormGroup>
                                        <Input
                                            id="username"
                                            placeholder="Korisničko ime ili email"
                                            autoComplete="off"
                                            value={userName}
                                            onChange={e => setUserName && setUserName(e, e.target.value)}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <PasswordInput
                                            id="password"
                                            placeholder="Zaporka"
                                            value={password}
                                            onChange={e => setPassword && setPassword(e, e.target.value)}
                                        />
                                    </FormGroup>
                                    <FormGroup className="row login-tools">
                                        <div className="col-6 login-remember">
                                            <InputCheckbox
                                                label="Zapamti me"
                                            />
                                        </div>
                                    </FormGroup>

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
        this.props.loginViewModel.location = this.props.location;
        this.props.loginViewModel.history = this.props.history;
        const {
            userName,
            password,
            setUserName,
            setPassword,
            loginCommandCanExecute,
            loginCommandExecute,
            isLoading,
            isError,
            errorMessage
        } = this.props.loginViewModel;

        return (
            <Login
                userName={userName}
                password={password}
                setUserName={setUserName}
                setPassword={setPassword}
                loginCommandCanExecute={loginCommandCanExecute}
                loginCommandExecute={loginCommandExecute}
                isLoading={isLoading}
                isError={isError}
                errorMessage={errorMessage}
            />
        );
    }
}

export default LoginView;
