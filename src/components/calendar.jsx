import BigCalendar from 'react-big-calendar';
import mapper from '../mapper';
import moment from 'moment';
import React from 'react';

import { Button, Col, Glyphicon, Grid, Panel, Row } from 'react-bootstrap';

BigCalendar.momentLocalizer(moment);

const Calendar = React.createClass({
    propTypes: {
        params: React.PropTypes.object,
        store: React.PropTypes.object.isRequired
    },

    getWorker () {
        var state = this.props.store.getState();

        if (!this.props.params.workerId) {
            return undefined;
        }

        return state.workers.find(function (worker) { return parseInt(worker.id, 10) === parseInt(this.props.params.workerId, 10); }.bind(this));
    },

    goBack () {
        location.href = `#/workers`;
    },

    render () {
        var state = this.props.store.getState();

        var worker = this.getWorker();
        var events = worker ? mapper.mapWorker(worker, state.shifts) : mapper.mapWorkers(state.workers, state.shifts);

        return (
            <Grid>
                <Row>
                    <Col>
                        <Panel header={<span><Glyphicon glyph="calendar" /> {'Calendar'}</span>}>
                            <BigCalendar
                                events={events}
                            />
                            {this.props.params.workerId
                                ? <Button bsStyle="primary" onClick={this.goBack} style={{marginTop: 10}}>
                                    <span><Glyphicon glyph="arrow-left"/> {'Go Back'}</span>
                                </Button>
                                : null}
                        </Panel>
                    </Col>
                </Row>
            </Grid>
        );
    }
});

export default Calendar;
