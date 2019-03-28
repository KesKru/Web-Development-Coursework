import React from 'react';

export default function FaceRecognition({ user: { name, entries } }) {
  return (
    <div className="row justify-content-center">
      <div className="col-6 d-flex justify-content-center">
        <p className="rank">{`Hello ${name}, your rank is ${entries}`}</p>
      </div>
    </div>
  );
}
