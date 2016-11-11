import React from 'react'
import { render } from 'react-dom'
import {Col, Row, Grid, Button} from 'react-bootstrap'
import * as firebase from "firebase";

var config = {
    apiKey: "AIzaSyAug1no7K0H7aBEJFY1574PqfsMw3C6w9w",
    authDomain: "media-representation.firebaseapp.com",
    databaseURL: "https://media-representation.firebaseio.com",
    storageBucket: "media-representation.appspot.com",
    messagingSenderId: "63776445483"
  };
  firebase.initializeApp(config);
  
  var database = firebase.database();
  


class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      occupation: '',
      gender: '',
      bio: 'Tell us about yourself',
      email: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(update) {
    this.setState(Object.assign({}, this.state, update));
  }

  handleSubmit(event) {
    var submission = database.ref('submissions').push()
    submission.set(this.state);
  }

  render() {
    return (
    <Grid>
    <Row className="show-grid">
    <Col md={4} xs={8} xsOffset={2} mdOffset={4}>
      <form onSubmit={this.handleSubmit}>
        <p>Name:</p>  
        <input type="text" value={this.state.name}
          onChange={(event) => {this.handleChange({name: event.target.value})}} />
        <p>Age:</p>  
        <input type="text" value={this.state.age}
          onChange={(event) => {this.handleChange({age: event.target.value})}} />
        <p>Gender:</p>  
        <input type="text" value={this.state.gendr}
          onChange={(event) => {this.handleChange({gender: event.target.value})}} />
        <p>Occupation:</p>
        <input type="text" value={this.state.occupation}
          onChange={(event) => {this.handleChange({occupation: event.target.value})}} />
        <p>Bio:</p>
        <textarea value={this.state.bio} 
          onChange={(event) => {this.handleChange({bio: event.target.value})}} />
        <p>Email:</p>  
        <input type="text" value={this.state.email}
          onChange={(event) => {this.handleChange({email: event.target.value})}} />
          <p></p>
          <input type="submit" value="Submit" />
        </form>
        </Col>
      </Row>
      </Grid>
    );
  }
}

render(
  <EssayForm />,
  document.getElementById('root')
)

