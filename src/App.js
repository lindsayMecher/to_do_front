import React from 'react';
import ToDoContainer from './containers/ToDoContainer';
import NavBar from './components/NavBar.js';
import Login from './components/Login.js';
import About from './components/About.js';
import HomePage from './components/HomePage.js';
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
          <Route path="/about" component={About}/>
          <Route path="/login" component={Login}/>
          <Route exact path="/" component={HomePage}/>
          <Route path="/todos" component={ToDoContainer}/>
        </Switch>
        </Container>
      </Router>
    )
  }
}

export default App;
