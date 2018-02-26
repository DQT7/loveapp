import React from 'react';
import { Table, Button } from 'reactstrap';



const rLog = (props) => {

    return (
        <div>
            <h3>History</h3>
            <hr />
            <Table hover striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Result</th>
                        <th>Future Changes</th>
                        <th>Description</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.RLissues.map((RLissues, id) => {
                            return (
                                <tr key={id}>
                                    <th scope="row">{workout.id}</th>
                                    <td>{RLissues.result}</td>
                                    <td>{RLissues.futureChanges}</td>
                                    <td>{RLissues.description}</td>
                                    <td><Button id={workout.id} onClick={props.delete} color="danger">Delete</Button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default rLog;