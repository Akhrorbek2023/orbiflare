// src/App.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import './App.css'
import WhyOrbiflare from './pages/WhyOrbiflare';

const App: React.FC = () => {
  return (

      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/why" element={<WhyOrbiflare />} />
          </Routes>
        </main>
        <Footer />
      </div>
  
  );
};

export default App;
