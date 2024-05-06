// @ts-expect-error Import React
import React from 'react';
import './App.css'
import UseEffectObject from './pages/UseEffectObject.tsx';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Home.tsx';

function App() {
  return (
    <BrowserRouter>
      <div className="sidebar">
        <div><Link to="/">Home</Link></div>
        <div><Link to="/object">Object Demo</Link></div>
        <div><Link to="/array">Array Demo</Link></div>
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/object" element={<UseEffectObject />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
