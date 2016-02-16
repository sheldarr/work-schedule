import React from 'react';
import request from 'superagent';

import { Button, Glyphicon, Input, Modal } from 'react-bootstrap';

const CreateWorkerModal = React.createClass({
    propTypes: {
        display: React.PropTypes.bool.isRequired,
        onDismiss: React.PropTypes.func.isRequired,
        onSuccess: React.PropTypes.func.isRequired
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
        request
            .post('http://127.0.0.1:5000/worker')
            .send({name: this.state.name})
            .end((error, response) => {
                if (error || !response.ok) {
                    this.props.onDismiss();
                    alert('Api Error');
                } else {
                    this.props.onSuccess();
                }
            });
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
