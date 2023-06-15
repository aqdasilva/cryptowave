import React from 'react';
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const handleClick = () => {
    // Play video
    const video = document.getElementById('video');
    video.play();

    // Redirect to the next screen
    setTimeout(() => {
      // Add your redirection logic here
      // For example, you can use React Router: history.push('/next-screen');
    }, 3000); // Redirect after 3 seconds
  };

  return (
    <div className="App">
      <header className="App-header" onClick={handleClick}>
        Crypto Heat Wave
      </header>
      <video id="video" style={{ display: 'none' }} controls>
        <source src="heatwave.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
