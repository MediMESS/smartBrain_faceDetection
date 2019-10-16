import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) => {
  if(isSignedIn){
    return (
      <div className="pa4 tr">
        <a href="#" onClick={() => onRouteChange("quitSession")} className="f3 link underline dim black">Sign Out</a>
      </div>
    );
  }
  else {
    return (
      <div className="pa4 tr">
        <a onClick={() => onRouteChange("signIn")} href="#" className="f3 link underline dim black mr4">Sign In</a>
        <a onClick={() => onRouteChange("register")} href="#" className="f3 link underline dim black">Register</a>
      </div>
    );
  }
}

export default Navigation;
