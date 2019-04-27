import React from 'react';

export default function FaceRecognition({ imageUrl, box }) {
  return (
    <div className="row justify-content-center">
      <div className="col-6 d-flex justify-content-center">
        <div className="wrap">
          <img className="face" id="input-image" src={imageUrl} alt="" />
          <div className="bounding-box" style={{ ...box }} />
        </div>
      </div>
    </div>
  );
}
