import React, { Component } from 'react';
import './App.css';
import Card from './Card';
import Header from './Header';
import Search from './Search';
import users from './robots';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Search />
          <div className="row">
            {users.map((user) => (
              <Card
                username={user.name}
                catchPhrase={user.company.catchPhrase}
                key={user.id}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
