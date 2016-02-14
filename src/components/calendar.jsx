import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import React from 'react';

import { Col, Grid, Panel, Row } from 'react-bootstrap';

BigCalendar.momentLocalizer(moment);

const Calendar = React.createClass({
    getInitialState () {
        return {
            events: [{
                'title': 'I',
                'start': new Date(2016, 1, 1, 0, 0),
                'end': new Date(2016, 1, 1, 8, 0)
            }, {
                'title': 'II',
                'start': new Date(2016, 1, 2, 8, 0),
                'end': new Date(2016, 1, 2, 16, 0)
            }, {
                'title': 'III',
                'start': new Date(2016, 1, 3, 16, 0),
                'end': new Date(2016, 1, 3, 23, 59)
            }, {
                'title': 'I',
                'start': new Date(2016, 1, 4, 0, 0),
                'end': new Date(2016, 1, 4, 8, 0)
            }, {
                'title': 'II',
                'start': new Date(2016, 1, 5, 8, 0),
                'end': new Date(2016, 1, 5, 16, 0)
            }, {
                'title': 'III',
                'start': new Date(2016, 1, 6, 16, 0),
                'end': new Date(2016, 1, 6, 23, 59)
            }]
        };
    },

    render () {
        return (
            <Grid>
                <Row>
                    <Col xs={12} xsOffset={1}>
                        <Panel header="Calendar" >
                            <BigCalendar
                                events={this.state.events}
                            />
                        </Panel>
                    </Col>
                </Row>
         </Grid>
        );
    }
});

export default Calendar;
