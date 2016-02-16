import actions from '../actions';
import LinkShiftModal from './linkShiftModal.jsx';
import DeleteModal from './deleteModal.jsx';
import moment from 'moment';
import React from 'react';
import { Button, Col, Glyphicon, Grid, Panel, Row, Table } from 'react-bootstrap';

const Schedule = React.createClass({
    propTypes: {
        params: React.PropTypes.object,
        store: React.PropTypes.object.isRequired
    },

    componentWillMount () {
        this.setState(this.props.store.getState());

        this.props.store.subscribe(() => {
            this.setState(this.props.store.getState());
        });
    },

    showLinkShiftModal () {
        this.props.store.dispatch(actions.showLinkShiftModal());
    },

    hideLinkShiftModal () {
        this.props.store.dispatch(actions.hideLinkShiftModal());
    },

    showDeleteShiftLinkModal (dayOfYear) {
        this.props.store.dispatch(actions.showDeleteShiftLinkModal(dayOfYear));
    },

    hideDeleteShiftLinkModal () {
        this.props.store.dispatch(actions.hideDeleteShiftLinkModal());
    },

    deleteShiftLink (dayOfYear) {
        this.props.store.dispatch(actions.hideDeleteShiftLinkModal());
        this.props.store.dispatch(actions.deleteShiftLink(parseInt(this.props.params.workerId, 10), dayOfYear));
    },

    getWorker () {
        return this.state.workers.find(function (worker) { return parseInt(worker.id, 10) === parseInt(this.props.params.workerId, 10); }.bind(this));
    },

    getShift (shiftId) {
        return this.state.shifts.find((shift) => {
            return parseInt(shift.id, 10) === parseInt(shiftId, 10);
        });
    },

    goBack () {
        location.href = `#/workers`;
    },

    render () {
        var worker = this.getWorker();

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
                                    {worker.schedule.map(shiftLink => <tr key={`${shiftLink.dayOfYear}_${shiftLink.shiftId}`}>
                                        <td>
                                            {moment().dayOfYear(shiftLink.dayOfYear).format('D.MM.YYYY')}
                                        </td>
                                        <td>
                                            {shiftLink.dayOfYear}
                                        </td>
                                        <td>
                                            {this.getShift(shiftLink.shiftId).name}
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
                                display={this.state.modals.displayLinkShiftModal}
                                onDismiss={this.hideLinkShiftModal}
                                onSuccess={this.hideLinkShiftModal}
                                store={this.props.store}
                                workerId={parseInt(this.props.params.workerId, 10)}
                            />
                            <DeleteModal
                                display={this.state.modals.displayDeleteShiftLinkModal}
                                objectId={this.state.modals.objectToDeleteId}
                                objectName={this.state.modals.objectToDeleteName}
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
