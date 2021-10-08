import React from 'react';
import './Home.css';

function Home() {
  return (
    <div>
      <section id="homeId" className="intro">
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
      </section>
    </div>
  )
}

export default Home;
