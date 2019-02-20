import React, { Component } from 'react';
import TodoListItems from './TodoListItems';
import PropTypes from 'prop-types';

class TodosList extends Component {

  render() {
    return (
      // accesing state this.sate.todos from app.js with this.props.todos. In react use map for looping true arrays.
      this.props.todos.map((todo) => (
        <TodoListItems 
        key={todo.id} 
        todo={todo} 
        markComplete={this.props.markComplete}
        delTodo ={this.props.delTodo}  />
      ))
    );
  }
}

// Specify data type of the props
TodosList.propTypes = {
  todos: PropTypes.array.isRequired
}

export default TodosList;
