import React from 'react';
import './Rank.css';

let rank = 5;
const Rank = ({currentUser}) => {
  return(
    <div className="rank tc white">
      {
        currentUser.id!=='' ?
          <div>
            <p className="mb0 mt4 f3">{currentUser.name}, your rank is ...</p>
            <p className="ma0 f2">#{currentUser.nbEntries}</p>
          </div>
        :
          <div>
            <p className="mb0 mt4 f3">Sign in to see your rank</p>
            <p className="ma0 f2">#0</p>
          </div>

      }

    </div>
  );
}

export default Rank;
