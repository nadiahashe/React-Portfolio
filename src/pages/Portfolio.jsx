
import React from 'react';
import './styles/portfolio.css';

export default function Portfolio() {
  const projects = [
    
    {
      title: 'My First Blog',
      imgSrc: MFB,
      description: 'Simple blogging website where users can create, edit, and delete posts. Features include use of local storage, dynamic rendering of posts, and light/dark mode.',
      githubLink: '',
      demoLink: '',
    },
    {
      title: 'Employee Database',
    //   imgSrc: empDB,
      description: 'Back-end SQL database app that simulates workplace heirarchy structures. Allows users to view, add, and modify employees, roles, and departments. Demonstrates best coding practices for server-side storage.',
      githubLink: '',
    },
    {
      title: 'Console Vehicle Builder',
    //   imgSrc: VBuilder,
      description: 'Console application that allows users to build and drive custom vehicles. Demonstrates object-oriented programming principles and inheritance structures.',
      githubLink: '',
    },
    {
      title: 'Professional README Generator',
    //   imgSrc: RMG,
      description: 'Node.js application that generates professional README files for GitHub repositories. Features include user input validation, markdown formatting, built-in badges,  and file creation.',
      githubLink: '',
    },
  ];

  return (
    <div className="bg">
      <div className="container-fluid">  {/* Change to container-fluid */}
        <h1 className="bigText" style={{ textAlign: 'center' }}><span className='purple'>&lt;Coding/&gt;</span> Project Portfolio</h1>
        <div className="row ofCards">  {/* Center the row contents */}
          {/* begin card map  */}
          {projects.map((project, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>  {/* Adjust column classes */}
              <div className="card custom-card" style={{ minWidth: '18rem' }}>  {/* Set minimum width */}
                <img src={project.imgSrc} className="card-img-top" alt={project.title} />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <div className="button-container">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <button className="button-85" role="button">Github</button>
                    </a>
                    {project.demoLink ?
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <button className="button-85" role="button">Live Demo</button>
                      </a>
                      : null /* No demo link, so nothing is rendered here */
                    }
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}