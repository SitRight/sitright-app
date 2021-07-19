import React, { Component } from 'react';
import Webcam from "react-webcam"


class App extends Component {

  setRef = webcam => {
    this.webcam = webcam;
  };

  state = {
    pic: ""
  }


  capture = ()=>{
    const imageSrc = this.webcam.getScreenshot();
    console.log(imageSrc);

    fetch('http://localhost:8000/predict/image', {method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },body: JSON.stringify({image:{
      base64str: imageSrc
    }
    })
  })
    .then(res=>res.json())
    .then(image=>{
      this.setState({
        pic: image.base64str
      })
    })

  };


  render() {
    return (
      <div className="App">
        <h1>Your Webcam</h1>
        <Webcam
        ref={this.setRef}
        screenshotFormat="image/jpeg"
        />
        <br></br>
        <button onClick={this.capture}>Take Photo</button>
        <h1>Your Captured Image</h1>
        <img src={this.state.pic} alt="oolala"/>
        <p>Cloudinary URL: {this.state.pic}</p>
      </div>
    );
  }
}

export default App;