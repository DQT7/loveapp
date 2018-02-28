import React from 'react'

import { Container, Row, Col } from 'reactstrap';
import {Button,Form,FormGroup,Label,Input}from 'reactstrap';

class RLissues extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            problems: "",
            solutions: ""
         
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    handleSubmit(event) {
        event.preventDefault();

        fetch("http://localhost:3000/api/rsi", {
            method: 'POST',
            body: JSON.stringify({ rsi: this.state }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            })
        })
            .then((res) => res.json())
            .then((rsiData) => {
                // console.log(this.props)
                // this.props.updateRLissuesArray()
                // this is where you would clear out the fields 
            })
    }
   

    render() {
        return (
            <Container>
                <Row>
                    <div className="">
                        <h3>Relationship Issues</h3>
                        <hr />
               
                        <Form onSubmit={this.handleSubmit} >
                            {/* result */}
                            <Col xl="6" xl="6"> 
                                <FormGroup>
                                    <Label for="problems">Result</Label>
                                    <Input id="problems" type="text" name="problems" placeholder="enter result" onChange={this.handleChange} />
                                </FormGroup>
                                {/* definition */}
                            </Col>
                            <Col xl="6" xl="6">
                                <FormGroup>
                                    <Label for="problems">Type</Label>
                                    <Input type="select"    name="problems" id="problems" onChange={this.handleChange} placeholder="Type">
                                        <option></option>
                                        <option value="">Money</option>
                                        <option value="">Intimacy</option>
                                        <option value="">Family Members</option>
                                   </Input>
                                </FormGroup>
                                {/* description */}
                                <FormGroup>
                                    <Label for="solutions">Foundation</Label>
                                    <Input id="solutions" type="text" name="solutions" placeholder="enter description" onChange={this.handleChange} />
                                </FormGroup>
                                <Button type="submit" color="primary"> Submit </Button>
                            </Col>
                        </Form>
                     </div>
                </Row>
            </Container>
        )
    }
}

export default RLissues;