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

    redirectToWorkerCalendar (workerId) {
        location.href = `#/calendar/${workerId}`;
    },

    showDeleteWorkerModal (workerId, workerName) {
        this.props.store.dispatch(actions.showDeleteWorkerModal(workerId, workerName));
    },

    hideDeleteWorkerModal () {
        this.props.store.dispatch(actions.hideDeleteWorkerModal());
    },

    deleteWorker (workerId) {
        this.props.store.dispatch(actions.hideDeleteWorkerModal());
        this.props.store.dispatch(actions.deleteWorker(workerId));
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
                                            <div className="pull-right">
                                                <Button bsStyle="info" onClick={this.redirectToWorkerCalendar.bind(this, worker.id)}>
                                                    <span><Glyphicon glyph="calendar"/> {'Calendar'}</span>
                                                </Button>
                                                <Button bsStyle="danger" onClick={this.showDeleteWorkerModal.bind(this, worker.id, worker.name)} style={{marginLeft: 10}}>
                                                    <span><Glyphicon glyph="remove"/> {'Delete'}</span>
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>)}
                                </tbody>
                            </Table>
                            <div className="pull-right">
                                <Button bsStyle="success" onClick={this.showCreateWorkerModal}>
                                    <span><Glyphicon glyph="plus"/> {'Create Worker'}</span>
                                </Button>
                            </div>
                            <CreateWorkerModal
                                display={this.state.modals.displayCreateWorkerModal}
                                onDismiss={this.hideCreateWorkerModal}
                                onSuccess={this.hideCreateWorkerModal}
                                store={this.props.store}
                            />
                            <DeleteModal
                                display={this.state.modals.displayDeleteWorkerModal}
                                objectId={this.state.modals.objectToDeleteId}
                                objectName={this.state.modals.objectToDeleteName}
                                onDismiss={this.hideDeleteWorkerModal}
                                onSuccess={this.deleteWorker}
                            />
                        </Panel>
                    </Col>
                </Row>
            </Grid>
        );
    }
});

export default Workers;
