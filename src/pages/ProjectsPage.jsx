import React from 'react';
import '../styles/ProjectsPage.css'; // Asegúrate de que el path al archivo CSS es correcto
import BlogImage from '../assets/blog.png';
import StoreImage from '../assets/store.png';
import PlusFollower from '../assets/plus-follower.png';
import FollowerFusion from '../assets/followerfusion.png';

const proyectos = [
  {
    id: 1,
    name: 'IEMCOOP "Sanarate"',
    description: 'Sistema de gestión educativa y plataforma para estudiantes.',
    image: 'https://cv.vallague.com/images/graphic-design-2.png',
    link: 'http://iemcoop.edu.gt'
  },
  {
    id: 2,
    name: 'Vallague',
    description: 'Página de mi pequeña empresa.',
    image: 'https://cv.vallague.com/images/graphic-design-4.png',
    link: 'http://vallague.com'
  },
  {
    id: 3,
    name: 'Blog',
    description: 'Blog hecho para el curso de web.',
    image: BlogImage,
    link: 'https://github.com/vgcarlol/vgcarlol.github.io'
  },
  {
    id: 4,
    name: 'Store',
    description: 'Tienda virtual para el curso de Ingeniería de Software 1',
    image: StoreImage,
    link: 'https://github.com/paulabaal12/PROY-SOFTWARE'
  },
  {
    id: 5,
    name: 'Plus-Follower',
    description: 'Tienda de Marketing Digital',
    image: PlusFollower,
    link: 'https://plus-follower.com'
  },
  {
    id: 5,
    name: 'FollowerFusion',
    description: 'Tienda de Marketing Digital',
    image: FollowerFusion,
    link: 'https://followerfusion.com'
  }
];

function ProjectsPage() {
  return (
    <div className="projects-page">
      <h1>Projects</h1>
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
