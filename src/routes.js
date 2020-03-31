import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import NewTicket from './pages/NewTicket'

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/new-ticket" component={NewTicket}/>
            </Switch>
        </Router>
    );
}