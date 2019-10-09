import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl, box}) => {
  return (
    <div className="center">
      <div className="relative ma2">
        <img id="face" src={imageUrl} width='500px' height='auto' />
        <div className="bounding-box" style={{top:box.top, left:box.left, right:box.right, bottom:box.bottom}}></div>
      </div>
    </div>
  );
}

export default FaceRecognition;
