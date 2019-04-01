import React from 'react';

export default function FaceRecognition({
  isLogedIn,
  user: { name, entries }
}) {
  return (
    <div className="row justify-content-center">
      <div className="col-6 d-flex justify-content-center">
        <p className="rank">
          {isLogedIn
            ? `Hello ${name}, your rank is ${entries}`
            : 'Please login to see your information'}
        </p>
      </div>
    </div>
  );
}
