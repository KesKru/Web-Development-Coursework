import React from 'react';

export default function ImageLinkForm() {
  return (
    <div className="row justify-content-center">
      <form className="col-6">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <button type="submit" className="btn btn-light btn-block">
          Submit
        </button>
      </form>
    </div>
  );
}
