import React, { Component } from "react";
import "./App.css";

import SmurfVillage from './SmurfVillage';
import SmurfForm from './SmurfForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS are evil, but we'll make a village of them, anyway.</h1>
        <SmurfForm/>
        <SmurfVillage />
      </div>
    );
  }
}

export default App;
