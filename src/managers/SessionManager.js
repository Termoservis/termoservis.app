class SessionManager {
    static instance = null;

    token = null;
    isAuthenticated = true;

    authenticate(token) {
        this.token = token;
        this.isAuthenticated = true;
    }

    signout() {
        this.token = null;
        this.isAuthenticated = false;
    }
}

SessionManager.instance = new SessionManager();

export default SessionManager;
