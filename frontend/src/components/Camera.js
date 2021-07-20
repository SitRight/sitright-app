import React, { useState } from 'react';
import Webcam from "react-webcam";
import axios from 'axios';

const videoConstraints = {
    width: 224,
    height: 224,
    facingMode: "user"
};

const Camera = () => {

    const [base64str, setBase64Str] = useState('')

    const addImageHandler = () => {
        axios.post('http://localhost:8000/predict', { 'base64str': base64str})
          .then(res => console.log(res))
    };

    const webcamRef = React.useRef(null);

    
    const capture = React.useCallback(
        () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setBase64Str(imageSrc)
        });


    return (
        <div style={{margin: "0px", padding: "0px"}} className="webcam-container">
            <div style={{margin: "0px", padding: "0px"}} className="webcam-img">

                {base64str === '' ? <Webcam
                    audio={false}
                    height={224}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={224}
                    videoConstraints={videoConstraints}
                /> : <img alt='you' src={base64str} />}
            </div>
            <div>
                {base64str !== '' ?
                    <button onClick={(e) => {
                        e.preventDefault();
                        setBase64Str('')
                    }}
                        className="webcam-btn">
                        Retake Image</button> :
                    <button onClick={(e) => {
                        e.preventDefault();
                        capture();
                    }}
                        className="webcam-btn">Capture</button>
                }
            </div>
            <button onClick={addImageHandler}>Submit</button>
        </div>
    );
};

export default Camera