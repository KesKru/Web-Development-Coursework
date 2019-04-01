import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Clarifai from 'clarifai';
// Componenets
import ParticlesAnimation from '../components/ParticlesAnimation/ParticlesAnimation';
import Navigation from '../components/Navigation/Navigation';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';
import Logo from '../components/Logo/Logo';
import FaceRecognition from '../components/FaceRecognition/FaceRecognition';
import Rank from '../components/Rank/Rank';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';

const app = new Clarifai.App({
  apiKey: '108d10a8214d4ad6b916cff95a07bb6e'
});

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      isLogedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
    };
  }

  loadUser = (userData) => {
    this.setState({
      user: {
        id: userData.id,
        name: userData.name,
        email: userData.email,
        entries: userData.entries,
        joined: userData.joined
      }
    });
  };

  isLogedInTrue = () => {
    this.setState({
      isLogedIn: true
    });
  };

  isLogedInFalse = () => {
    this.setState({
      imageUrl: '',
      isLogedIn: false,
      user: {}
    });
  };

  calculateFaceLocation = (data) => {
    const boundingBox =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('input-image');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      left: boundingBox.left_col * width,
      top: boundingBox.top_row * height,
      right: width - boundingBox.right_col * width,
      bottom: height - boundingBox.bottom_row * height
    };
  };

  displayFacebox = (box) => {
    this.setState({ box });
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onPictureSubmit = () => {
    const { input, user } = this.state;
    this.setState({ imageUrl: input, box: {} });
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, input)
      .then((response) => {
        if (response) {
          fetch('http://localhost:4000/image', {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
              id: user.id
            })
          })
            .then((res) => res.json())
            .then((res) => {
              this.setState({
                user: {
                  ...user,
                  entries: res
                }
              });
            });
        }
        this.displayFacebox(this.calculateFaceLocation(response));
      })
      .catch((err) => {
        console.log(err);
      });

    this.setState({ input: '' });
  };

  render() {
    const { input, imageUrl, box, user, isLogedIn } = this.state;
    const {
      onInputChange,
      onPictureSubmit,
      onLoginSubmit,
      onRegisterSubmit,
      loadUser,
      isLogedInTrue,
      isLogedInFalse
    } = this;
    return (
      <Router>
        <div className="App">
          {/* <ParticlesAnimation /> */}
          <Navigation
            isLogedIn={isLogedIn}
            isLogedInFalse={isLogedInFalse}
            isLogedInTrue={isLogedInTrue}
          />
          <main className="container">
            <Switch>
              <Route
                exact
                path="/"
                render={(routeProps) => (
                  <div>
                    <Logo />
                    <Rank user={user} isLogedIn={isLogedIn} />
                    <ImageLinkForm
                      // {...routeProps}
                      onInputChange={onInputChange}
                      onPictureSubmit={onPictureSubmit}
                      inputValue={input}
                    />
                    <FaceRecognition
                      // {...routeProps}
                      imageUrl={imageUrl}
                      box={box}
                    />
                  </div>
                )}
              />
              <Route
                exact
                path="/login"
                render={(routeProps) => (
                  <div>
                    <Logo />
                    <Login
                      onLoginSubmit={onLoginSubmit}
                      loadUser={loadUser}
                      isLogedInTrue={isLogedInTrue}
                    />
                  </div>
                )}
              />
              <Route
                exact
                path="/register"
                render={(routeProps) => (
                  <div>
                    <Logo />
                    <Register
                      onRegisterSubmit={onRegisterSubmit}
                      loadUser={loadUser}
                    />
                  </div>
                )}
              />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}
