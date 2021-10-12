import React from 'react';
import './AboutMe.css';

function AboutMe() {
  return (
      <section id="aboutmeId" className="about-me">
          <div className="sec-title">
            About Me
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
                  My interest in web development started when I was 23 years old and began
                  designing some web applications using HTML and CSS as a practice.
                  I wanted to land my profession as a web Developer, so I spent most of my
                  time designing various web applications as a practice out of interest,
                  using HTML and CSS, not having a clue what I was doing but loving every
                  second of it.
              <br />
              <br />
                  Then I decided to take my interest and basic skills to the next level and
                  joined a Bootcamp, where I received training on Full Stack Web Development
                  and got hands-on experience while doing four different projects using
                  JavaScript, HTML5, CSS3, React, MongoDB, Express, Node.js and Ruby.
              <br />
              <br />
                  I wanted to be the most hands-on professional, and make sure that
                  my vision wasn’t tainted by the opinions of others.
                  <br />
                  In the end, I was so excited when people asked me who built my professional
                  website, and without hesitation, I could proudly say myself. Fast forward
                  to today, I am equipped to independently develop applications using
                  creative problem-solving as I have become fluent in multiple programming
                  languages. I can write clean and scalable code that is also user-friendly.
                </p>
              </div>
            </div>
          </div>
          
          <div className='intro-links'>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

            <div className="sm-link">
              <a href="https://www.linkedin.com/in/sita-pataballa-41963b206/" className="fa fa-linkedin" > </a>
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
      </section>
  )
}

export default AboutMe;
