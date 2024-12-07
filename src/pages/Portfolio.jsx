import wD from '../assets/wD.jpg';
import MFB from '../assets/MFB.png';
import SSAC from '../assets/SSAC.png';
import empDB from '../assets/empDB2.jpg';
import VBuilder from '../assets/VBuilder2.png';
import RMG from '../assets/RMG.png';
import gitWhite from '../assets/gitWhite.png';
import './styles/portfolio.css';

export default function Portfolio() {
  const projects = [
    {
      title: 'Weather API Dashboard',
      imgSrc: wD,
      description: 'Integrated Weather application using OpenWeather API. Provides real-time weather data for any city in the world. Features include current weather, 5-day forecast, and search history.',
      githubLink: 'https://github.com/bmw-dev0p/Weather-Dash-Challenge9',
      demoLink: 'https://weather-dash-challenge9.onrender.com',
    },
    {
      title: 'My First Blog',
      imgSrc: MFB,
      description: 'Simple blogging website where users can create, edit, and delete posts. Features include use of local storage, dynamic rendering of posts, and light/dark mode.',
      githubLink: 'https://github.com/bmw-dev0p/First-Blog-Challenge4',
      demoLink: 'https://bmw-dev0p.github.io/First-Blog-Challenge4/',
    },
    {
      title: 'Animal Adoption Center',
      imgSrc: SSAC,
      description: 'An elevated sample website for an animal adoption center. Users can browse, adopt, and print adoption certificates.',
      githubLink: 'https://github.com/bmw-dev0p/Animal-Shelter-Project1',
      demoLink: 'https://bmw-dev0p.github.io/Animal-Shelter-Project1/',
    },
    {
      title: 'Employee Database',
      imgSrc: empDB,
      description: 'Back-end SQL database app that simulates workplace heirarchy structures. Allows users to view, add, and modify employees, roles, and departments. Demonstrates best coding practices for server-side storage.',
      githubLink: 'https://github.com/bmw-dev0p/Employee-DB-Challenge10',
    },
    {
      title: 'Console Vehicle Builder',
      imgSrc: VBuilder,
      description: 'Console application that allows users to build and drive custom vehicles. Demonstrates object-oriented programming principles and inheritance structures.',
      githubLink: 'https://github.com/bmw-dev0p/Vehicle-Builder-Challenge8',
    },
    {
      title: 'Professional README Generator',
      imgSrc: RMG,
      description: 'Node.js application that generates professional README files for GitHub repositories. Features include user input validation, markdown formatting, built-in badges,  and file creation.',
      githubLink: 'https://github.com/bmw-dev0p/README-Gen-Challenge7.2',
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