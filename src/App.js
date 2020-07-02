import React from 'react';
import ToDoContainer from './containers/ToDoContainer';
import NavBar from './components/NavBar.js';
import Login from './components/Login.js';
import SignUp from './components/SignUp.js';
import './App.css';
import { Container, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends React.Component{
  
  render(){
    return(
      <Router>
        <Container>
          <NavBar />
        <Switch>
          <Route path="/signup" component={SignUp}/>
          <Route path="/login" component={Login}/>
          <Route path="/todos" component={ToDoContainer}/>
        </Switch>
        </Container>
      </Router>
    )
  }
}

export default App;
