import NavigationBar from './navigationBar.jsx';
import React from 'react';
import Provider from 'react-redux';
import store from '../store';

const Application = React.createClass({
    propTypes: {
        children: React.PropTypes.node
    },

    render () {
        return (
            <Provider store={store}>
                <NavigationBar/>
                {this.props.children}
            </Provider>
        );
    }
});

export default Application;
