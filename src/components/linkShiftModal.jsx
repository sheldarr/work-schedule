import actions from '../actions';
import DateTimeField from 'react-bootstrap-datetimepicker';
import moment from 'moment';
import React from 'react';
import { Button, Glyphicon, Modal } from 'react-bootstrap';

const LinkShiftModal = React.createClass({
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
        dayOfYear: moment().dayOfYear(),
        shiftId: 0
    },

    dismiss () {
        this.setState(Object.assign({}, this.initialState));
        this.props.onDismiss();
    },

    link () {
        this.props.store.dispatch(actions.linkShift({
            dayOfYear: this.state.dayOfYear,
            shiftId: this.state.shiftId,
            workerId: this.props.params.workerId
        }));
        this.props.onSuccess();
    },

    handleDayOfYearChange (event) {
        this.setState({
            dayOfYear: event.target.value,
            validate: true
        });
    },

    handleShiftChange (event) {
        this.setState({
            shiftId: event.target.value,
            validate: true
        });
    },

    validateShift () {
        if (!this.state.validate) {
            return null;
        }

        if (!this.state.shiftId) {
            return 'error';
        }

        return 'success';
    },

    validateLink () {
        return this.validateShift();
    },

    render () {
        return (
            <Modal onHide={this.props.onDismiss} show={this.props.display}>
                <Modal.Header closeButton>
                    <Modal.Title><Glyphicon glyph="time"/> {'Link Schedule'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                <div className="form-group has-success">
                    <label className="control-label"><span>{'Date'}</span></label>
                    <DateTimeField inputProps={{disabled: true}} onChange={this.handleDayOfYearChange}/>
                </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button bsStyle="success" disabled={!this.validateLink()} onClick={this.link}><Glyphicon glyph="ok"/> {'Link'}</Button>
                    <Button bsStyle="danger" onClick={this.dismiss}><Glyphicon glyph="remove"/> {'Cancel'}</Button>
                </Modal.Footer>
            </Modal>
        );
    }
});

export default LinkShiftModal;
