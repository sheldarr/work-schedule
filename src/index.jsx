import React from 'react';
import ReactDOM from 'react-dom';

import { IndexRoute, Route, Router } from 'react-router';

import Application from './components/application.jsx';
import Calendar from './components/calendar.jsx';
import NotFound from './components/notFound.jsx';
import store from './store';

const CalendarWrapper = React.createClass({
    render: function () {
        return (
            <Calendar store={store} />
        );
    }
});

ReactDOM.render(
    <Router>
        <Route component={Application} path="/">
          <IndexRoute component={CalendarWrapper} />
          <Route component={NotFound} path="*"/>
        </Route>
    </Router>,
    document.getElementById('root')
);
