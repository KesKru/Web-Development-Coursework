import React, { Component } from 'react';
import './App.css';
import Card from './components/robots/Card';
import Header from './components/layout/Header';
import Search from './components/robots/Search';
// import ErrorBoundary from './components/ErrorBoundary';
// import usersData from './robots';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      searchield: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => this.setState({ users: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchield: event.target.value });
  };

  render() {
    const filteredRobots = this.state.users.filter((user) => {
      return user.name.toLowerCase().includes(this.state.searchield.toLowerCase());
    });

    return (
      <div className="App">
        <Header />
        <div className="container">
          <Search searchChange={this.onSearchChange} />
          <div className="row">
            {filteredRobots.map((user) => (
              <Card
                username={user.name}
                catchPhrase={user.company.catchPhrase}
                key={user.id}
                id={user.id}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
