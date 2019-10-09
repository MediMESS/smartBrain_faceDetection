import React from 'react';
import './Logo.css';
import Tilt from 'react-tilt'


const Logo = () => {
  return (
    <Tilt className="Tilt" options={{ max : 35 }} style={{ height: 100, width: 150 }} >
      <div className="pl5">
        <img className="brain shadow-1 pa2" alt="logo" src="https://img.icons8.com/wired/100/000000/brain.png"/>
      </div>
    </Tilt>
  );
}

export default Logo;
