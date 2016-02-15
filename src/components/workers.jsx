import React from 'react';
import { Col, Glyphicon, Grid, Panel, Row, Table } from 'react-bootstrap';

const Workers = React.createClass({
    propTypes: {
        store: React.PropTypes.object.isRequired
    },

    render () {
        var state = this.props.store.getState();

        return (
            <Grid>
                <Row>
                    <Col>
                        <Panel header={<span><Glyphicon glyph="user" /> {'Workers'}</span>}>
                            <Table hover striped>
                                <thead>
                                    <tr>
                                        <td>{'Id'}</td>
                                        <td>{'Name'}</td>
                                        <td></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {state.workers.map(worker => <tr key={worker.id}>
                                        <td>
                                            {worker.id}
                                        </td>
                                        <td>
                                            {worker.name}
                                        </td>
                                        <td>
                                            <div className="pull-right"></div>
                                        </td>
                                    </tr>)}
                                </tbody>
                            </Table>
                        </Panel>
                    </Col>
                </Row>
            </Grid>
        );
    }
});

export default Workers;
