import actions from '../actions';
import CreateShiftModal from './createShiftModal.jsx';
import DeleteModal from './deleteModal.jsx';
import moment from 'moment';
import React from 'react';

import { Button, Col, Glyphicon, Grid, Panel, Row, Table } from 'react-bootstrap';

const Shifts = React.createClass({
    propTypes: {
        store: React.PropTypes.object.isRequired
    },

    componentWillMount () {
        this.setState(this.props.store.getState());

        this.props.store.subscribe(() => {
            this.setState(this.props.store.getState());
        });
    },

    showCreateShiftModal () {
        this.props.store.dispatch(actions.showCreateShiftModal());
    },

    hideCreateShiftModal () {
        this.props.store.dispatch(actions.hideCreateShiftModal());
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
                                            <div className="pull-right"></div>
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
                                display={this.state.modals.displayCreateShiftModal}
                                onDismiss={this.hideCreateShiftModal}
                                onSuccess={this.hideCreateShiftModal}
                                store={this.props.store}
                            />
                            <DeleteModal
                                display={this.state.modals.displayDeleteShiftModal}
                                objectId={this.state.objectToDeleteId}
                                objectName={this.state.objectToDeleteName}
                            />
                        </Panel>
                    </Col>
                </Row>
            </Grid>
        );
    }
});

export default Shifts;
