import './App.css';
import React from 'react';

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {

  const { pathname } = useLocation(Home);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [Home]);

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
        <Contact />
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;
