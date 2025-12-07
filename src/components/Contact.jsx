import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div>
      <section className="contact-section" id="contact">
  <h2 className="section-title">Contact</h2>

  <p className="contact-subtitle">
    Feel free to reach out for collaboration, opportunities or any queries!
  </p>

  <div className="contact-grid">

    <a href="mailto:sandeepgotham092@gmail.com" className="contact-card">
      <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email"/>
      <h3>Email</h3>
      <p>sandeepgotham092@gmail.com</p>
    </a>

    <a href="tel:9177070860" className="contact-card">
      <img src="https://cdn-icons-png.flaticon.com/512/724/724664.png" alt="Phone"/>
      <h3>Phone</h3>
      <p>+91 9177070860</p>
    </a>

    <a href="https://www.linkedin.com/in/gotham-sandeep" target="_blank" className="contact-card">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn"/>
      <h3>LinkedIn</h3>
      <p>linkedin.com/in/gotham-sandeep</p>
    </a>

    <a href="https://github.com/sandeepgotham092-cpu" target="_blank" className="contact-card">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub"/>
      <h3>GitHub</h3>
      <p>github.com/sandeepgotham092-cpu</p>
    </a>

    <a href="https://sandy-web-site.netlify.app" target="_blank" className="contact-card">
      <img src="https://cdn-icons-png.flaticon.com/512/841/841364.png" alt="Portfolio"/>
      <h3>Portfolio</h3>
      <p>sandy-web-site.netlify.app</p>
    </a>

  </div>
</section>

    </div>
  )
}

export default Contact
