import React, { Component } from 'react';
import Navigation from '../components/Navigation/Navigation';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';
import Logo from '../components/Logo/Logo';
import FaceRecognition from '../components/FaceRecognition/FaceRecognition';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Logo />
        <ImageLinkForm />
        <FaceRecognition />
      </div>
    );
  }
}
