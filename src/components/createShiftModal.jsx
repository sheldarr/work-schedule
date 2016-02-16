import actions from '../actions';
import DateTimeField from 'react-bootstrap-datetimepicker';
import moment from 'moment';
import React from 'react';
import { Button, Glyphicon, Input, Modal } from 'react-bootstrap';

const CreateShiftModal = React.createClass({
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
        start: moment(),
        end: moment(),
        validate: false
    },

    dismiss () {
        this.setState(Object.assign({}, this.initialState));
        this.props.onDismiss();
    },

    create () {
        this.props.store.dispatch(actions.createShift({
            name: this.state.name,
            startHour: this.state.start.hour(),
            startMinute: this.state.start.minute(),
            endHour: this.state.end.hour(),
            endMinute: this.state.end.minute()
        }));
        this.props.onSuccess();
    },

    handleNameChange (event) {
        this.setState({
            name: event.target.value,
            validate: true
        });
    },

    handleStartChange (start) {
        this.setState({
            start: moment(parseInt(start, 10)),
            validate: true
        });
    },

    handleEndChange (end) {
        this.setState({
            end: moment(parseInt(end, 10)),
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

    validateShift () {
        return this.validateName();
    },

    render () {
        return (
            <Modal onHide={this.props.onDismiss} show={this.props.display}>
                <Modal.Header closeButton>
                    <Modal.Title><Glyphicon glyph="refresh"/> {'Create Shift'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Input
                    bsStyle={this.validateName()}
                    label="Name"
                    onChange={this.handleNameChange}
                    placeholder="Name"
                    type="text"
                />
                <div className="form-group has-success">
                    <label className="control-label"><span>{'Start'}</span></label>
                    <DateTimeField inputProps={{disabled: true}} mode={'time'} onChange={this.handleStartChange}/>
                </div>
                <div className="form-group has-success">
                    <label className="control-label"><span>{'End'}</span></label>
                    <DateTimeField inputProps={{disabled: true}} mode={'time'} onChange={this.handleEndChange}/>
                </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button bsStyle="success" disabled={!this.validateShift()} onClick={this.create}><Glyphicon glyph="ok"/> {'Create'}</Button>
                    <Button bsStyle="danger" onClick={this.dismiss}><Glyphicon glyph="remove"/> {'Cancel'}</Button>
                </Modal.Footer>
            </Modal>
        );
    }
});

export default CreateShiftModal;
