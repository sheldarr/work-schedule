import CreateWorkerModal from './createWorkerModal.jsx';
import DeleteModal from './deleteModal.jsx';
import React from 'react';
import request from 'superagent';
import { Button, Col, Glyphicon, Grid, Panel, Row, Table } from 'react-bootstrap';

const Workers = React.createClass({
    getInitialState () {
        return {
            displayCreateWorkerModal: false,
            displayDeleteWorkerModal: false,
            workers: [],
            objectToDeleteId: 0,
            objectToDeleteName: ''
        };
    },

    componentWillMount () {
        this.downloadWorkers();
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

    redirectToWorkerCalendar (workerId) {
        location.href = `#/workers/${workerId}/calendar`;
    },

    redirectToWorkerSchedule (workerId) {
        location.href = `#/workers/${workerId}/schedule`;
    },

    showCreateWorkerModal () {
        this.setState({ displayCreateWorkerModal: true });
    },

    hideCreateWorkerModal () {
        this.setState({ displayCreateWorkerModal: false });
    },

    showDeleteWorkerModal (workerId, workerName) {
        this.setState({
            displayDeleteWorkerModal: true,
            objectToDeleteId: workerId,
            objectToDeleteName: workerName
        });
    },

    hideDeleteWorkerModal () {
        this.setState({
            displayDeleteWorkerModal: false,
            objectToDeleteId: 0,
            objectToDeleteName: ''
        });
    },

    deleteWorker (workerId) {
        this.hideDeleteWorkerModal();

        request
            .del(`http://127.0.0.1:5000/worker/${workerId}`)
            .end((error, response) => {
                if (error || !response.ok) {
                    alert('Api Error');
                } else {
                    this.downloadWorkers();
                }
            });
    },

    workerSucessfullyCreated () {
        this.downloadWorkers();
        this.hideCreateWorkerModal();
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
                                                <Button bsStyle="info" onClick={this.redirectToWorkerSchedule.bind(this, worker.id)} style={{marginLeft: 10}}>
                                                    <span><Glyphicon glyph="time"/> {'Schedule'}</span>
                                                </Button>
                                                <Button bsStyle="info" onClick={this.redirectToWorkerCalendar.bind(this, worker.id)} style={{marginLeft: 10}}>
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
                                display={this.state.displayCreateWorkerModal}
                                onDismiss={this.hideCreateWorkerModal}
                                onSuccess={this.workerSucessfullyCreated}
                            />
                            <DeleteModal
                                display={this.state.displayDeleteWorkerModal}
                                objectId={this.state.objectToDeleteId}
                                objectName={this.state.objectToDeleteName}
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
