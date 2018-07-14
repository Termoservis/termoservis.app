import { action, computed, observable } from 'mobx';
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
    @observable userName;
    @observable password;

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
        return (
            this.userName != null &&
            typeof this.userName === 'string' &&
            this.userName.length > 0 &&
            this.password != null &&
            typeof this.password === 'string' &&
            this.password.length > 0
        );
    }

    @action.bound
    setUserName(e, value) {
        this.isError = false;
        this.userName = value;
        if (e != null) e.preventDefault();
    }

    @action.bound
    setPassword(e, value) {
        this.isError = false;
        this.password = value;
        if (e != null) e.preventDefault();
    }

    @action.bound
    async loginCommandExecute(e) {
        if (!this.loginCommandCanExecute) return;
        if (e != null) e.preventDefault();

        this.isError = false;
        this.isLoading = true;

        try {
            SessionManager.instance.authenticate('test');
            this.history.push('/');
        } catch (error) {
            this.isError = true;
            this.errorMessage = 'Server nije odgovorio na vrijeme. Pokušajte ponovo.';
        }

        this.isLoading = false;
    }
}
