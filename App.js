// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormPage from './FormPage';
import DisplayPage from './DisplayPage';
import SearchPage from './SearchPage';
import Navbar from './Navbar'; // Ensure you have Navbar component
import LayoutPage from './Layout';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/display" element={<DisplayPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </Router>
  );
}



<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FiDSZcffWf3DSLm6gsxTAKQ%2FSharePoint-Content-Creators-Toolkit-(Community)%3Fnode-id%3D601-29%26t%3DZF1yKIoDEiZidg9u-1" allowfullscreen></iframe>
export default App;


