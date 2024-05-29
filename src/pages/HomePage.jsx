import React from 'react';
import '../styles/HomePage.css'; // Importando el archivo CSS personalizado

function HomePage() {
  return (
    <div className="home-page">
      <h1>¡Bienvenido a mi portafolio!</h1>
      <p>Este portafolio incluye breve información acerca de mí.</p>
      <div className="skills">
        <h2>Mis habilidades</h2>
        <ul>
          {['JavaScript', 'React', 'Node.js', 'CSS', 'HTML', 'PHP', 'Python', 'Kotlin', 'Java'].map(skill => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>

      <section className="section about-me">
        <h2>Sobre Mi</h2>
        <p>Desde los 13 años comencé a adentrarme en todo este mundillo, desde que por mi cuenta comencé a aprender HTML, CSS y JS. Desde la edad de 13 años me decidí a estudiar ingeniería en sistemas
          a pesar que mis papás querían que estudiara medicina. Al final continué estudiando Ciencias de la Computación, me encuentro en mi tercer año de carrera y durante todo este trayecto he aprendido 
          a hacer sistemas y tecnologías, desde páginas web con REACT, hasta aplicaciones móviles con Kotlin y aplicaciones de escritorio con Java.</p>
      </section>

      <section className="section experience">
        <h2>Experiencia Laboral</h2>
        <h3>Vallague</h3>
        <p>Programador (Marzo 2020 - Presente). Vallague es un emprendimiento que entra como "Pequeña Empresa" que he iniciado en el año 2020, he llegado a desarrollar páginas para 
          instituciones, pero principalmente me centré en lo que es el Marketing Digital, logrando llegar a muchísimos países en todo el mundo con mis servicios.</p>
      </section>

      <section className="section education">
        <h2>Educación</h2>
        <h3>Universidad del Valle de Guatemala</h3>
        <p>Ciencias de la Computación y TI (2022 - Presente)</p>
        <h3>COLEGIO PRIVADO "ENRIQUE NOVELLA ALVARADO"</h3>
        <p>Bachillerato en Cienias y Letras (2020 - 2021)</p>
      </section>
    </div>
  );
}

export default HomePage;
