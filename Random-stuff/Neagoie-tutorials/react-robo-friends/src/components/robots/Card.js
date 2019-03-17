import React from 'react';

export default function Card({ robotname, catchPhrase, id }) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-6">
      <div className="card robot-card">
        <img
          src={'https://robohash.org/' + id + '.png'}
          className="card-img-top"
          alt="robot profile"
        />
        <div className="card-body">
          <h5 className="card-title">{robotname}</h5>
          <p className="card-text">{catchPhrase}</p>
        </div>
      </div>
    </div>
  );
}
