import React, { Component } from 'react';
import Contacts from './components/Contacts';
import Header from './components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header branding='Cantacts list !'/>
        <div className='container'>
          <Contacts />
        </div>
      </div>
    );
  }
}

export default App;
