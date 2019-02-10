import React, { Component } from 'react';

class TodoListItems extends Component {
  render() {
    // accesing state this.sate.todos from app.js with this.props.todos. In react use .map() instead of forEach() for looping true arrays.
    return (
      <p>{this.props.todo.title}</p>
    );
  }
}

export default TodoListItems;
