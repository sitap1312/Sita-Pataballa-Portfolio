import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="header">
        <Navbar />
      </header>

      <section>
        <Home />
      </section>

      {/* <section id="homeId" className="intro">
        <Route exact path="/">
          <div className="intro-container">
            <div className="intro-txt">
              <h1>Hello...</h1>
              <h1>
                <span>I'm a Front-End Developer.</span>
              </h1>
            </div>
            <div className="intro-list">
              <ul>
                <li style={{"margin-right": "45px"}}>Designer</li>
                <li>Developer</li>
              </ul>
            </div>
            
              <div className='intro-links'>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

                <div className="sm-link">
                  <a href="https://www.linkedin.com/in/sita-pataballa-41963b206/" className="fa fa-linkedin" style={{"text-decoration": "none", "color": "white"}}></a>
                </div>
                <div className="sm-link">
                  <a href="https://github.com/sitap1312" className="fa fa-github" style={{"text-decoration": "none", "color": "white"}}> </a>
                </div>
                <div className="sm-link">
                  <a href="https://twitter.com/AyyagariMadhu" className="fa fa-twitter" style={{"text-decoration": "none", "color": "white"}}> </a>
                </div>
                <div className="sm-link">
                  <a href="https://www.instagram.com/madhuayyagari/" className="fa fa-instagram" style={{"text-decoration": "none", "color": "white"}}> </a>
                </div>
              </div>
          </div>
        </Route>
      </section> */}

      <section id="aboutmeId" className="about-me">
        <Route path="/">
          <div className="abtme">
            ABOUT ME
          </div>

          <div className="description">
            <div className="abtme-img">
              <img className="image" src="./assets/Sita.jpg" alt="Sita" />
            </div>
            <div className="abtme-story">
              <h2>Hi! I'm Sita Pataballa</h2>
              <h1>I'm Seattle based Professional Front-end Developer.</h1>

              <br />
              <div className="journey">
                <h3>My Journey</h3>
                <p>
                  My interest in web development started when I was 23 years old
                  and began to try desiginig some web applications using HTML and CSS
                  as a practice. I wanted to land my profession as web Developer.
                  I spent most my time over designing various web application as a practice out of
                  interest, using HTML and CSS, not really having a clue what I was doing,
                  but loving every second of it.
                  <br />
                  Then I decided to take my interest and my basic skills to next level and joined a
                  bootcamp, where I got trained on Full Stack Web Development. Got hands on experience
                  while doing 4 different projects using JavaScript, HTML5, CSS3, React, MongoDB
                  and Express, Node.js.
                  <br />
                  I wanted to be the most hands on professional,
                  and make sure that my vision wasn’t tainted by the views of
                  anyone else.
                  <br />
                  In the end, I was so excited
                  when people asked me who built my professional website,
                  and without hesitation I could proudly say myself.
                  Fast forward to today, I am equipped to independently develop applications using
                  creative problem-solving and I have become fluent in multiple programming languages. I can write
                  clean, scalable code, that is also user friendly.
                </p>
              </div>
            </div>
          </div>
          <br />
          <div className="personal-info">
            {/* <div className="info-form">
              <form>
                <label>Full Name :</label> Sita Pataballa
                <br />
                <br />
                <label>Age :</label> 32 Years
                <br />
                <br />
                <label>Location :</label> Redmond, Washington
                <br />
                <br />
                <label>Email :</label> Sitapataballa1312@gmail.com
              </form>
            </div> */}

            <div className='intro-links'>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

                <div className="sm-link">
                  <a href="https://www.linkedin.com/in/sita-pataballa-41963b206/" className="fa fa-linkedin" style={{"text-decoration": "none", "color": "white"}}></a>
                </div>
                <div className="sm-link">
                  <a href="https://github.com/sitap1312" className="fa fa-github" style={{"text-decoration": "none", "color": "white"}}> </a>
                </div>
                <div className="sm-link">
                  <a href="https://twitter.com/AyyagariMadhu" className="fa fa-twitter" style={{"text-decoration": "none", "color": "white"}}> </a>
                </div>
                <div className="sm-link">
                  <a href="https://www.instagram.com/madhuayyagari/" className="fa fa-instagram" style={{"text-decoration": "none", "color": "white"}}> </a>
                </div>
            </div>
          </div>
        </Route>
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;
