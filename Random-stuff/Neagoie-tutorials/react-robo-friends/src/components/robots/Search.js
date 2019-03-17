import React from 'react';

export default function Search({ onSearchChange }) {
  return (
    <div className="input-group mb-3 search">
      <input
        type="text"
        className="form-control"
        placeholder="Search..."
        onChange={onSearchChange}
      />
    </div>
  );
}
