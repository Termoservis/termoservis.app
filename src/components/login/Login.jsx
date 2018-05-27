import React from 'react';
import Button from '../Button/Button';
import FormGroup from '../Form/FormGroup';
import PasswordInput from '../Form/PasswordInput';
import Input from '../Form/Input';
import Form from '../Form/Form';
import Panel from "../Panel/Panel";
import PanelBody from "../Panel/PanelBody";
import PanelHeader from "../Panel/PanelHeader";
import PanelHeaderSubtitle from "../Panel/PanelHeaderSubtitle";

/**
 * The login component.
 * 
 * @returns {React.ReactNode} Returns the react noce.
 */
const Login = () => (
    <div className="be-wrapper be-login">
        <div className="be-content">
            <div className="main-content container-fluid">
                <div className="splash-container">
                    <Panel borderColor="danger">
                        <PanelHeader>
                            <div className="h2 logo-img">TERMOSERVIS</div>
                            <PanelHeaderSubtitle>
                                Molimo unesite vaše pristupne podatke.
                            </PanelHeaderSubtitle>
                        </PanelHeader>
                        <PanelBody>
                            <Form>
                                <FormGroup>
                                    <Input 
                                        id="username" 
                                        placeholder="Korisničko ime ili email"
                                        autoComplete="off" />
                                </FormGroup>
                                <FormGroup>
                                    <PasswordInput id="password" placeholder="Zaporka" />
                                </FormGroup>
                                <FormGroup className="row login-tools">
                                    <div className="col-6 login-remember">
                                        <label className="custom-control custom-checkbox">
                                            <input
                                                type="checkbox"
                                                className="custom-control-input"
                                            />
                                            <span className="custom-control-label">
                                                    Zapamti me
                                            </span>
                                        </label>
                                    </div>
                                </FormGroup>
                                <FormGroup className="login-submit">
                                    <Button size="xl" color="primary">Prijava</Button>
                                </FormGroup>
                            </Form>
                        </PanelBody>
                    </Panel>
                </div>
            </div>
        </div>
    </div>
);

export default Login;
