import React, { Component } from 'react';

export class Search extends Component {
  render() {
    const { searchChange } = this.props;

    return (
      <div className="input-group mb-3 search">
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          onChange={searchChange}
        />
      </div>
    );
  }
}

export default Search;
