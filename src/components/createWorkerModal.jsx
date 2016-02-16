import actions from '../actions';
import React from 'react';

import { Button, Glyphicon, Input, Modal } from 'react-bootstrap';

const CreateWorkerModal = React.createClass({
    propTypes: {
        display: React.PropTypes.bool.isRequired,
        onDismiss: React.PropTypes.func.isRequired,
        onSuccess: React.PropTypes.func.isRequired,
        store: React.PropTypes.object.isRequired
    },

    getInitialState () {
        return Object.assign({}, this.initialState);
    },

    initialState: {
        name: '',
        validate: false
    },

    dismiss () {
        this.setState(Object.assign({}, this.initialState));
        this.props.onDismiss();
    },

    create () {
        this.props.store.dispatch(actions.createWorker({name: this.state.name}));
        this.props.onSuccess();
    },

    handleNameChange (event) {
        this.setState({
            name: event.target.value,
            validate: true
        });
    },

    validateName () {
        if (!this.state.validate) {
            return null;
        }

        if (this.state.name === '') {
            return 'error';
        }

        return 'success';
    },

    render () {
        return (
            <Modal onHide={this.dismiss} show={this.props.display}>
                <Modal.Header closeButton>
                    <Modal.Title><Glyphicon glyph="user"/> {'Create Worker'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                     <Input
                         bsStyle={this.validateName()}
                         label="Name"
                         onChange={this.handleNameChange}
                         placeholder="Name"
                         type="text"
                     />
                </Modal.Body>
                <Modal.Footer>
                    <Button bsStyle="success" disabled={this.validateName() !== 'success'} onClick={this.create}><Glyphicon glyph="ok"/> {'Create'}</Button>
                    <Button bsStyle="danger" onClick={this.dismiss}><Glyphicon glyph="remove"/> {'Cancel'}</Button>
                </Modal.Footer>
            </Modal>
        );
    }
});

export default CreateWorkerModal;
