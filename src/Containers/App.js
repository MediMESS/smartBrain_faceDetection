import React, {Component} from 'react';
import Navigation from '../Components/Navigation/Navigation';
import Logo from '../Components/Logo/Logo';
import Rank from '../Components/Rank/Rank';
import ImageLinkForm from '../Components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from '../Components/FaceRecognition/FaceRecognition';
import Signin from '../Components/Signin/Signin';
import Register from '../Components/Register/Register';
import Particles from 'react-particles-js';
import {particlesOptions} from '../Components/ParticlesOptions/ParticlesOptions';
import './App.css';


const initialState = {
  input:'',
  imageUrl:'',
  box: {},
  route: 'home',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    nbEntries: 0,
    joined: ''
  }
}
class App extends Component{
  constructor() {
    super();
    this.state = {
      input:'',
      imageUrl:'',
      box: {},
      route: 'home',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        nbEntries: 0,
        joined: ''
      }
    }
  }

  loadUser = (userInfo) => {
    this.setState({
      user:{
        id:userInfo.id,
        name:userInfo.name,
        email:userInfo.email,
        nbEntries: userInfo.nbEntries,
        joined: userInfo.joined
      }
    });
  }
  onInputChange = (e) => {
    this.setState({input: e.target.value});
  }

  calculateFaceLocation = (data) => {
    const bounding_box = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('face');
    const height = image.height;
    const width = image.width;
    return {
      top: height * bounding_box.top_row,
      left: width * bounding_box.left_col,
      right: width - (bounding_box.right_col * width),
      bottom: height - (bounding_box.bottom_row  * height)
    };
  }

  setFaceBox = (faceBox) => {
    this.setState({box:faceBox});
  }
  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    fetch(('https://immense-thicket-78677.herokuapp.com/imageurl'), {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        input: this.state.input
      })
    })
    .then(response => response.json())
    .then(response => {
      if(response)
      {
        fetch(('https://immense-thicket-78677.herokuapp.com/image'), {
          method: 'put',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({id:this.state.user.id})
        })
        .then(response=>response.json())
        .then(count => {
            this.setState(Object.assign(this.state.user, {nbEntries: count}))
        })
        .catch(console.log)
      }
      this.setFaceBox(this.calculateFaceLocation(response));
    })
    .catch(err => console.log(err));
  }

  onRouteChange = (curr_route) => {
    this.setState({route: curr_route});
    if (curr_route === "signOut")
    {
      this.setState({isSignedIn:true});
    }
    // reload the page when sign out
    else if (curr_route === "quitSession")
    {
      this.setState(initialState);
    }
    else
      this.setState({isSignedIn:false});
  }

  render() {
    return  (
      <div className="App">
        <Particles className="Particles" params={particlesOptions}/>
        <div className="app_content">
          <Navigation
            onRouteChange = {this.onRouteChange}
            isSignedIn = {this.state.isSignedIn} />
        {
          this.state.route === "signIn" ?
            <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            :
            this.state.route === "register" ?
              <Register onRouteChange={this.onRouteChange}/>
              :
              <div>
                <Logo />
                <Rank currentUser={this.state.user}/>
                <ImageLinkForm
                  onInputChange = {this.onInputChange}
                  onButtonSubmit = {this.onButtonSubmit} />
                <FaceRecognition
                  imageUrl={this.state.imageUrl}
                  box = {this.state.box} />
              </div>
        }
        </div>
      </div>
    );
  }
}

export default App;
