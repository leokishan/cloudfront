import React from 'react';
import ReactDOM from 'react-dom';
import Amplify from 'aws-amplify';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

Amplify.configure({
  Auth: {
    region: "us-east-1",
    userPoolId: "us-east-1_7SlfVVh01",
    userPoolWebClientId: "70im3kk8gtfsefhu479dh8g4n2"
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
