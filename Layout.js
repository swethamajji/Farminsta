// src/FormPage.js
import { useState } from 'react';
import './App.css';
// import farminstaBanner from './banner-image.jpg';
import Navbar from './Navbar';

function LayoutPage() {
  const [showContent, setShowContent] = useState(false);

  const handleButtonClick = () => {
    setShowContent(true);
  };

  return (
    <div className="form-page">
      {showContent ? (
        <>
          <Navbar />
          <div className="hero-content">
            <h1 className="hero-heading">Content Creator Profile</h1>
            {/* Add additional content here if needed */}
          </div>
        </>
      ) : (
        <div className="hero">
          {/* <img src={farminstaBanner} alt="Farminsta Banner" className="hero-image" /> */}
          <button className="reveal-button" onClick={handleButtonClick}>
            Content Creator
          </button>
        </div>
      )}
    </div>
  );
}

export default LayoutPage;
