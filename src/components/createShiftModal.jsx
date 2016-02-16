import DateTimeField from 'react-bootstrap-datetimepicker';
import React from 'react';
import { Button, Glyphicon, Input, Modal } from 'react-bootstrap';

const CreateShiftModal = React.createClass({
    propTypes: {
        display: React.PropTypes.bool.isRequired,
        onDismiss: React.PropTypes.func.isRequired,
        onSuccess: React.PropTypes.func.isRequired
    },

    render () {
        return (
            <Modal onHide={this.props.onDismiss} show={this.props.display}>
                <Modal.Header closeButton>
                    <Modal.Title><Glyphicon glyph="refresh"/> {'Create Shift'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                     <Input label="Name" placeholder="Name" type="text"/>
                     <div className="form-group">
                         <label className="control-label"><span>{'Start'}</span></label>
                         <DateTimeField mode={'time'}/>
                     </div>
                     <div className="form-group">
                         <label className="control-label"><span>{'End'}</span></label>
                         <DateTimeField mode={'time'}/>
                     </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button bsStyle="success"><Glyphicon glyph="ok"/> {'Create'}</Button>
                    <Button bsStyle="danger"><Glyphicon glyph="remove"/> {'Cancel'}</Button>
                </Modal.Footer>
            </Modal>
        );
    }
});

export default CreateShiftModal;
