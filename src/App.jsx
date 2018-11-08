import React from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Link,
    Switch
} from 'react-router-dom';
import { Provider } from 'mobx-react';
import ReactMarkdown from 'react-markdown';
import timeago from 'timeago.js';
import NavLinkListItem from './components/NavLinkListItem/NavLinkListItem';
import LoginViewModel from './components/Login/LoginViewModel';

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

// the local dict example is below.
// genitive plural form for all other numbers excluding cases below:
// 14-20: nominative plural form for the numbers 2,3,4
// and all other numbers higher than 21 which end in 2,3,4
const hrTimeAgoLocal = function (number, index) {
    // number: the timeago / timein number;
    // index: the index of array below;
    // total_sec: total seconds between date to be formatted and today's date;
    const l = [
        ['upravo', 'upravo'],
        ['prije %s sekundi', 'za %s sekundi'],
        ['prije 1 minute', 'za 1 minutu'],
        ['prije %s minuta', 'za %s minuta'],
        ['prije 1 sat', 'za 1 sat'],
        ['prije %s sati', 'za %s sati'],
        ['prije 1 dan', 'za 1 dan'],
        ['prije %s dana', 'za %s dana'],
        ['prije 1 tjedan', 'za 1 tjedan'],
        ['prije %s tjedana', 'za %s tjedana'],
        ['prije 1 mjesec', 'za 1 mjesec'],
        ['prije %s mjeseci', 'in %s mjeseci'],
        ['prije 1 godine', 'za 1 godinu'],
        ['prije %s godine', 'za %s godina'],
        ['prije %s sekunde', 'za %s sekunde'],
        ['prije %s minute', 'za %s minute'],
        ['prije %s sata', 'za %s sata'],
        ['prije %s dana', 'za %s dana'],
        ['prije %s tjedna', 'za %s tjedna'],
        ['prije %s mjeseca', 'za %s mjeseca'],
        ['prije %s godine', 'za %s godine']
    ];

    const isOdd = index % 2 === 1;
    if (!isOdd)
        return l[index];
    return l[number % 10 > 4 || number % 10 < 1 || Math.floor(number / 10) % 10 === 1 ? index : (++index / 2) + 13];
};
// register your locale with timeago
timeago.register('hr', hrTimeAgoLocal);
const timeagoInstance = timeago();
timeagoInstance.setLocale('hr');

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
            <div className="be-wrapper be-fixed-sidebar be-collapsible-sidebar-collapsed">
                <nav className="navbar navbar-expand fixed-top be-top-header">
                    <div className="container-fluid">
                        <div className="be-navbar-header">
                            <Link to="/">
                                <div className="text-uppercase brand-logo-text">
                                    <img className="pb-1" src="/images/Termoservis.png" alt="Termoservis Logo" width="200" />
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
                                            <Tooltip title="Početna" placement="right">
                                                <React.Fragment>
                                                    <i className="icon mdi mdi-home" />
                                                    <span>Početna</span>
                                                </React.Fragment>
                                            </Tooltip>
                                        </NavLinkListItem>
                                        <NavLinkListItem to="/users">
                                            <Tooltip title="Korisnici" placement="right">
                                                <React.Fragment>
                                                    <i className="icon mdi mdi-accounts" />
                                                    <span>Korisnici</span>
                                                </React.Fragment>
                                            </Tooltip>
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
        path: '/users/:userid',
        isFullPage: false,
        layout: DefaultLayout,
        main: props => <UserDetails {...props} />
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
            <Switch>
                {routes.map(route => (
                    <route.layout
                        baseRoute={route.isPublic ? Route : PrivateRoute}
                        key={route.path}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                ))}
            </Switch>
        </Router>
    </Provider>
);

