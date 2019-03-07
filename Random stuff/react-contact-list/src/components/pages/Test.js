import React, { Component } from 'react'

export default class Test extends Component {

  componentDidMount(){
    console.log('componentDidMount...')
  }
  componentWillMount(){ //depreceiated
    console.log('componentWillMount...')
  }
  componentDidUpdate(){
    console.log('componentDidUpdate...')
  }
  componentWillUpdate(){ //depreceiated
    console.log('componentWillUpdate...')
  }
  UNSAFE_componentWillReceiveProps(nextProps, nextState){//depreceiated
    console.log('componentWillUpdate...')
    return null
  }
  static getDerivedStateFromProps(nextProps, nextState){//new 
    return null
  }
  getSnapshotBeforeUpdate(nextProps, nextState){//new 
    return null
  }

  render() {
    return (
      <div>
        <h1>Test component</h1>
      </div>
    )
  }
}
