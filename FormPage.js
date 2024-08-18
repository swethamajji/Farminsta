// src/FormPage.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
// import farminstaBanner from './farminsta-banner.jpg';

function FormPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
    education: '',
    specialization: '',
    languages: ''
  });
  

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Store data in local storage
  //   const storedData = JSON.parse(localStorage.getItem('formData')) || [];
  //   storedData.push(formData);
  //   localStorage.setItem('formData', JSON.stringify(storedData));
  //   navigate('/display', { state: formData });
  // };


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Ensure data from localStorage is parsed as an array
//     const storedData = JSON.parse(localStorage.getItem('formData')) || [];
    
//     // Check if `storedData` is indeed an array
//     if (Array.isArray(storedData)) {
//         storedData.push(formData);
//     } else {
//         // If storedData isn't an array, start a new array with `formData`
//         storedData = [formData];
//     }

//     // Save the updated array back to localStorage
//     localStorage.setItem('formData', JSON.stringify(storedData));
    
//     // Navigate to the display page
//     navigate('/display', { state: formData });
// };


const handleSubmit = (e) => {
  e.preventDefault();
  // Ensure data from localStorage is parsed as an array
  let storedData = JSON.parse(localStorage.getItem('formData')) || [];
  
  // Check if `storedData` is indeed an array
  if (Array.isArray(storedData)) {
      storedData.push(formData);
  } else {
      // If storedData isn't an array, start a new array with `formData`
      storedData = [formData];
  }

  // Save the updated array back to localStorage
  localStorage.setItem('formData', JSON.stringify(storedData));
  
  // Navigate to the display page
  navigate('/display', { state: formData });
};



  return (
    <div className="App">
      {/* <header className="banner">
        <img src={farminstaBanner} alt="Farminsta Banner" className="banner-image" />
      </header> */}
      <form onSubmit={handleSubmit}>
        <h1>Content Creator Form</h1>
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name</label>
          <input className='form-control' name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input className='form-control' name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="description" className="form-label">Description</label>
          <input className='form-control' name="description" value={formData.description} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="education" className="form-label">Education</label>
          <input className='form-control' name="education" value={formData.education} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="specialization" className="form-label">Specialization</label>
          <input className='form-control' name="specialization" value={formData.specialization} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="languages" className="form-label">Languages</label>
        </div>
        <div>
          <input type='radio' name="languages" value="English" id="english" checked={formData.languages === 'English'} onChange={handleChange} />
          <label htmlFor='english'>English</label>
        </div>
        <div>
          <input type='radio' name="languages" value="Hindi" id="hindi" checked={formData.languages === 'Hindi'} onChange={handleChange} />
          <label htmlFor='hindi'>Hindi</label>
        </div>
        <button type="submit">Submit</button>
        {/* Social Media Links */}
        <div className="social-media">
          {/* <h3>Follow us on:</h3> */}
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
        </div>
      </form>
    </div>
  );
}

export default FormPage;
