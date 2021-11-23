import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Interview from './pages/Interview';
import Random from './pages/Random';
import Mypage from './pages/Mypage';
import './App.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/interview" element={<Interview />} />
        <Route path="/random" element={<Random />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/mypage/:userID" element={<Mypage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
