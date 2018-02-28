import React from 'react';

import { Container, Row, Col } from 'reactstrap';
import {Button,Form,FormGroup,Label,Input} from 'reactstrap';
import {Link} from 'react-router-dom';


// import Rlog from './rLog';

// this works with the current workout log server, if there server is on a differnt port, they need to change the respective lines for fetch

class FDJournal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      description:'',
      firstDate:'',
      User:'',
      date: '',
    };

    this.fetchfirstDate = this.fetchfirstDate.bind(this);
    this.updatefirstDateArray = this.updatefirstDateArray.bind(this);
    this.Delete = this.firstDateDelete.bind(this);
  }

  componentWillMount() {
    this.fetchfirstDate();
  }

  fetchfirstDate() {
    fetch("http://localhost:3000/api/FisstDate", {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.props.token
      })
    })
    .then((res) => res.json())
    .then((logData) => {
      return this.setState({firstDate: logData})
    });
  }

  updatefirstDateArray() {
    this.fetchfirstDate();
  }

  firstDateDelete(event) {
    fetch("http://localhost:3000/api/firstDate", {
      method: 'DELETE',
      body: JSON.stringify({lfirstDate: {id:event.target.id}}),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.props.token
      })
    })
    .then((res) => this.updateFDJournalArray());
  }

  render() {
    // const FirstDate = this.state.firstDate >= 1 ? <Rlog firstDate={this.state.firstDate} token={this.props.token} delete={this.firstDateDelete}/> : <h2>Love is great</h2>
    return (
      <Container>
        <FormGroup>
          <Label for="">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
      </Container>
    );
  }
}

export default FDJournal;
