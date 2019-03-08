import React, { Component } from 'react'

export default class Test extends Component {
  state = {
    title: '',
    id: ''
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          title: data.title,
          id: data.id
        })
      })
  }

  // componentWillMount(){ //depreceiated
  //   console.log('componentWillMount...')
  // }
  // componentDidUpdate(){
  //   console.log('componentDidUpdate...')
  // }
  // componentWillUpdate(){ //depreceiated
  //   console.log('componentWillUpdate...')
  // }
  // UNSAFE_componentWillReceiveProps(nextProps, nextState){//depreceiated
  //   console.log('componentWillUpdate...')
  //   return null
  // }
  // static getDerivedStateFromProps(nextProps, nextState){//new 
  //   return null
  // }
  // getSnapshotBeforeUpdate(nextProps, nextState){//new 
  //   return null
  // }

  render() {
    const { id, title } = this.state;
    return (
      <div>
        <h1>{id} </h1>
        <h1>{title} </h1>
      </div>
    )
  }
}
