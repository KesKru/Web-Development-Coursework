import React, { Component } from 'react';

export class Search extends Component {
  render() {
    return (
      <div className="input-group mb-3 search">
        <input type="text" className="form-control" placeholder="Search..." />
      </div>
    );
  }
}

export default Search;
