import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes component

import Register from './components/Register';
import Login from './components/Login';
import NotFound from './components/NotFound';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes> 
        <Route exact path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </Router>
  );
}

export default App;
