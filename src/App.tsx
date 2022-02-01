import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>

    </div>
  );
}

export default App;
