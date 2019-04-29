import React from 'react';
import Tilt from 'react-tilt';
import LogoSvgData from './LogoSvgData';

export default function Logo() {
  return (
    <div className="row justify-content-center">
      <Tilt className="Tilt col-3 " options={{ max: 30 }}>
        <div className="Tilt-inner">
          <LogoSvgData />
        </div>
      </Tilt>
    </div>
  );
}
