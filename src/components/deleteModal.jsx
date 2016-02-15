import React from 'react';

const deleteModal = React.createClass({
    propTypes: {
        display: React.PropTypes.bool.isRequired,
        onDismiss: React.PropTypes.func.isRequired,
        onSuccess: React.PropTypes.func.isRequired
    },

    render () {
        return (
            this.props.display
                ? <div>{'Modal'}</div>
                : null
        );
    }
});

export default deleteModal;
