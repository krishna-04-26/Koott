import React from 'react';
import { Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PopularProjects from './components/PopularProjects';
import Opportunities from './components/Opportunities';
import HowItWorks from './components/HowItWorks';
import Login from './pages/Login';
import Signup from "./pages/Signup"

import './index.css';


function App() {
  return (

    <Routes>

      {/* Landing Page */}
      <Route
        path="/"
        element={
          <div className="app">

            <div className="hero-bg-curve"></div>

            <Navbar />
            <Hero />

            <main>
              <PopularProjects />
              <Opportunities />
              <HowItWorks />
            </main>

            {/* Background blobs */}
            <div
              className="bg-blob blob-left"
              style={{
                position: 'fixed',
                top: '50%',
                left: '-10%',
                width: '30%',
                height: '500px',
                backgroundColor: '#F8F1DE',
                borderRadius: '50%',
                zIndex: -2,
                opacity: 0.6,
                filter: 'blur(40px)'
              }}
            ></div>

            <div
              className="bg-blob blob-right"
              style={{
                position: 'fixed',
                bottom: '-10%',
                right: '-5%',
                width: '40%',
                height: '400px',
                backgroundColor: '#EAF0DC',
                borderRadius: '50%',
                zIndex: -2,
                opacity: 0.5,
                filter: 'blur(50px)'
              }}
            ></div>

            <div
              className="bg-blob blob-bottom"
              style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                width: '100%',
                height: '20vh',
                backgroundColor: '#E0E7CF',
                zIndex: -2,
                opacity: 0.3,
                borderTopLeftRadius: '50% 100%',
                borderTopRightRadius: '50% 100%'
              }}
            ></div>

          </div>
        }
      />
      <Route path="/signup" element={<Signup />} />
      {/* Login Page */}
      <Route path="/login" element={<Login />} />

    </Routes>

  );
}

export default App;