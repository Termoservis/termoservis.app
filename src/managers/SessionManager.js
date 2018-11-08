class SessionManager {
    static instance = null;

    token = null;
    expiresAt = null;
    isAuthenticated = false;
    profile = null;

    authenticate(token, expiresAt) {
        this.token = token;
        this.expiresAt = expiresAt;
        this.isAuthenticated = true;
    }

    setProfile(profile) {
        this.profile = profile;
    }

    signout() {
        this.token = null;
        this.isAuthenticated = false;
    }
}

SessionManager.instance = new SessionManager();

export default SessionManager;
