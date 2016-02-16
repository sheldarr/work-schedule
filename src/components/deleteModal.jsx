import React from 'react';

import { Button, Glyphicon, Modal } from 'react-bootstrap';

const DeleteModal = React.createClass({
    propTypes: {
        display: React.PropTypes.bool.isRequired,
        objectId: React.PropTypes.number.isRequired,
        objectName: React.PropTypes.string.isRequired,
        onDismiss: React.PropTypes.func.isRequired,
        onSuccess: React.PropTypes.func.isRequired
    },

    success () {
        if(!this.props.objectId) {
            return;
        }

        this.props.onSuccess(this.props.objectId);
    },

    render () {
        return (
            <Modal onHide={this.props.onDismiss} show={this.props.display}>
                <Modal.Header closeButton>
                    <Modal.Title>{'Delete'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {`Do you really want to remove ${this.props.objectName}?`}
                </Modal.Body>
                <Modal.Footer>
                    <Button bsStyle="success" onClick={this.success}><Glyphicon glyph="ok"/> {'Yes'}</Button>
                    <Button bsStyle="danger" onClick={this.props.onDismiss}><Glyphicon glyph="remove"/> {'No'}</Button>
                </Modal.Footer>
            </Modal>
        );
    }
});

export default DeleteModal;
