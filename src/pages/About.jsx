import React, { useEffect } from 'react';
// import './styles/about.css';
// import self from '../assets/selfplosion.png';

// Function to load GitHub contributions graph and streak stats
function GitHubGraphs() {
  useEffect(() => {
    // Load CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '';
    document.head.appendChild(link);

    // Load JS
    const script = document.createElement('script');
    script.src = '';
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
            <h2 className='medText'>Nadia Hashemi</h2>
            <h1 className='bigText'>I <span className='purple'>&lt;am.../&gt;</span></h1>
            <p>
            Hi, I’m Nadia Hashemi, a student software developer with a growing skill set and a passion for building meaningful projects. I’ve explored the world of development through university, coding bootcamps, and self-taught lessons.
              <br />
              My experience spans HTML, CSS, and JavaScript, and I’m currently diving deeper into technologies like TypeScript, Node.js, and React.
              <br />
              With a love for solving complex challenges and a keen eye for detail, I’m excited to create impactful solutions while continuously learning and growing in the tech world.
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