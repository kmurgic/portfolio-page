import React from 'react';
import ProjectCard from './ProjectCard';


const ProjectBox = (props) => {
  const renderProjects = () => {
    const renderedProjects = props.projects.map((project, index) => {
      const key = `project-${index}`
      return <ProjectCard key={key} project={project} />
    });
    return renderedProjects;
  }

  return (
    <div id='project-box'>
    {renderProjects()}
    </div>
  )
}

export default ProjectBox;
