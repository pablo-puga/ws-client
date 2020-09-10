import React from 'react';
import { HashRouter, Route, NavLink } from 'react-router-dom';

import About from './pages/About';
import Help from './pages/Help';
import WSClient from './pages/WSClient';

const App: React.FC = () => {
    return (
        <HashRouter basename="/">
            <nav>
                <ul>
                    <li><NavLink to="/">WebSockets Client</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/help">Help</NavLink></li>
                </ul>
            </nav>
            <Route exact path="/" component={WSClient}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/help" component={Help}/>
        </HashRouter>
    );
};

export default App;
