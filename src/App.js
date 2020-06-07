import React from 'react';
import ToDoContainer from './containers/ToDoContainer';
import NavBar from './components/NavBar.js';
import Login from './components/Login.js';
import About from './components/About.js';
import HomePage from './components/HomePage.js';
import './App.css';
import { connect } from 'react-redux';
import { fetchTodos } from './actions/index';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends React.Component{

  componentDidMount(){
    this.props.fetchTodos()
  }
  
  render(){
    console.log(this.props.todos)
    return(
      <Router>
        <div>
          <NavBar />
        <Switch>
          <Route path="/about" component={About}/>
          <Route path="/login" component={Login}/>
          <Route path="/homepage" component={HomePage}/>
          <Route path="/todos" component={ToDoContainer}/>
        </Switch>
        </div>
      </Router>
    )
  }
}

const mapDispatchToProps = state => {
  return {
    todos: state.todos.todos,
    loading: state.loading
  }
}

export default connect(mapDispatchToProps, { fetchTodos })(App);
