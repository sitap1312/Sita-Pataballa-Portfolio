import React from 'react';
import './Contact.css'

function Contact() {
  return (
    <section id="contactId" className="contact">
      
      <div className="sec-title">
        Contact
      </div>

      <div className="cont">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

        <h4>You can reach me through email ✍🏻 &nbsp; or connect with me on LinkedIn.</h4>

        <br />

        <div className="cont-links">
          <a href="mailto: sitapataballa1312@gmail.com" className="fa fa-google"> </a> &nbsp;
          <a href="https://www.linkedin.com/in/sita-pataballa-41963b206/" className="fa fa-linkedin"> </a>
        </div>
        <br />
        <br />
        <br />

        <h2>Want to know more..</h2>
        <h4>Get to know more about my projects on GitHub.</h4>

        <br />

        <div className="cont-links">
          <a href="https://github.com/sitap1312" className="fa fa-github"> </a>
        </div>
      </div>
    </section>
    
  )
}

export default Contact;
