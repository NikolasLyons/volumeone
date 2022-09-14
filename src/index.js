import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, Routes, HashRouter } from 'react-router-dom';
import Menu from './components/Menu'
import Home from './components/Home';
import About from './components/About';
import Drinks from './components/Drinks';
import Food from './components/Food';

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path='/home' element={<Home />} />
          <Route path="/menu" element={<Menu />}>
            <Route path="/menu/drinks" element={<Drinks />} />"
            <Route path="/menu/food" element={<Food />} />"
          </Route>
          <Route path="/about" element={<About />} />
        </Route>

      </Routes>
    </HashRouter>

    <h1>this is a test without the need of the router</h1>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
