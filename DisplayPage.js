// src/DisplayPage.js
import { useLocation, useNavigate } from 'react-router-dom';
import './App.css';

function DisplayPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;

  if (!state) {
    return <div>No data to display</div>;
  }

  return (
    <div className="App">
      <header className="banner">
        <h1>Form Data</h1>
      </header>
      <div className="display-data">
        <p><strong>Name:</strong> {state.name}</p>
        <p><strong>Email:</strong> {state.email}</p>
        <p><strong>Description:</strong> {state.description}</p>
        <p><strong>Education:</strong> {state.education}</p>
        <p><strong>Specialization:</strong> {state.specialization}</p>
        <p><strong>Languages:</strong> {state.languages}</p>
      </div>
      <div className="actions">
        <button onClick={() => navigate('/')}>Back to Form</button>
      </div>
    </div>
  );
}

export default DisplayPage;


