import CreateShiftModal from './createShiftModal.jsx';
import DeleteModal from './deleteModal.jsx';
import moment from 'moment';
import React from 'react';

import { Col, Glyphicon, Grid, Panel, Row, Table } from 'react-bootstrap';

const Shifts = React.createClass({
    propTypes: {
        store: React.PropTypes.object.isRequired
    },

    render () {
        var state = this.props.store.getState();

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
                                    {state.shifts.map(shift => <tr key={shift.id}>
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
                            <CreateShiftModal display/>
                        </Panel>
                    </Col>
                </Row>
            </Grid>
        );
    }
});

export default Shifts;
