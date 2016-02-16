import CreateShiftModal from './createShiftModal.jsx';
import DeleteModal from './deleteModal.jsx';
import moment from 'moment';
import React from 'react';
import request from 'superagent';

import { Button, Col, Glyphicon, Grid, Panel, Row, Table } from 'react-bootstrap';

const Shifts = React.createClass({
    getInitialState () {
        return {
            displayCreateShiftModal: false,
            displayDeleteShiftModal: false,
            shifts: [],
            objectToDeleteId: 0,
            objectToDeleteName: ''
        };
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

    showCreateShiftModal () {
        this.setState({ displayCreateShiftModal: true });
    },

    hideCreateShiftModal () {
        this.setState({ displayCreateShiftModal: false });
    },

    showDeleteShiftModal (shiftId, shiftName) {
        this.setState({
            displayDeleteShiftModal: true,
            objectToDeleteId: shiftId,
            objectToDeleteName: shiftName
        });
    },

    hideDeleteShiftModal () {
        this.setState({
            displayDeleteShiftModal: false,
            objectToDeleteId: 0,
            objectToDeleteName: ''
        });
    },

    deleteShift (shiftId) {
        this.hideDeleteShiftModal();

        request
            .del(`http://127.0.0.1:5000/shift/${shiftId}`)
            .end((error, response) => {
                if (error || !response.ok) {
                    alert('Api Error');
                } else {
                    this.downloadShifts();
                }
            });
    },

    shiftSucessfullyCreated () {
        this.downloadShifts();
        this.hideCreateShiftModal();
    },

    render () {
        return (
            <Grid>
                <Row>
                    <Col>
                        <Panel header={<span><Glyphicon glyph="refresh" /> {'Shifts'}</span>}>
                            <Table hover striped>
                                <thead>
                                    <tr>
                                        <td>{'Id'}</td>
                                        <td>{'Name'}</td>
                                        <td>{'Start'}</td>
                                        <td>{'End'}</td>
                                        <td></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.shifts.map(shift => <tr key={shift.id}>
                                        <td>
                                            {shift.id}
                                        </td>
                                        <td>
                                            {shift.name}
                                        </td>
                                        <td>
                                            {`${moment().hour(shift.startHour).minute(shift.startMinute).format('H:mm')}`}
                                        </td>
                                        <td>
                                            {`${moment().hour(shift.endHour).minute(shift.endMinute).format('H:mm')}`}
                                        </td>
                                        <td>
                                            <div className="pull-right">
                                                <Button bsStyle="danger" onClick={this.showDeleteShiftModal.bind(this, shift.id, shift.name)}>
                                                    <span><Glyphicon glyph="remove"/> {'Delete'}</span>
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>)}
                                </tbody>
                            </Table>
                            <div className="pull-right" onClick={this.showCreateShiftModal}>
                                <Button bsStyle="success">
                                    <span><Glyphicon glyph="plus"/> {'Create Shift'}</span>
                                </Button>
                            </div>
                            <CreateShiftModal
                                display={this.state.displayCreateShiftModal}
                                onDismiss={this.hideCreateShiftModal}
                                onSuccess={this.shiftSucessfullyCreated}
                            />
                            <DeleteModal
                                display={this.state.displayDeleteShiftModal}
                                objectId={this.state.objectToDeleteId}
                                objectName={this.state.objectToDeleteName}
                                onDismiss={this.hideDeleteShiftModal}
                                onSuccess={this.deleteShift}
                            />
                        </Panel>
                    </Col>
                </Row>
            </Grid>
        );
    }
});

export default Shifts;
