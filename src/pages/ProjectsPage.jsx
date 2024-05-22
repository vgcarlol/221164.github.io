import React from 'react';
import '../styles/ProjectsPage.css'; // Asegúrate de que el path al archivo CSS es correcto

// Datos de ejemplo de proyectos
const proyectos = [
  {
    id: 1,
    name: 'Proyecto Uno',
    description: 'Descripción del Proyecto Uno.',
    image: 'url-to-image-1.jpg',
    link: 'http://link-to-project-1.com'
  },
  {
    id: 2,
    name: 'Proyecto Dos',
    description: 'Descripción del Proyecto Dos.',
    image: 'url-to-image-2.jpg',
    link: 'http://link-to-project-2.com'
  },
  {
    id: 3,
    name: 'Proyecto Tres',
    description: 'Descripción del Proyecto Tres.',
    image: 'url-to-image-3.jpg',
    link: 'http://link-to-project-3.com'
  }
];

function ProjectsPage() {
  return (
    <div className="projects-page">
      <h1>Projects</h1>
      <p>Here are some of my past projects.</p>
      <div className="project-list">
        {proyectos.map(proyecto => (
          <div key={proyecto.id} className="project-item">
            <img src={proyecto.image} alt={proyecto.name} />
            <h2>{proyecto.name}</h2>
            <p>{proyecto.description}</p>
            <a href={proyecto.link} target="_blank" rel="noopener noreferrer" className="project-link">
              Ver Proyecto
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
