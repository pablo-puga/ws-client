import React from 'react';
import { HashRouter, Route, NavLink } from 'react-router-dom';

import About from './pages/About';
import Help from './pages/Help';
import WSClient from './pages/WSClient';

const Header: React.FC = () => {
    return (
        <header className="w-full flex flex-row justify-between items-center px-2 py-1 md:px-3 md:py-2 bg-green-400 bg-opacity-75 transition-all duration-75 md:shadow">
            <h1 className="text-base font-bold text-gray-800">WebSockets Client</h1>
            <span className="text-sm font-medium text-gray-700">v{process.env.REACT_APP_VERSION}</span>
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
