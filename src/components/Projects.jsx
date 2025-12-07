import React from 'react'
import './Projects.css'
const Projects = () => {
  return (
    <div>
      <div className="projectcontainer"><div className="pcontainer">
                <section class="projects-section">
  <h2 class="section-title" style={{color:"red"}}>Projects</h2>

  <div class="projects-grid">

    <div class="project-card">
      <div class="project-header">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"/>
        <h3>StyleWala (E-Commerce)</h3>
      </div>
      <p>
        Full-stack e-commerce platform for men, women & kids built using Java, Spring Boot, 
        React, and MySQL. Supports product browsing, cart system, admin dashboard & secure APIs.
      </p>
      <ul>
        <li>Improved recommendation accuracy → +30% sales</li>
        <li>Enhanced security → 50% fraud reduction</li>
      </ul>
      <a href="https://github.com/sandeepgotham092-cpu/E-commerce-with-Spring-boot-" class="project-btn">View Project</a>
    </div>

    <div class="project-card">
      <div class="project-header">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"/>
        <h3>Medicine Reminder App (AI + Full-Stack)</h3>
      </div>
      <p>
        Full-stack health assistant app built using FastAPI, React & SQLite 
        with AI-based wellness insights using Google Gemini API.
      </p>
      <ul>
        <li>Smart reminders & schedule tracking</li>
        <li>Tablet consumption analytics (Recharts)</li>
        <li>AI-powered health tips</li>
      </ul>
      <a href="https://github.com/sandeepgotham092-cpu/Medicine-Remainder/blob/main/README.md" class="project-btn">View Project</a>
    </div>

    <div class="project-card">
      <div class="project-header">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"/>
        <h3>Your_Team (Real-Time Collaboration)</h3>
      </div>
      <p>
        A real-time collaboration platform using React, Node.js, WebSockets, and MongoDB 
        for project teams and esports groups.
      </p>
      <ul>
        <li>Live chat with Socket.IO</li>
        <li>Team rooms & project channels</li>
        <li>Responsive UI for all users</li>
      </ul>
      <a href="https://your-team-frontend.onrender.com/" class="project-btn">View Project</a>
    </div>

    <div class="project-card">
      <div class="project-header">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"/>
        <h3>CyberSecurity AI (IDS Model)</h3>
      </div>
      <p>
        AI-based intrusion detection system developed using Django, PyTorch, 
        Pandas & Numpy with 80/20 dataset training.
      </p>
      <ul>
        <li>Detects suspicious network traffic</li>
        <li>Converts logs into numerical feature vectors</li>
        <li>High-accuracy model for threat prediction</li>
      </ul>
      <a href="https://github.com/sandeepgotham092-cpu/cyber_security_ai#" class="project-btn">View Project</a>
    </div>

  </div>
</section>
</div></div>
    </div>
  )
}

export default Projects
