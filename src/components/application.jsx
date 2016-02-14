import NavigationBar from './navigationBar.jsx';
import React from 'react';

const Application = React.createClass({
    propTypes: {
        children: React.PropTypes.node
    },

    render () {
        return (
            <div>
                <NavigationBar/>
                {this.props.children}
            </div>
        );
    }
});

export default Application;
