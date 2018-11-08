class SessionManager {
    static instance = null;

    token = null;
    auth0Token = null;
    expiresAt = null;
    isAuthenticated = false;

    authenticate(token, auth0Token, expiresAt) {
        this.token = token;
        this.auth0Token = auth0Token;
        this.expiresAt = expiresAt;
        this.isAuthenticated = true;
    }

    signout() {
        this.token = null;
        this.isAuthenticated = false;
    }
}

SessionManager.instance = new SessionManager();

export default SessionManager;
