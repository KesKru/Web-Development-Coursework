import React, { Component } from 'react';

class Card extends Component {
  render() {
    const { username, catchPhrase } = this.props;
    return (
      <div className="col-4">
        <div className="card robot-card">
          <img
            src={'https://robohash.org/' + username + '.png'}
            className="card-img-top"
            alt="robot profile"
          />
          <div className="card-body">
            <h5 className="card-title">{username}</h5>
            <p className="card-text">{catchPhrase}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
