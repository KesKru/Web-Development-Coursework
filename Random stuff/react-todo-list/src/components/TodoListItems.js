import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoListItems extends Component {
  // Aplying style based on wether todo is completed or not
  setStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }


  render() {
    // Destructuring. Asigning values from object to variables. Has to be inside render(). 
    const { id, title } = this.props.todo;
    // accesing state this.sate.todos from app.js with this.props.todos. In react use .map() instead of forEach() for looping true arrays.
    // can return single top level html element, so nest things.
    return (
      // for style we can define variable below and pass it in or definine it inline.
      <li style={this.setStyle()}>
        <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />{title}
        <button onClick={this.props.delTodo.bind(this, id)}>x</button>
      </li>
    );
  }
}

// Specify data type of the props
TodoListItems.propTypes = {
  todo: PropTypes.object.isRequired
}

// Specify data type of the props
// const TodoListItemStyle = {
//   backgroundColor: 'rgb(240,240,240)',
//   listStyle: 'none'
// }

export default TodoListItems;
