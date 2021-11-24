import React from 'react';
import ReactDOM from 'react-dom';
import 'firebase/firestore';
import { FirebaseAppProvider } from 'reactfire';
import { firebaseConfig } from './firebase';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <App />
  </FirebaseAppProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
