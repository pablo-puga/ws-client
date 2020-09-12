import React from 'react';
import { HashRouter, Route, NavLink } from 'react-router-dom';

import About from './pages/About';
import Help from './pages/Help';
import WSClient from './pages/WSClient';

const Header: React.FC = () => {
    return (
        <header>
            <h1>WebSockets Client</h1>
        </header>
    );
};

const Navigation: React.FC = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">WebSockets Client</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/help">Help</NavLink>
                </li>
            </ul>
        </nav>
    );
};

const Footer: React.FC = () => {
    return (
        <footer>
            <small className="block pt-8 text-gray-600 md:text-base">
                By&nbsp;
                <a
                    href="https://github.com/pablo-puga"
                    title="Pablo Puga GitHub Profile"
                    className="font-medium hover:text-gray-900 transition-colors duration-300"
                >
                    Pablo Puga
                </a>
            </small>
        </footer>
    );
};

const App: React.FC = () => {
    return (
        <HashRouter basename="/">
            <Header />
            <Navigation />
            <Route exact path="/" component={WSClient} />
            <Route exact path="/about" component={About} />
            <Route exact path="/help" component={Help} />
            <Footer />
        </HashRouter>
    );
};

export default App;
