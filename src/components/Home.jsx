import React from 'react';
import './Home.css';

function Home() {

  return (
    <div>
      <section id="homeId" className="intro">
          <div className="intro-container">
            {/* <div className="intro-txt">
              <h1>Hello...</h1>
              <h1>
                <span>I'm a Front-End Developer.</span>
              </h1>
            </div> */}
          
          <div className="intro-txt">
            <span className="block"></span>
            {/* <h1>Hello....<span></span></h1> */}
            <h1>Sita Pataballa<span></span></h1>
          </div>

          <br />
          <div className="role">
            <div className="block"></div>
            <p>Full Stack Web-Developer.</p>
          </div>
          

          
            <div className="intro-list">
            <ul>
            • Designer 
            • Developer
            </ul>
            </div>
            
              <div className='intro-links'>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

                <div className="sm-link">
                  <a href="https://www.linkedin.com/in/sita-pataballa-41963b206/" className="fa fa-linkedin"> </a>
                </div>
                <div className="sm-link">
                  <a href="https://github.com/sitap1312" className="fa fa-github" > </a>
                </div>
                <div className="sm-link">
                  <a href="https://twitter.com/AyyagariMadhu" className="fa fa-twitter" > </a>
                </div>
                <div className="sm-link">
                  <a href="https://www.instagram.com/madhuayyagari/" className="fa fa-instagram" > </a>
                </div>
              </div>
          </div>
      </section>
    </div>
  )
}

export default Home;
