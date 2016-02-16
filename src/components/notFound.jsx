import React from 'react';
import { Col, Glyphicon, Grid, Panel, Row } from 'react-bootstrap';

const NotFound = React.createClass({
    render () {
        return (
            <Grid>
                <Row>
                    <Col>
                        <Panel header={<span><Glyphicon glyph="question-sign" /> {'Page Not Found'}</span>}/>
                    </Col>
                </Row>
            </Grid>
        );
    }
});

export default NotFound;
