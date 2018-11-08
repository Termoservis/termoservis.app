import { action, computed, observable } from 'mobx';
import Auth from '../../managers/Auth';
import SessionManager from '../../managers/SessionManager';

/**
 * The login view model.
 *
 * @class LoginViewModel
 */
class LoginViewModel {
    @observable isLoading;
    @observable isError;
    @observable errorMessage;

    location;
    history;

    /**
     * Gets the login command can execute flag.
     *
     * @returns {bool} Returns true if login command can execute; false otherwise.
     * @readonly
     * @memberof LoginViewModel
     */
    @computed get loginCommandCanExecute() {
        return !this.isLoading;
    }

    @action.bound
    setRoute(location, history) {
        this.location = location;
        this.history = history;
    }

    @action.bound
    async checkAuthCallback() {
        if (/access_token|id_token|error/.test(this.location.hash)) {
            try {
                this.isLoading = true;
                await Auth.instance.handleAuthenticationAsync();
                const profile = await Auth.instance.getUserProfileAsync();
                SessionManager.instance.setProfile(profile);
                this.history.replace('/');
            } catch (err) {
                this.isError = true;
                console.error('Auth error: ', err);
                this.errorMessage = 'Pogreška prilikom prijave. Pokušajte ponovo.';
                this.history.replace('/login');
            } finally {
                this.isLoading = false;
            }
        }
    }

    @action.bound
    async loginCommandExecute(e) {
        if (!this.loginCommandCanExecute) return;
        if (e != null) e.preventDefault();

        this.isError = false;
        this.isLoading = true;
        Auth.instance.login();
        this.checkAuthCallback();
        this.isLoading = false;
    }
}

export default LoginViewModel;
