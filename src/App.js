
import './App.css';
import React from 'react';
import Nav from './components/Nav';
import Menu from './components/Menu';
import Drinks from './components/Drinks';
import Hours from './components/Hours';

function App() {
  return (
    <div className="App container-fluid">
      <Nav />
      <Hours/>
      <Menu />
      <Drinks />
    </div>
  );
}

export default App;
