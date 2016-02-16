import React from 'react';

import { Button, Glyphicon, Input, Modal } from 'react-bootstrap';

const CreateWorkerModal = React.createClass({
    propTypes: {
        display: React.PropTypes.bool.isRequired,
        onDismiss: React.PropTypes.func.isRequired,
        onSuccess: React.PropTypes.func.isRequired
    },

    render () {
        return (
            <Modal onHide={this.props.onDismiss} show={this.props.display}>
                <Modal.Header closeButton>
                    <Modal.Title><Glyphicon glyph="user"/> {'Create Worker'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                     <Input label="Name" placeholder="Name" type="text"/>
                </Modal.Body>
                <Modal.Footer>
                    <Button bsStyle="success"><Glyphicon glyph="ok"/> {'Create'}</Button>
                    <Button bsStyle="danger" onClick={this.props.onDismiss}><Glyphicon glyph="remove"/> {'Cancel'}</Button>
                </Modal.Footer>
            </Modal>
        );
    }
});

export default CreateWorkerModal;
