import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => (
  <div className="footer">
    <div className="footer__info">
      <div className="footer__about">
        <h2>About Us</h2>
        <p>
          We have worked on our competition to bring everyone Forex Trading. 
          There are thousands of skilled mentors waiting to join up and teach 
          Forex Methods to thousands of potential students.
        </p>
      </div>
      <div className="footer__company">
        <h2>Company</h2>
        <NavLink to="/" className="link footer__link" exact={true}>Home</NavLink>
        <NavLink to="/jobs" className="link footer__link" exact={true}>Jobs</NavLink>
        <NavLink to="/services" className="link footer__link" exact={true}>Services</NavLink>
        <NavLink to="/about" className="link footer__link" exact={true}>About Us</NavLink>
        <NavLink to="/howitworks" className="link footer__link" exact={true}>How it Works</NavLink>
        <NavLink to="/tos" className="link footer__link" exact={true}>Terms of Service</NavLink>
        <NavLink to="/privacy" className="link footer__link" exact={true}>Privacy Policy</NavLink>
      </div>
      <div className="footer__services">
        <h2>Other Services</h2>
        <NavLink to="/signin" className="link footer__link" exact={true}>Login</NavLink>
        <NavLink to="/register" className="link footer__link" exact={true}>Register</NavLink>
        <NavLink to="/faq" className="link footer__link" exact={true}>FAQ</NavLink>
        <NavLink to="/contact" className="link footer__link" exact={true}>Contact Us</NavLink>
      </div>
      <div className="footer__contact">
        <h2>Contact Us</h2>
        <p>support@dashboardfx.co</p>
        <p></p>
        <p>
          Building 11<br />
          Rad Studios<br />
          Sydney, NSW<br />
          United Kingdom
        </p>
      </div>
      <div className="footer__social-media">
        <h2>Follow Us</h2>
        <p>Social Icons</p>
      </div>
    </div>
    <hr className="footer__divider" />
    <div className="copyright">
      <p>All rights reserved with DFX</p>
  </div>
  </div>
)

export default Footer