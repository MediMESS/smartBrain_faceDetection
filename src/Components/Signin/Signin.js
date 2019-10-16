import React, {Component} from 'react';
import './Signin.css';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:'',
      password:''
    }
  }

  onEmailChange = (e) => {
    this.setState({email: e.target.value})
  }
  onPasswordChange = (e) => {
    this.setState({password: e.target.value})
  }
  onSubmitSignIn = () => {
    fetch(('http://localhost:3000/signin'), {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        email:this.state.email,
        password: this.state.password
      })
    })
    .then(resp=>resp.json())
    .then(user => {
      if(user)
      {
        this.props.loadUser(user);
        this.props.onRouteChange('signOut');
      }
    })
  }
  render() {
    return (
      <div className="signIn">
        <article className="br3 shadow-1 ba dark-gray b--black-10 w-100 w-50-m w-25-l mw7 center">
          <main className="pa4 black-80">
            <form className="measure">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="tc f1 fw6 ph0 mh0">Sign In</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="email"
                    name="email-address"
                    id="email-address"
                    onChange={this.onEmailChange} />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                  <input
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="password"
                    name="password"
                    id="password"
                    onChange = {this.onPasswordChange}/>
                </div>
              </fieldset>
              <div className="tc">
                <input
                  onClick= {this.onSubmitSignIn}
                  className="b ph3 pv2 input-reset b--black bg-transparent grow pointer f6"
                  type="submit"
                  value="Sign in" />
              </div>
            </form>
          </main>
        </article>
      </div>
    );
  }
}




export default Signin;
