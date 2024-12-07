import './styles/contact.css';
import React from 'react';
import contact from '../assets/contactMe.png';


export default function Contact() {
  return (
    <div className='bg'>
      {/* bootstrap grid was not cooperating.. made my own flexbox */}
      <div className="container">
        <div className="row moveDown">
        {/* Image Column */}
        <div className="col-5">
        <img src={contact} alt="Contact Us" className="imgStyle" />
        </div>
        {/* Form Column */}
        <div className="col-5">
        <div className="card custom">
          <div className="card-header text-center">
          <h2 className='bigText'>Contact <span className='purple'>&lt;Me/&gt;</span></h2>
          </div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button className="button-85" role="button">Send Message</button>
              </div>
            </form>
          </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
}