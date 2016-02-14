import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import React from 'react';

import { Col, Grid, Panel, Row } from 'react-bootstrap';

BigCalendar.momentLocalizer(moment);

const Calendar = React.createClass({
    render () {
        return (
            <Grid>
                <Row>
                    <Col xs={12} xsOffset={1}>
                        <Panel header="Calendar" >
                            <BigCalendar
                                endAccessor="endDate"
                                events={[]}
                                startAccessor="startDate"
                            />
                        </Panel>
                    </Col>
                </Row>
         </Grid>
        );
    }
});

export default Calendar;
