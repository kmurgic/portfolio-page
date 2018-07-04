import React from 'react';

const ProjectBox = (props) => {
  const renderProjects = () => {
    const projects = props.projects.map(project => {
      return <div>{project}</div>
    })
  }

  return (
    <div id='my-projects'>
    </div>
  )
}

export default ProjectBox;
