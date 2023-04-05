import React from 'react';
import './App.css';
import NavBar from './NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Movie from './Movie';
import Home from './Home';

//Creating Adding the Routes to the other pages
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Movie" element={<Movie />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
