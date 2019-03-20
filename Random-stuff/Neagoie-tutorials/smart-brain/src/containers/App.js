import React, { Component } from 'react';
import Clarifai from 'clarifai';
import ParticlesAnimation from '../components/ParticlesAnimation/ParticlesAnimation';
import Navigation from '../components/Navigation/Navigation';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';
import Logo from '../components/Logo/Logo';
import FaceRecognition from '../components/FaceRecognition/FaceRecognition';
import Rank from '../components/Rank/Rank';

const app = new Clarifai.App({
  apiKey: '108d10a8214d4ad6b916cff95a07bb6e'
});

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      imageUrl: '',
      box: {}
    };
  }

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

  onButtonSubmit = () => {
    const { input } = this.state;
    this.setState({ imageUrl: input });
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, input)
      .then((response) => {
        this.displayFacebox(this.calculateFaceLocation(response));
      })
      .catch((err) => {
        console.log(err);
      });

    this.setState({ input: '' });
  };

  render() {
    return (
      <div className="App">
        {/* <ParticlesAnimation /> */}
        <Navigation />
        <main className="container">
          <Logo />
          <Rank />
          <ImageLinkForm
            onInputChange={this.onInputChange}
            onButtonSubmit={this.onButtonSubmit}
            inputValue={this.state.input}
          />
          <FaceRecognition
            imageUrl={this.state.imageUrl}
            box={this.state.box}
          />
        </main>
      </div>
    );
  }
}

/* Clarify API request with my key
app.models.predict("108d10a8214d4ad6b916cff95a07bb6e", "https://samples.clarifai.com/face-det.jpg").then(
    function(response) {
      // do something with response
    },
    function(err) {
      // there was an error
    }
  ); */
