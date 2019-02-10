import React, { Component } from 'react';
import TodoListItems from './TodoListItems';

class TodosList extends Component {
  render() {
    return(
      // accesing state this.sate.todos from app.js with this.props.todos. In react use map for looping true arrays.
      this.props.todos.map((todo) => (
        <TodoListItems key={todo.id} todo={todo} />
        ))
    );
  }
}

export default TodosList;
