import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Card from './components/robots/Card';
import Header from './components/layout/Header';
import Search from './components/robots/Search';
// import ErrorBoundary from './components/ErrorBoundary';
import { setSearchField } from './actions';
import { requestRobots } from './actions';

//-----------------------STATE AND ACTIONS TO PROPS-----------------------//

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  };
};

//-----------------------COMPONENT-----------------------//

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  //-----------------------RENDER-----------------------//

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;

    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return isPending ? (
      <h1>Loading...</h1>
    ) : (
      <div className="App">
        <Header />
        <div className="container">
          <Search onSearchChange={onSearchChange} />
          <div className="row">
            {filteredRobots.map((robot) => (
              <Card
                robotname={robot.name}
                catchPhrase={robot.company.catchPhrase}
                key={robot.id}
                id={robot.id}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

//-----------------------EXPORT AND CONNECT REDUX-----------------------//

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
