import React from 'react';
import ReactDOM from 'react-dom';

import { IndexRoute, Route, Router } from 'react-router';

import Application from './components/application.jsx';
import Calendar from './components/calendar.jsx';
import NotFound from './components/notFound.jsx';
import Workers from './components/workers.jsx';
import Shifts from './components/shifts.jsx';
import store from './store';

const CalendarWrapper = React.createClass({
    propTypes: {
        params: React.PropTypes.object
    },

    render: function () {
        return (
            <Calendar params={this.props.params} store={store}/>
        );
    }
});

const WorkersWrapper = React.createClass({
    render: function () {
        return (
            <Workers store={store}/>
        );
    }
});

const ShiftsWrapper = React.createClass({
    render: function () {
        return (
            <Shifts store={store}/>
        );
    }
});

ReactDOM.render(
    <Router>
        <Route component={Application} path="/">
            <IndexRoute component={CalendarWrapper}/>
            <Route component={CalendarWrapper} path="/:workerId"/>
            <Route component={WorkersWrapper} path="/workers"/>
            <Route component={ShiftsWrapper} path="/shifts"/>
            <Route component={NotFound} path="*"/>
        </Route>
    </Router>,
    document.getElementById('root')
);
