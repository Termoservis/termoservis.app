import React from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Link
} from 'react-router-dom';
import { Provider } from 'mobx-react';
import { action, computed, observable } from 'mobx';
import NavLinkListItem from './components/NavLinkListItem/NavLinkListItem';

import Login from './components/Login/Login';
import Tooltip from './components/Tooltip/Tooltip';

import SessionManager from './managers/SessionManager';

import './styles/App.css';
import Icon from './components/Icon/Icon';
import Panel from './components/Panel/Panel';
import PanelHeader from './components/Panel/PanelHeader';
import PanelTools from './components/Panel/PanelTools';
import PanelBody from './components/Panel/PanelBody';
import Table from './components/Table/Table';
import TableHeader from './components/Table/TableHeader';
import TableColumn from './components/Table/TableColumn';
import TableBody from './components/Table/TableBody';
import TableRow from './components/Table/TableRow';
import TableCell from './components/Table/TableCell';

const stores = {
    loginViewModel: new LoginViewModel()
};

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={matchedProps =>
            (SessionManager.instance.isAuthenticated ? (
                <Component {...matchedProps} />
            ) : (
                <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: matchedProps.location }
                    }}
                />
            ))
        }
    />
);

const DefaultLayout = ({
    baseRoute: BaseRoute,
    component: Component,
    ...rest
}) => (
    <BaseRoute
        {...rest}
        component={matchProps => (
            <div className="be-wrapper be-fixed-sidebar">
                <nav className="navbar navbar-expand fixed-top be-top-header">
                    <div className="container-fluid">
                        <div className="be-navbar-header">
                            <Link to="/">
                                <div className="text-uppercase brand-logo-text">
                                    Termoservis
                                </div>
                            </Link>
                        </div>
                        <div className="users-search-bar be-right-navbar be-right-navbar-flex">
                            <div className="search-container">
                                <div className="input-group input-group-sm">
                                    <input
                                        type="text"
                                        name="search"
                                        placeholder="Traži korisnika..."
                                        autoComplete="off"
                                        className="form-control search-input"
                                    />
                                    <span className="input-group-btn">
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                        >
                                            <i className="icon mdi mdi-search" />
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="be-left-sidebar">
                    <div className="left-sidebar-wrapper">
                        <Link to="/" className="left-sidebar-toggle">
                            Početna
                        </Link>
                        <div className="left-sidebar-spacer">
                            <div className="left-sidebar-scroll">
                                <div className="left-sidebar-content">
                                    <ul className="sidebar-elements">
                                        <NavLinkListItem to="/" exact>
                                            <i className="icon mdi mdi-home" />
                                            <span>Početna</span>
                                        </NavLinkListItem>
                                        <NavLinkListItem to="/users">
                                            <i className="icon mdi mdi-accounts" />
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
                <div className="be-right-sidebar" />
            </div>
        )}
    />
);

const SplashScreenLayout = ({
    baseRoute: BaseRoute,
    component: Component,
    ...rest
}) => (
    <BaseRoute
        {...rest}
        component={matchedProps => (
            <div className="be-splash-screen">
                <Component {...matchedProps} />
            </div>
        )}
    />
);

const routes = [
    {
        path: '/',
        exact: true,
        isFullPage: false,
        layout: DefaultLayout,
        main: props => <Home {...props} />
    },
    {
        path: '/login',
        isPublic: true,
        isFullPage: true,
        layout: SplashScreenLayout,
        main: props => <Login {...props} />
    },
    {
        path: '/users',
        isFullPage: false,
        layout: DefaultLayout,
        main: props => <UsersIndex {...props} />
    }
];

const BasicExample = () => (
    <Provider {...stores}>
        <Router>
            <div>
                {routes.map(route => (
                    <route.layout
                        baseRoute={route.isPublic ? Route : PrivateRoute}
                        key={route.path}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                ))}
            </div>
        </Router>
    </Provider>
);

const UsersIndex = () => (
    <div className="main-content container-fluid">
        <div className="row">
            <div className="col-lg-12">
                <Panel table>
                    <PanelHeader>
                        <span>Korisnici</span>
                        <PanelTools>
                            <Tooltip
                                title="Dodaj novog korisnika"
                                placement="left"
                            >
                                <Icon name="account-add" />
                            </Tooltip>
                        </PanelTools>
                    </PanelHeader>
                    <PanelBody>
                        <Table hover>
                            <TableHeader>
                                <TableColumn>Naziv</TableColumn>
                                <TableColumn>Adresa</TableColumn>
                                <TableColumn>Bilješka</TableColumn>
                                <TableColumn>Zadnji radovi</TableColumn>
                                <TableColumn actions />
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell>36 d.o.o. Mb</TableCell>
                                    <TableCell>
                                        Matova 14, Zagreb, Čakovec
                                    </TableCell>
                                    <TableCell />
                                    <TableCell>23/06/2016</TableCell>
                                    <TableCell actions className="edit-user">
                                        <Icon name="edit" />
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </PanelBody>
                </Panel>
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
