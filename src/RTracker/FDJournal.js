import React from 'react';
import RLissues from './RLissues';
import { Container, Row, Col } from 'reactstrap';
// import Rlog from './rLog';

// this works with the current workout log server, if there server is on a differnt port, they need to change the respective lines for fetch

class FDJournal extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            date:'',
           firstDate: []
        }

        this.fetchfirstDate = this.fetchfirstDate.bind(this);
        this.updatefirstDateArray = this.updatefirstDateArray.bind(this);
        this.Delete = this.firstDateDelete.bind(this);
    }

    componentWillMount(){
        this.fetchfirstDate()
    }

    fetchfirstDate(){
        fetch("http://localhost:3000/api/log", {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
              })
        })
        .then((res) => res.json())
        .then((logData) => {
            return this.setState({firstDate: logData})
        })
    }

    updatefirstDateArray(){
        this.fetchfirstDate()
    }

    firstDateDelete(event){
        fetch("http://localhost:3000/api/log", {
            method: 'DELETE',
            body: JSON.stringify({log: {id:event.target.id}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
              })
        })
        .then((res) => this.updateFDJournalArray())
    }

    render() {
        // const FirstDate = this.state.firstDate >= 1 ? <Rlog firstDate={this.state.firstDate} token={this.props.token} delete={this.firstDateDelete}/> : <h2></h2> 

        return (
            <Container>
            <Row>
                <Col md="3">
                    <FDJournal token = {this.props.token} updatefirstDateArray={this.updatefirstDateArray}/>
                </Col>
                <Col md="9">
                    {/* {FirstDate} */}
                </Col>
            </Row>
        </Container>
        )
    }
}

export default FDJournal