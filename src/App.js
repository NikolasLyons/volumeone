
import './App.css';
import React from 'react';
import Nav from './components/Nav';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App container-fluid">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
