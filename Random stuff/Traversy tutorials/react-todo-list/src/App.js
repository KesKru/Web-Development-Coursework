import React, { Component } from 'react';
import uuid from 'uuid';
import './App.css';
import TodosList from './components/TodosList';
import Header from './components/Header';
import AddNewTodo from './components/AddNewTodo';

class App extends Component {
  // top level place to control date, it all tricles down from here to other components as props.
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Dinner with wife',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Meeting with boss',
        completed: false
      }
    ]
  }

  // Toggle complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }

  // delete todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  // Add new todo
  AddNewTodo = (newTodo) => {
   const newTodoToAdd = {
      id: uuid.v4(),
      title: newTodo,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodoToAdd] });
  }

  // App is top level component. render() is where all aother components are nested. State is pases to components as html atribute.
  render() {
    return (
      <div className="App">
        <Header />
        <AddNewTodo
          AddNewTodo={this.AddNewTodo} />
        <TodosList
          todos={this.state.todos}
          markComplete={this.markComplete}
          delTodo={this.delTodo} />
      </div>
    );
  }
}

export default App;
