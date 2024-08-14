import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <div id="home">
      <Header />
      <Home />
      <About />
      <Contact />
    </div>
  );
};

export default App;
