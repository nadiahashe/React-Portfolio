import React, { useEffect } from 'react';
import './styles/about.css';
// import self from '../assets/selfplosion.png';

// Function to load GitHub contributions graph and streak stats
function GitHubGraphs() {
  useEffect(() => {
    // Load CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'http://lengthylyova.pythonanywhere.com/static/gh-contrib-graph/gh.css';
    document.head.appendChild(link);

    // Load JS
    const script = document.createElement('script');
    script.src = 'http://lengthylyova.pythonanywhere.com/static/gh-contrib-graph/gh.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function
    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="row graphs">
      <div className="col text-center">
        <h2 className="medText mt-4">GitHub Contributions</h2>
        <div id="gh" data-login="nadiahashemi"></div>
      </div>
      <div className='col text-center'>
        <h2 className="medText mt-4">GitHub Streak Stats</h2>
        <img
          src="https://github.com/nadiahashe"
          alt="GitHub Streak Stats"
          className="github-streak"
        />
      </div>
    </div>
  );
}

// Function to render Skill Bars and Circles
function SkillBarsAndCircles() {
  const codingLanguages = [
    { name: 'HTML', percentage: 90 },
    { name: 'CSS', percentage: 90 },
    { name: 'JavaScript', percentage: 80 },
    { name: 'Typescript', percentage: 70 },
    { name: 'Python', percentage: 50 },
    { name: 'Java', percentage: 40 },
    { name: 'SQL', percentage: 50 },
  ];

  const codingFrameworks = [
    { name: 'React', percentage: 70 },
    { name: 'Node.js', percentage: 85 },
    { name: 'Express', percentage: 65 },
    { name: 'AI', percentage: 50 },
  ];

  return (
    <div className="row skill-row">
      <div className="col-lg-6">
        <h2 className="medText">Coding Languages</h2>
        <div className="skill-bars">
          {codingLanguages.map((language, index) => (
            <div key={index} className="skill-bar">
              <span className="skill-label">{language.name}</span>
              <div className="bar">
                <div className="progress" style={{ width: `${language.percentage}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="col-lg-6">
        <h2 className="medText">Coding Frameworks</h2>
        <div className="skill-circles">
          <div className="row">
            {codingFrameworks.map((framework, index) => (
              <div key={index} className="col-md-6">
                <div className="skill-circle">
                  <div className="circle" style={{ '--percentage': `${framework.percentage}%` }}>
                    <span className="percentage">{framework.percentage}%</span>
                    <span className="framework-label">{framework.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}



// Main About Component
export default function About() {
  return (
    <div className="bg">
      <div className="container">
        <div className="row aboutMe align-items-center">
          <div className="col-lg-6 mb-4">
            <h2 className='medText'>Brad Webster</h2>
            <h1 className='bigText'>I <span className='purple'>&lt;am.../&gt;</span></h1>
            <p>
              I’m a student software developer with a growing skill set.. I’ve dived into the world of coding through university, coding bootcamps, and self-taught lessons. I have experience with HTML, CSS, and JavaScript, and I’m excited to continue exploring with TypeScript, Node.js, and React.
              <br />
              My journey started with a curiosity about how electronics work, taking apart mobile phones and building desktop PCs. It quickly evolved into a full-blown passion for creating intuitive and dynamic applications. I thrive on solving problems and am always eager to learn new technologies and best practices.
              <br />
              When I’m not coding, you can find me experimenting with new projects, collaborating with fellow developers, or simply exploring innovative tech solutions. I’m looking forward to contributing my skills to meaningful projects and growing as a developer in this ever-evolving field.
              <br />
              Feel free to browse through my portfolio to see some of the work I’ve done and get in touch if you’d like to collaborate or chat about technology!
            </p>
          </div>
          <div className="col-lg-6 mb-4 d-flex justify-content-center">
            {/* <img className='self' src={} alt="myself" /> */}
          </div>
        </div>
        <SkillBarsAndCircles />
        <GitHubGraphs />
      </div>
    </div>
  );
}