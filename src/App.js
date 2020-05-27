import React from 'react';
import ToDoContainer from './components/ToDoContainer';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch();

  console.log(counter)
  return (
    <div className="App">
      <h1>Ta-Da!</h1>
      <h3>Accomplishing so many tasks you feel like a wizard.</h3>
      <h3>You currently have {counter} Ta-Das.</h3>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(5))}>-</button>
      <h3>You are currently {isLogged ? "logged in." : "not logged in."}</h3>
      <ToDoContainer/>
    </div>
  );
}

export default App;
