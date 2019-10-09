import React from 'react';
import './Rank.css';

let rank = 5;
const Rank = () => {
  return(
    <div className="rank tc white">
      <p className="mb0 mt4 f3">Andrei, your rank is ...</p>
      <p className="ma0 f2">#{rank}</p>
    </div>
  );
}

export default Rank;
