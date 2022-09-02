import React from 'react';
import logo from './logo.svg';
import './App.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkRtVW4e7-elJzn4tQoiVegE4q0OiNqwc",
  authDomain: "personal-page-55b2e.firebaseapp.com",
  projectId: "personal-page-55b2e",
  storageBucket: "personal-page-55b2e.appspot.com",
  messagingSenderId: "559281131081",
  appId: "1:559281131081:web:96e1e8a598dae1ba46b998",
  measurementId: "G-1RNZ3E1L33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi again, I am asking for your money plz plz.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
