import auth0 from 'auth0-js';
import AppConfig from '../AppConfig';
import SessionManager from './SessionManager';

/**
 * The auth service.
 */
class Auth {
    static instance = null;

    auth0;

    constructor() {
        this.auth0 = new auth0.WebAuth({
            domain: AppConfig.Auth0Domain,
            clientID: AppConfig.Auth0ClientId,
            redirectUri: `${window.location.protocol}//${window.location.host}/${AppConfig.Auth0RedirectUrl}`,
            responseType: 'token id_token',
            scope: 'openid email profile'
        });
    }

    /**
     * Handles the authentication callback data.
     *
     * @returns {void}
     */
    handleAuthenticationAsync() {
        return new Promise((resolve, reject) => {
            this.auth0.parseHash((err, authResult) => {
                if (authResult && authResult.accessToken && authResult.idToken) {
                    SessionManager.instance.authenticate(authResult.idToken);
                    resolve();
                } else if (err) {
                    SessionManager.instance.signout();
                    reject(err);
                }
            });
        });
    }

    /**
     * Initiates the login.
     *
     * @returns {void}
     */
    login() {
        this.auth0.authorize();
    }
}

Auth.instance = new Auth();

export default Auth;
