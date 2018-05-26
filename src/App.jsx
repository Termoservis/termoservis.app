import React from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const BasicExample = () => (
    <Router>
        <div>
            {/* <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/topics">Topics</Link>
                </li>
            </ul>

            <hr /> */}

            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
        </div>
    </Router>
);

const Login = () => (
    <div className="be-splash-screen">
        <div className="be-wrapper be-login">
            <div className="be-content">
                <div className="main-content container-fluid">
                    <div className="splash-container">
                        <div className="card card-border-color card-border-color-danger">
                            <div className="card-header">
                                <div className="h2 logo-img">TERMOSERVIS</div>
                                <span className="splash-description">
                                    Molimo unesite vaše pristupne podatke.
                                </span>
                            </div>
                            <div className="card-body">
                                <form action="index.html" method="get">
                                    <div className="form-group">
                                        <input
                                            id="username"
                                            type="text"
                                            placeholder="Korisničko ime ili email"
                                            autoComplete="off"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            id="password"
                                            type="password"
                                            placeholder="Zaporka"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-group row login-tools">
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
                                    </div>
                                    <div className="form-group login-submit">
                                        <button
                                            data-dismiss="modal"
                                            type="submit"
                                            className="btn btn-primary btn-xl"
                                        >
                                            Prijava
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);

const About = () => (
    <div>
        <h2>About</h2>
    </div>
);

const Topics = ({ match }) => (
    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>Rendering with React</Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>Components</Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
            </li>
        </ul>

        <Route path={`${match.url}/:topicId`} component={Topic} />
        <Route
            exact
            path={match.url}
            render={() => <h3>Please select a topic.</h3>}
        />
    </div>
);

const Topic = ({ match }) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
);

export default BasicExample;
