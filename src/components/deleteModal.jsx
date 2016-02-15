import React from 'react';

import { Button, Glyphicon, Modal } from 'react-bootstrap';

const deleteModal = React.createClass({
    propTypes: {
        display: React.PropTypes.bool.isRequired,
        objectName: React.PropTypes.string.isRequired,
        onDismiss: React.PropTypes.func.isRequired,
        onSuccess: React.PropTypes.func.isRequired
    },

    renderModal () {
        return (
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>{'Delete'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {`Do you really want to remove ${this.props.objectName}?`}
                </Modal.Body>
                <Modal.Footer>
                    <Button bsStyle="success"><Glyphicon glyph="ok"/> {'Yes'}</Button>
                    <Button bsStyle="danger"><Glyphicon glyph="remove"/> {'No'}</Button>
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

export default deleteModal;
