import React from 'react';
import '../styles/HomePage.css'; // Importando el archivo CSS personalizado

function HomePage() {
  return (
    <div className="home-page">
      <h1>Welcome to My Portfolio</h1>
      <p>This is a brief introduction about myself. I am a passionate web developer with skills in various technologies.</p>
      <div className="skills">
        <h2>My Skills</h2>
        <ul>
          {['JavaScript', 'React', 'Node.js', 'CSS', 'HTML'].map(skill => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>

      <section className="section about-me">
        <h2>About Me</h2>
        <p>Since the age of 13, I started learning HTML and CSS, broadening my knowledge to multiple programming languages such as Python, PHP, JS, JAVA, C#, LISP, SQL, and Kotlin for mobile app development. I like researching and applying new knowledge to adapt to any situation.</p>
      </section>

      <section className="section experience">
        <h2>Work Experience</h2>
        <h3>Vallague</h3>
        <p>Programmer (March 2020 - Present). Founder of an entrepreneurship in web development and digital marketing. I have developed platforms and offered services to companies internationally, including the platform for IEMCOOP "Sanarate".</p>
      </section>

      <section className="section education">
        <h2>Education</h2>
        <h3>Universidad del Valle de Guatemala</h3>
        <p>Computer Science and IT (2022 - Present)</p>
        <h3>COLEGIO PRIVADO "ENRIQUE NOVELLA ALVARADO"</h3>
        <p>Bachelor in Sciences and Letters (2020 - 2021)</p>
      </section>
    </div>
  );
}

export default HomePage;
