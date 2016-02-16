import DateTimeField from 'react-bootstrap-datetimepicker';
import moment from 'moment';
import React from 'react';
import request from 'superagent';
import { Button, Glyphicon, Input, Modal } from 'react-bootstrap';

const LinkShiftModal = React.createClass({
    propTypes: {
        display: React.PropTypes.bool.isRequired,
        onDismiss: React.PropTypes.func.isRequired,
        onSuccess: React.PropTypes.func.isRequired,
        workerId: React.PropTypes.number.isRequired
    },

    getInitialState () {
        return Object.assign({}, this.initialState);
    },

    componentWillMount () {
        this.downloadShifts();
    },

    downloadShifts () {
        request
            .get('http://127.0.0.1:5000/shift')
            .end((error, response) => {
                if (error || !response.ok) {
                    alert('Api Error');
                } else {
                    this.setState({
                        shifts: response.body.shifts
                    });
                }
            });
    },

    initialState: {
        dayOfYear: moment().dayOfYear(),
        shiftId: 0,
        shifts: [],
        validate: false
    },

    dismiss () {
        this.setState(Object.assign({}, this.initialState));
        this.props.onDismiss();
    },

    link () {
        request
            .post('http://127.0.0.1:5000/link')
            .send({
                dayOfYear: this.state.dayOfYear,
                shiftId: this.state.shiftId,
                workerId: this.props.workerId
            })
            .end((error, response) => {
                if (error || !response.ok) {
                    this.props.onDismiss();
                    alert('Api Error');
                } else {
                    this.props.onSuccess();
                }
            });
    },

    handleDayOfYearChange (date) {
        this.setState({
            dayOfYear: moment(parseInt(date, 10)).dayOfYear(),
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

        if (this.state.shiftId === 0) {
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
                    <Modal.Title><Glyphicon glyph="link"/> {'Link Shift'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className="form-group has-success">
                        <label className="control-label"><span>{'Date'}</span></label>
                        <DateTimeField inputProps={{disabled: true}} onChange={this.handleDayOfYearChange}/>
                    </div>
                    <Input
                        bsStyle={this.validateShift()}
                        defaultValue={0}
                        label="Shift"
                        onChange={this.handleShiftChange}
                        placeholder="Shift"
                        type="select"
                    >
                        <option disabled value="0">{'---Select Shift---'}</option>
                        {this.state.shifts.map((shift) => {
                            return <option key={shift.id} value={shift.id}>{shift.name}</option>;
                        })}
                    </Input>
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
