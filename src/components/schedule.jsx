import LinkShiftModal from './linkShiftModal.jsx';
import DeleteModal from './deleteModal.jsx';
import moment from 'moment';
import React from 'react';
import request from 'superagent';
import { Button, Col, Glyphicon, Grid, Panel, Row, Table } from 'react-bootstrap';

const Schedule = React.createClass({
    propTypes: {
        params: React.PropTypes.object
    },

    getInitialState () {
        return {
            displayLinkShiftModal: false,
            displayDeleteShiftLinkModal: false,
            worker: {
                id: 0,
                name: '',
                schedule: []
            },
            objectToDeleteId: 0,
            objectToDeleteName: ''
        };
    },

    componentWillMount () {
        this.downloadWorkers();
        this.downloadShifts();
    },

    downloadWorkers () {
        request
            .get('http://127.0.0.1:5000/worker')
            .end((error, response) => {
                if (error || !response.ok) {
                    alert('Api Error');
                } else {
                    this.setState({
                        worker: response.body.workers.find(function (worker) { return parseInt(worker.id, 10) === parseInt(this.props.params.workerId, 10); }.bind(this))
                    });
                }
            });
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

    showLinkShiftModal () {
        this.setState({ displayLinkShiftModal: true });
    },

    hideLinkShiftModal () {
        this.setState({ displayLinkShiftModal: false });
    },

    showDeleteShiftLinkModal (dayOfYear) {
        this.setState({
            displayDeleteShiftLinkModal: true,
            objectToDeleteId: dayOfYear,
            objectToDeleteName: `day ${dayOfYear} shift`
        });
    },

    hideDeleteShiftLinkModal () {
        this.setState({
            displayDeleteShiftLinkModal: false,
            objectToDeleteId: 0,
            objectToDeleteName: ''
        });
    },

    deleteShiftLink (dayOfYear) {
        this.hideDeleteShiftLinkModal();

        request
            .del(`http://127.0.0.1:5000/worker/${this.state.worker.id}/shiftLink/${dayOfYear}`)
            .end((error, response) => {
                if (error || !response.ok) {
                    alert('Api Error');
                } else {
                    this.downloadWorkers();
                }
            });
    },

    getShiftName (shiftId) {
        if (!this.state.shifts) {
            return '';
        }

        return this.state.shifts.find((shift) => {
            return parseInt(shift.id, 10) === parseInt(shiftId, 10);
        }).name;
    },

    goBack () {
        location.href = `#/workers`;
    },

    shiftSucessfullyLinked () {
        this.downloadWorkers();
        this.downloadShifts();
        this.hideLinkShiftModal();
    },

    render () {
        return (
            <Grid>
                <Row>
                    <Col>
                        <Panel header={<span><Glyphicon glyph="time" /> {'Schedule'}</span>}>
                            <Table hover striped>
                                <thead>
                                    <tr>
                                        <td>{'Date'}</td>
                                        <td>{'Day Of Year'}</td>
                                        <td>{'Shift'}</td>
                                        <td></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.worker.schedule.map(shiftLink => <tr key={`${shiftLink.dayOfYear}_${shiftLink.shiftId}`}>
                                        <td>
                                            {moment().dayOfYear(shiftLink.dayOfYear).format('D.MM.YYYY')}
                                        </td>
                                        <td>
                                            {shiftLink.dayOfYear}
                                        </td>
                                        <td>
                                            {this.getShiftName(shiftLink.shiftId)}
                                        </td>
                                        <td>
                                            <div className="pull-right">
                                                <Button bsStyle="danger" onClick={this.showDeleteShiftLinkModal.bind(this, shiftLink.dayOfYear)}>
                                                    <span><Glyphicon glyph="remove"/> {'Delete'}</span>
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>)}
                                </tbody>
                            </Table>
                            <Button bsStyle="primary" onClick={this.goBack}>
                                <span><Glyphicon glyph="arrow-left"/> {'Go Back'}</span>
                            </Button>
                            <div className="pull-right">
                                <Button bsStyle="success" onClick={this.showLinkShiftModal}>
                                    <span><Glyphicon glyph="link"/> {'Link Shift'}</span>
                                </Button>
                            </div>
                            <LinkShiftModal
                                display={this.state.displayLinkShiftModal}
                                onDismiss={this.hideLinkShiftModal}
                                onSuccess={this.shiftSucessfullyLinked}
                                workerId={parseInt(this.props.params.workerId, 10)}
                            />
                            <DeleteModal
                                display={this.state.displayDeleteShiftLinkModal}
                                objectId={this.state.objectToDeleteId}
                                objectName={this.state.objectToDeleteName}
                                onDismiss={this.hideDeleteShiftLinkModal}
                                onSuccess={this.deleteShiftLink}
                            />
                        </Panel>
                    </Col>
                </Row>
            </Grid>
        );
    }
});

export default Schedule;
