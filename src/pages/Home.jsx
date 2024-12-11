// import './styles/home.css';
import React from 'react';
import coder from '../assets/coder.png';
import Typewriter from 'typewriter-effect';

export default function Home() {
  return (
    <div className="bg" >
      <div className="container">
        <div className="row heroBanner">
          <div className="col">
            <h2 className='medTextHome'>Hello, I'm</h2>
            <h1 className= 'bigTextHome'><span className='purple'>&lt;Nadia/&gt;</span> Hashemi</h1>
            <p className='medTextHome'>
              A passionate student studying to become a
              <Typewriter
                options={{
                  strings: ['Software Developer', 'Web Developer', 'React Developer', 'Full Stack Developer'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </p>
            </div>
            <img className='col coder' src={coder} alt="Logo" />
        </div>
      </div>
    </div>
  );
}