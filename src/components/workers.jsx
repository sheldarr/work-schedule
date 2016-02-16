import actions from '../actions';
import CreateWorkerModal from './createWorkerModal.jsx';
import DeleteModal from './deleteModal.jsx';
import React from 'react';
import { Button, Col, Glyphicon, Grid, Panel, Row, Table } from 'react-bootstrap';

const Workers = React.createClass({
    propTypes: {
        store: React.PropTypes.object.isRequired
    },

    componentWillMount () {
        this.setState(this.props.store.getState());

        this.props.store.subscribe(() => {
            this.setState(this.props.store.getState());
        });
    },

    showCreateWorkerModal () {
        this.props.store.dispatch(actions.showCreateWorkerModal());
    },

    hideCreateWorkerModal () {
        this.props.store.dispatch(actions.hideCreateWorkerModal());
    },

    render () {
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
                                    {this.state.workers.map(worker => <tr key={worker.id}>
                                        <td>
                                            {worker.id}
                                        </td>
                                        <td>
                                            {worker.name}
                                        </td>
                                        <td>
                                        </td>
                                    </tr>)}
                                </tbody>
                            </Table>
                            <div className="pull-right" onClick={this.showCreateWorkerModal}>
                                <Button bsStyle="success">
                                    <span><Glyphicon glyph="plus"/> {'Create Worker'}</span>
                                </Button>
                            </div>
                            <CreateWorkerModal
                                display={this.state.modals.displayCreateWorkerModal}
                                onDismiss={this.hideCreateWorkerModal}
                                onSuccess={this.hideCreateWorkerModal}
                            />
                            <DeleteModal
                                display={this.state.modals.displayDeleteWorkerModal}
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

export default Workers;
