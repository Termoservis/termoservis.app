import auth0 from 'auth0-js';
import AppConfig from '../AppConfig';

/**
 * The auth service.
 */
export default class Auth {
    auth0 = new auth0.WebAuth({
        domain: AppConfig.Auth0Domain,
        clientID: AppConfig.Auth0ClientId,
        redirectUri: AppConfig.Auth0RedirectUrl,
        responseType: 'token id_token',
        scope: 'openid'
    });

    /**
     * Initiates the login.
     *
     * @returns {void}
     */
    login() {
        this.auth0.authorize();
    }
}
