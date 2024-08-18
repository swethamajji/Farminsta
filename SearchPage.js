// src/SearchPage.js
import { useState, useEffect } from 'react';
import './App.css';

function SearchPage() {
  const [formData, setFormData] = useState([]);
  const [filters, setFilters] = useState({
    education: '',
    specialization: '',
    languages: ''
  });
  const [filteredData, setFilteredData] = useState([]); // State to store filtered results

  useEffect(() => {
    // Load stored data from local storage
    const storedData = JSON.parse(localStorage.getItem('formData')) || [];
    setFormData(storedData);
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSearch = () => {
    const results = formData.filter(item => {
      return (
        (filters.education === '' || item.education === filters.education) &&
        (filters.specialization === '' || item.specialization === filters.specialization) &&
        (filters.languages === '' || item.languages === filters.languages)
      );
    });

    // Store the filtered results in the state
    setFilteredData(results);

    // Clear the filters after displaying results
    setFilters({
      education: '',
      specialization: '',
      languages: ''
    });
  };

  return (
    <div className="App">
      <header className="banner">
        <h1>Search Page</h1>
      </header>
      <div className="search-form">
        <h2>Filter Data By Using Following....</h2>
        <div className="form-group">
          <label htmlFor="education" className="form-label">Education</label>
          <input
            className='form-control'
            name="education"
            value={filters.education}
            onChange={handleFilterChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="specialization" className="form-label">Specialization</label>
          <input
            className='form-control'
            name="specialization"
            value={filters.specialization}
            onChange={handleFilterChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="languages" className="form-label">Languages</label>
          <input
            className='form-control'
            name="languages"
            value={filters.languages}
            onChange={handleFilterChange}
          />
        </div>
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="display-data">
        <h2>Results:</h2>
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <div key={index} className="result-item">
              <p><strong>Name:</strong> {item.name}</p>
              <p><strong>Email:</strong> {item.email}</p>
              <p><strong>Description:</strong> {item.description}</p>
              <p><strong>Education:</strong> {item.education}</p>
              <p><strong>Specialization:</strong> {item.specialization}</p>
              <p><strong>Languages:</strong> {item.languages}</p>
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
}

export default SearchPage;
