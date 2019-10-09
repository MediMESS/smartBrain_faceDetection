import React from 'react';
import './Register.css';

const Register = ({onRouteChange}) => {
  return (
    <div className="register">
      <article className="br3 shadow-1 ba dark-gray b--black-10 w-100 w-50-m w-25-l mw7 center">
        <main className="pa4 black-80">
          <form className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="tc f1 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">Full Name</label>
                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name" />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="confirm-password">Confirm Password</label>
                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="confirm-password"  id="confirm-password"/>
              </div>
            </fieldset>
            <div className="tc">
              <input onClick={() => onRouteChange('signIn')} className="b ph3 pv2 input-reset b b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" />
            </div>
          </form>
        </main>
      </article>
    </div>
  );
}




export default Register;
