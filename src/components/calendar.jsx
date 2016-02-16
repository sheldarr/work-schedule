import BigCalendar from 'react-big-calendar';
import mapper from '../mapper';
import moment from 'moment';
import React from 'react';
import request from 'superagent';

import { Button, Col, Glyphicon, Grid, Panel, Row } from 'react-bootstrap';

BigCalendar.momentLocalizer(moment);

const Calendar = React.createClass({
    propTypes: {
        params: React.PropTypes.object
    },

    getInitialState () {
        return {
            shifts: [],
            workers: []
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
                        workers: response.body.workers
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

    getWorker () {
        if (!this.props.params.workerId) {
            return undefined;
        }

        return this.state.workers.find(function (worker) { return parseInt(worker.id, 10) === parseInt(this.props.params.workerId, 10); }.bind(this));
    },

    goBack () {
        location.href = `#/workers`;
    },

    render () {
        var events = [];

        if (this.state.workers.length && this.state.shifts.length) {
            var worker = this.getWorker();
            events = worker ? mapper.mapWorker(worker, this.state.shifts) : mapper.mapWorkers(this.state.workers, this.state.shifts);
        }

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
