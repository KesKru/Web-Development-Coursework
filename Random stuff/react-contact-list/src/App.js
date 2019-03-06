import React, { Component } from 'react';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import Header from './components/layout/Header';
import { Provider } from './context';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding='Cantacts list !' />
          <div className='container'>
            <AddContact />
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
