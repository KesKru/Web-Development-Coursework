import React, { Component } from 'react';
import './App.css';
import TodosList from './components/TodosList';
import Header from './components/Header';

class App extends Component {
  // top level place to control date, it all tricles down from here to other components as props.
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with wife',
        completed: false
      },
      {
        id: 3,
        title: 'Meeting with boss',
        completed: false
      }
    ]
  }
  // App is top level component. render() is where all aother components are nested. State is pases to components as html atribute.
  render() {
    return (
      <div className="App">
        <Header/>
        <TodosList todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
