import React from 'react';
import ReactDOM from 'react-dom';

import { IndexRoute, Route, Router } from 'react-router';

import Application from './components/application.jsx';
import Calendar from './components/calendar.jsx';
import NotFound from './components/notFound.jsx';
import Workers from './components/workers.jsx';
import Schedule from './components/schedule.jsx';
import Shifts from './components/shifts.jsx';

ReactDOM.render(
    <Router>
        <Route component={Application} path="/">
            <IndexRoute component={Calendar}/>
            <Route component={Calendar} path="/workers/:workerId/calendar"/>
            <Route component={Workers} path="/workers"/>
            <Route component={Schedule} path="/workers/:workerId/schedule"/>
            <Route component={Shifts} path="/shifts"/>
            <Route component={NotFound} path="*"/>
        </Route>
    </Router>,
    document.getElementById('root')
);
