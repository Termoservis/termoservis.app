import React from "react";
import "./styles/App.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavLinkListItem from './components/navLinkListItem/NavLinkListItem';

import Login from './components/login/Login';
import Tooltip from "./components/tooltip/Tooltip";

const DefaultLayout = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={matchProps => (
            <div className="be-wrapper be-fixed-sidebar">
                <nav className="navbar navbar-expand fixed-top be-top-header">
                    <div className="container-fluid">
                        <div className="be-navbar-header">
                            <Link to="/">
                                <div className="text-uppercase brand-logo-text">Termoservis</div>
                            </Link>
                        </div>
                        <div className="users-search-bar be-right-navbar be-right-navbar-flex">
                            <div className="search-container">
                                <div className="input-group input-group-sm">
                                    <input type="text" name="search" placeholder="Traži korisnika..." autoComplete="off" className="form-control search-input" />
                                    <span className="input-group-btn">
                                        <button type="button" className="btn btn-primary">
                                            <i className="icon mdi mdi-search"></i>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="be-left-sidebar">
                    <div className="left-sidebar-wrapper">
                        <a href="#" className="left-sidebar-toggle">Početna</a>
                        <div className="left-sidebar-spacer">
                            <div className="left-sidebar-scroll">
                                <div className="left-sidebar-content">
                                    <ul className="sidebar-elements">
                                        <NavLinkListItem to="/" exact>
                                            <i className="icon mdi mdi-home"></i>
                                            <span>Početna</span>
                                        </NavLinkListItem>
                                        <NavLinkListItem to="/users">
                                            <i className="icon mdi mdi-accounts"></i>
                                            <span>Korisnici</span>
                                        </NavLinkListItem>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="be-content">
                    <Component {...matchProps} />
                </div>
                <div className="be-right-sidebar">
                </div>
            </div>
        )} />
    )
};

const SplashScreenLayout = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={matchProps => (
            <div className="be-splash-screen">
                <Component {...matchProps} />
            </div>
        )} />
    )
};

const routes = [
    {
        path: '/',
        exact: true,
        isFullPage: false,
        layout: DefaultLayout,
        main: () => <Home />
    },
    {
        path: '/login',
        isFullPage: true,
        layout: SplashScreenLayout,
        main: () => <Login />
    },
    {
        path: '/users',
        isFullPage: false,
        layout: DefaultLayout,
        main: () => <UsersIndex />
    }
];

const BasicExample = () => (
    <Router>
        <div>
            {routes.map((route, index) => (
                <route.layout key={index} path={route.path} exact={route.exact} component={route.main} />
            ))}
        </div>
    </Router>
);

const UsersIndex = () => (
    <div className="main-content container-fluid">
        <div className="row">
            <div className="col-lg-12">
                <div className="card card-table">
                    <div className="card-header">
                        <span>Korisnici</span>
                        <div className="tools dropdown">
                            <Tooltip title="Dodaj novog korisnika" placement="left">
                                <i className="icon mdi mdi-plus"></i>
                            </Tooltip>
                        </div>
                    </div>
                    <div className="card-body">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Naziv</th>
                                    <th>Adresa</th>
                                    <th>Bilješka</th>
                                    <th>Zadnji radovi</th>
                                    <th className="actions"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>36 d.o.o. Mb</td>
                                    <td>Matova 14, Zagreb, Čakovec</td>
                                    <td>Description</td>
                                    <td>23/06/2016</td>
                                    <td className="actions edit-user"><a href="#" className="icon"><i className="mdi mdi-edit"></i></a></td>
                                </tr>
                            </tbody>
                        </table>
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

export default BasicExample;
