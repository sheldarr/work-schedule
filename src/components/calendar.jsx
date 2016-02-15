import BigCalendar from 'react-big-calendar';
import mapper from '../mapper';
import moment from 'moment';
import React from 'react';

import { Col, Glyphicon, Grid, Panel, Row } from 'react-bootstrap';

BigCalendar.momentLocalizer(moment);

const Calendar = React.createClass({
    propTypes: {
        store: React.PropTypes.object.isRequired
    },

    render () {
        var state = this.props.store.getState();
        var events = mapper(state.workers, state.shifts);

        return (
            <Grid>
                <Row>
                    <Col>
                        <Panel header={<span><Glyphicon glyph="calendar" /> {'Calendar'}</span>}>
                            <BigCalendar
                                events={events}
                            />
                        </Panel>
                    </Col>
                </Row>
            </Grid>
        );
    }
});

export default Calendar;
