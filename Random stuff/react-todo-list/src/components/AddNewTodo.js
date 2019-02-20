import React, { Component } from 'react';

class AddNewTodo extends Component {
  state = {
    newTodo: ''
  }

  changeTodoState = (e) => this.setState({ [e.target.name]: e.target.value });

  Submit = (e) => {
    e.preventDefault();
    this.props.AddNewTodo(this.state.newTodo);
    this.setState({ newTodo: '' })
  }

  render() {
    return (
      <li>
        <form onSubmit={this.Submit} >
          <input
            id='new-todo'
            type="text"
            name='newTodo'
            value={this.state.newTodo}
            onChange={this.changeTodoState}
            placeholder='Add new todo...' />
        </form>
      </li>
    );
  }
}

export default AddNewTodo;
