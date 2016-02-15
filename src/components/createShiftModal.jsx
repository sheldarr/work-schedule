import React from 'react';

import { Button, Glyphicon, Input, Modal } from 'react-bootstrap';

const CreateShiftModal = React.createClass({
    propTypes: {
        display: React.PropTypes.bool.isRequired,
        onDismiss: React.PropTypes.func.isRequired,
        onSuccess: React.PropTypes.func.isRequired
    },

    renderModal () {
        return (
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title><Glyphicon glyph="refresh"/> {'Create Shift'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                     <Input label="Name" placeholder="Name" type="text"/>
                     <Input label="Name" placeholder="Name" type="number"/>
                     <Input label="Name" placeholder="Name" type="number"/>

                </Modal.Body>
                <Modal.Footer>
                    <Button bsStyle="success"><Glyphicon glyph="ok"/> {'Create'}</Button>
                    <Button bsStyle="danger"><Glyphicon glyph="remove"/> {'Cancel'}</Button>
                </Modal.Footer>
            </Modal.Dialog>
        );
    },

    render () {
        return (
            this.props.display
                ? this.renderModal()
                : null
        );
    }
});

export default CreateShiftModal;
