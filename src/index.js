import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, Routes, HashRouter } from 'react-router-dom';
import Menu from './components/Menu'
import Home from './components/Home';
import About from './components/About';
import Mimosas from './components/Mimosas';
import Martinis from './components/Martinis';
import Mules from './components/Mules';
import SignatureCocktails from './components/SignatureCoctails';

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path="/menu" element={<Menu />}>
            <Route path="/menu/martinis" element={<Martinis />} />"
            <Route path="/menu/mimosas" element={<Mimosas />} />"
            <Route path="/menu/mules" element={<Mules />} />"
            <Route path="/menu/signaturecocktails" element={<SignatureCocktails />} />"
          </Route>
          <Route path="/about" element={<About />} />
        </Route>

      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