const UserDetails = props => (
    <div className="main-content container-flud">
        <div className="row">
            <div className="col-lg-5">
                <div className="row">
                    <div className="col">
                        <Panel>
                            <PanelHeader>
                                <span><b>User User</b></span>
                                <PanelTools>
                                    <Tooltip title="Uredi korisnika" placement="bottom">
                                        <Icon name="edit" />
                                    </Tooltip>
                                </PanelTools>
                            </PanelHeader>
                            <PanelBody>
                                <div className="text-muted">
                                Nullam venenatis sollicitudin nulla, nec feugiat enim suscipit ac. Aliquam erat volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus
                                </div>
                                <div className="row pt-2">
                                    <div className="col-4">
                                        <div className="text-muted">SERVISA</div>
                                    </div>
                                    <div className="col-4">
                                        <div className="text-muted">POPRAVAKA</div>
                                    </div>
                                    <div className="col-4">
                                        <div className="text-muted">ZADNJI RADOVI</div>
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col-4">
                                        <div className="h4 p-0 m-0">123</div>
                                    </div>
                                    <div className="col-4">
                                        <div className="h4 p-0 m-0">123</div>
                                    </div>
                                    <div className="col-4">
                                        <Tooltip title="17.6.2018. 16:14" placement="bottom">
                                            <div className="h4 p-0 m-0">{timeagoInstance.format('2018-06-17 16:14')}</div>
                                        </Tooltip>
                                    </div>
                                </div>
                            </PanelBody>
                        </Panel>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <Panel>
                            <PanelHeader>
                                <span>Adresa</span>
                            </PanelHeader>
                            <PanelBody>
                                <div>A. G. Senoe 45<br />Zagreb, 10000<br />Hrvatska</div>
                            </PanelBody>
                        </Panel>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <Panel>
                            <PanelHeader>
                                <span>Kontakt</span>
                            </PanelHeader>
                            <PanelBody>
                                <div>040 / 995 970</div>
                            </PanelBody>
                        </Panel>
                    </div>
                    <div className="col-sm-12">
                        <Panel table>
                            <PanelHeader>
                                <span>Uredaji</span>
                            </PanelHeader>
                            <PanelBody>
                                <Table hover>
                                    <TableHeader>
                                        <TableColumn>Model</TableColumn>
                                        <TableColumn>Proizvodac</TableColumn>
                                        <TableColumn>Pusten u pogon</TableColumn>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>VUW</TableCell>
                                            <TableCell>Vaillant</TableCell>
                                            <TableCell />
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </PanelBody>
                        </Panel>
                    </div>
                </div>
            </div>
            <div className="col-lg-7 col-md-12">
                <Panel>
                    <PanelHeader>
                        <span>Radovi</span>
                        <PanelTools>
                            <Tooltip title="Novi radni nalog" placement="bottom">
                                <Icon name="plus" />
                            </Tooltip>
                        </PanelTools>
                    </PanelHeader>
                    <PanelBody>
                        <ul className="user-timeline">
                            <li className="latest service">
                                <Tooltip placement="left" title="16.6.2018. 14:35">
                                    <div className="user-timeline-date">{timeagoInstance.format('2018-06-17 15:45')}</div>
                                </Tooltip>
                                <div className="user-timeline-title">Servis</div>
                                <div className="user-timeline-description">
                                    <ReactMarkdown source="- nadopunjavanje sistema grijanja" />
                                </div>
                                <div className="row pt-2">
                                    <div className="col">Neven</div>
                                    <div className="col text-center">VUV-200</div>
                                    <div className="col text-right">300 kn</div>
                                </div>
                            </li>
                            <li className="repair latest">
                                <Tooltip placement="left" title="16.6.2018. 14:35">
                                    <div className="user-timeline-date">{timeagoInstance.format('2018-06-16 14:35')}</div>
                                </Tooltip>
                                <div className="user-timeline-title">Popravak</div>
                                <div className="user-timeline-description">
                                    <ReactMarkdown source="- nadopunjavanje sistema grijanja" />
                                </div>
                                <div className="row pt-2">
                                    <div className="col">Neven</div>
                                    <div className="col text-center">VUV-200</div>
                                    <div className="col text-right">300 kn</div>
                                </div>
                            </li>
                            <li className="commision latest">
                                <Tooltip placement="left" title="16.5.2018. 14:35">
                                    <div className="user-timeline-date">{timeagoInstance.format('2018-05-17 14:35')}</div>
                                </Tooltip>
                                <div className="user-timeline-title">Pustanje u pogon</div>
                                <div className="user-timeline-description">
                                    <ReactMarkdown source="- nadopunjavanje sistema grijanja" />
                                </div>
                                <div className="row pt-2">
                                    <div className="col">Neven</div>
                                    <div className="col text-center">VUV-200</div>
                                    <div className="col text-right">300 kn</div>
                                </div>
                            </li>
                            <li className="warranty latest">
                                <Tooltip placement="left" title="16.5.2018. 14:35">
                                    <div className="user-timeline-date">{timeagoInstance.format('2018-01-15 14:35')}</div>
                                </Tooltip>
                                <div className="user-timeline-title">Radovi u jamstvu</div>
                                <div className="user-timeline-description">
                                    <ReactMarkdown source="- nadopunjavanje sistema grijanja" />
                                </div>
                                <div className="row pt-2">
                                    <div className="col">Neven</div>
                                    <div className="col text-center">VUV-200</div>
                                    <div className="col text-right">300 kn</div>
                                </div>
                            </li>
                            <li className="service-repair latest">
                                <Tooltip placement="left" title="16.5.2018. 14:35">
                                    <div className="user-timeline-date">{timeagoInstance.format('2016-06-17 14:35')}</div>
                                </Tooltip>
                                <div className="user-timeline-title">Servis i popravak</div>
                                <div className="user-timeline-description">
                                    <ReactMarkdown source="- nadopunjavanje sistema grijanja" />
                                </div>
                                <div className="row pt-2">
                                    <div className="col">Neven</div>
                                    <div className="col text-center">VUV-200</div>
                                    <div className="col text-right">300 kn</div>
                                </div>
                            </li>
                        </ul>
                    </PanelBody>
                </Panel>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <span className="text-muted">Korisnik je stvoren 08.11.2011 (test.test@test.com)</span>
            </div>
        </div>
    </div>
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
                                    <TableCell to="/users/123">36 d.o.o. Mb</TableCell>
                                    <TableCell to="/users/123">
                                        Matova 14, Zagreb, Čakovec
                                    </TableCell>
                                    <TableCell to="/users/123" />
                                    <TableCell to="/users/123">23/06/2016</TableCell>
                                    <TableCell to="/users/123" actions className="edit-user">
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
    <div />
);

export default BasicExample;
