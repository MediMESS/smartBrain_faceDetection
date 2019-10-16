import React, {Component} from 'react';
import './Register.css';

class Register extends Component {
  constructor(props){
    super(props);
    this.state={
      name:'',
      email:'',
      password:''
    }
  }

  onNameChange = (e) => {
    this.setState({name: e.target.value})
  }
  onEmailChange = (e) => {
    this.setState({email: e.target.value})
  }
  onPasswordChange = (e) => {
    this.setState({password: e.target.value})
  }
  onSubmitRegister = () => {
    if(this.state.email === "" || this.state.password === "" || this.state.name === ""){
      alert("Empty Field, Please fill the empty field with you information");
      throw "Empty Field, Please fill the empty field with you information";
    }
    fetch(('http://localhost:3000/register'), {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        name: this.state.name,
        password: this.state.password
      })
    })
    .then(resp=>resp.json())
    .then(data => {
      alert(data);
    });
    this.props.onRouteChange('signOut');
  }

  render() {
    const {onRouteChange} = this.props;
    return (
      <div className="register">
        <article className="br3 shadow-1 ba dark-gray b--black-10 w-100 w-50-m w-25-l mw7 center">
          <main className="pa4 black-80">
            <form className="measure">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="tc f1 fw6 ph0 mh0">Register</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="name">Full Name</label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="text"
                    name="name"
                    id="name"
                    onChange = {this.onNameChange}/>
                </div>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="email"
                    name="email-address"
                    id="email-address"
                    onChange = {this.onEmailChange}/>
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
                <input onClick={this.onSubmitRegister} className="b ph3 pv2 input-reset b b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" />
              </div>
            </form>
          </main>
        </article>
      </div>
    );
  }
}



  export default Register;
