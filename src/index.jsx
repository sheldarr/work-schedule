import React from 'react';
import ReactDOM from 'react-dom';

import { IndexRoute, Route, Router } from 'react-router';

ReactDOM.render(
    <Router>
        <Route component={Application} path="/">
          <IndexRoute component={Playlist} />
          <Route component={Admin} path="admin" />
          <Route component={NotFound} path="*" />
        </Route>
    </Router>,
    document.getElementById('root')
);
