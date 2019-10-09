import React, {Component} from 'react';
import Navigation from '../Components/Navigation/Navigation';
import Logo from '../Components/Logo/Logo';
import Rank from '../Components/Rank/Rank';
import ImageLinkForm from '../Components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from '../Components/FaceRecognition/FaceRecognition';
import Signin from '../Components/Signin/Signin';
import Register from '../Components/Register/Register';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import {particlesOptions} from '../Components/ParticlesOptions/ParticlesOptions';
import './App.css';

const app = new Clarifai.App({apiKey: '10d3b6cad7784da888c80248fa4f2bca'});
class App extends Component{
  constructor() {
    super();
    this.state = {
      input:'',
      imageUrl:'',
      box: {},
      route: 'home',
      isSignedIn: false
    };
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
    if(this.state.input!="")
    {
      this.setState({imageUrl: this.state.input});
      app.models.predict(
        Clarifai.FACE_DETECT_MODEL, this.state.input).then( (data) =>
          {
            this.setFaceBox(this.calculateFaceLocation(data))
          }).catch(err => console.log(err));
    }
  }

  onRouteChange = (curr_route) => {
    this.setState({route: curr_route});
    if (curr_route == "signOut")
        this.setState({isSignedIn:true});
    // reload the page when sign out
    else if (curr_route == "quitSession")
    {
      this.setState({isSignedIn:true});
      window.location.reload();
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
          console.log(this.state.isSignedIn), console.log(this.state.route),
          this.state.route == "signIn" ?
            <Signin onRouteChange={this.onRouteChange}/>
            :
            this.state.route == "register" ?
              <Register onRouteChange={this.onRouteChange}/>
              :
              <div>
                <Logo />
                <Rank />
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
