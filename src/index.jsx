import React from 'react';
import ReactDOM from 'react-dom';

import { IndexRoute, Route, Router } from 'react-router';

import Application from './components/application.jsx';
import Calendar from './components/calendar.jsx';
import NotFound from './components/notFound.jsx';

ReactDOM.render(
    <Router>
        <Route component={Application} path="/">
          <IndexRoute component={Calendar} />
          <Route component={NotFound} path="*"/>
        </Route>
    </Router>,
    document.getElementById('root')
);
