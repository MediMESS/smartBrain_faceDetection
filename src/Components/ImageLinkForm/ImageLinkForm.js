import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
  return (
    <div className="tc">
      <p className="tracked-mega mb0">This Magic Brain will detect faces in your pictures. Give it a try!</p>
      <div className="search pa4">
        <input
          className="pa2 w-70"
          type="text"
          onInput={onInputChange}
          placeholder="Enter URL Here" />
        <button
          onClick={onButtonSubmit}
          className="ba w-30 bg-light-purple grow white pa2"
          style={{cursor:'pointer'}}>Detect</button>
      </div>

    </div>
  );
}



export default ImageLinkForm;
