import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Footer />
    </div>
  );
};

export default App;