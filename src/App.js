import './App.css';
import React from 'react';
// import { Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <header className="header">
        <Navbar />
      </header>

      <section>
        <Home />
      </section>

      <section>
        <AboutMe />
      </section>

      <section>
        <Projects />
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;
