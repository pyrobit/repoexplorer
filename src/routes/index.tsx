import React from 'react';


import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';
import { Switch, Route } from 'react-router-dom';

const Routes: React.FC = () => (
    <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/repositories/:repository+" component={Repository} />
    </Switch>
);

export default Routes;