import React from 'react';


const MainPage = () => {
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
      <a href="/next-screen" onClick={handleClick}>
        <header className="App-header">
          Crypto Heat Wave
        </header>
      </a>
      <video id="video" style={{ display: 'none' }} controls>
        <source src="heatwave.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default MainPage;