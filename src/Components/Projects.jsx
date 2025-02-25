import React from 'react'

const Projects = () => {
    return (
        <section className="projects-container">
          <h1 className="section-title">Projects</h1>
          <div className="project-list">
            <div className="project-card">
              <h2>E-commerce Website</h2>
              <p>Built using React, Redux, and API integration. Features include search, filters, cart functionality, and dark mode.</p>
            </div>
            <div className="project-card">
              <h2>Movies World</h2>
              <p>A movie search platform using the OMDB API, local storage for reviews, and star rating features.</p>
            </div>
            <div className="project-card">
              <h2>Canteen Website</h2>
              <p>Includes a menu, login system, and food categories for easy browsing.</p>
            </div>
            <div className="project-card">
              <h2>Task Manager</h2>
              <p>A to-do list application built with React, featuring add, update, and delete functionalities.</p>
            </div>
            <div className="project-card">
              <h2>Portfolio Website</h2>
              <p>A personal portfolio showcasing skills, projects, and contact information with a responsive design.</p>
            </div>
          </div>
        </section>
      );
    
}

export default Projects