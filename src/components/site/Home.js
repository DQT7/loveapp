import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { Button2, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import styled from 'styled-components';
// const Wrapper =  styled.div`

// background:red
// `
class Home extends React.Component {
  constructor() {
      super();
      this.state = {
          input: '/* add your jsx here */',
          output: '',
          err: ''
      }
  }
  update(e) {
    let code = e.target.value;
    try {
        this.setState({
            output: window.Babel
                .transform(code, { presets: ['es2015', 'react'] })
                .code,
            err: ''
        })
    }
    catch (err) {
        this.setState({ err: err.message })
    }
}


// var Home = (props) => {
  render() {
  return (
    
    <div>    
       
      <Jumbotron className= 'Home' >
      
      <h1 className="display-3">Love Easy,
      <br/>
      Fall Hard, 
      <br/>
      <b>but Manage WELL</b></h1>
      {/* <img src='https://images.unsplash.com/photo-1515871204537-49a5fe66a31f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a8e0a0bcf73f65a1ecfdb9b97ec7204c&auto=format&fit=crop&w=1948&q=80'className="bigPic"/> */}
     
        
        <p className="lead">Use this app as a way to manage and criticlly analyze your relationship.<br/><p>Hard conversations always start with your self.</p>
        </p>
       <p className="lead"></p>
       
       
       <FormGroup className="blackGlass">
       <Label className="goAhead" for="exampleEmail">CONTACT ME</Label>
          <Input type="text" name="text" id="exampletext" placeholder="Name" />
          <br/>
          <Input type="date" name="date" id="exampleDate" placeholder="Date" />
          <Label className="goAhead" for="exampleText">Comments/Questions</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
       
      </Jumbotron>
      
      
    </div>
   
  );
};
}
export default Home;