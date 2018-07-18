import React, { Component } from 'react';
import ProjectBox from './ProjectBox';
import projects from '../myProjects';

class Projects extends Component {
  state = {
    active: 'All',
    projects: projects,
    page: 1
  }

  componentWillMount() {
    document.body.style.background = '#120038 url("./backgrounds/nightsky.jpg") repeat fixed'
    document.body.style.backgroundSize ='cover';
  }

  changeActive = (button) => {
    const filteredProjects = button === 'All' ?
      projects: projects.filter(project => project.tags.indexOf(button) > -1);
    this.setState ({active: button, projects: filteredProjects, page: 1});
  }

  changePage = (page) => {
    this.setState({page: page});
  }

  renderButtons (list) {
    const buttons = list.map((item, index) => {
      const key = `button-${index}`
      return <button
              key = {key}
              className = {this.state.active === item ? 'active' : ''}
              onClick = {()=> this.changeActive(item)}>{item}</button>
    })
    return buttons;
  }

  renderPageLinks () {
    const numPages = Math.ceil(this.state.projects.length/6);
    const pageArr = [];
    for (let page = 1; page <= numPages; page++) {
      const key = `page-${page}`
      const isActive = this.state.page === page;
      pageArr.push(
        <p
         key={key}
         className={isActive ? 'active' : ''}
         onClick={!isActive ? () => this.changePage(page) : undefined}>{page}</p>)
    }
    return pageArr;
  }

  render () {
    const nextClass = this.state.page === Math.ceil(this.state.projects.length/6) ? 'text hidden' : 'text';
    const prevClass = this.state.page === 1 ? 'text hidden' : 'text';
    const renderedProjects = this.state.projects.slice(this.state.page*6-6,this.state.page*6);

    return (
      <div id='projects'>
        <div id='button-container'>
        {this.renderButtons(['All', 'freeCodeCamp', 'React', 'API'])}
        </div>
        <ProjectBox
         projects = {renderedProjects}/>
         {this.state.projects.length > 6 &&
           <div className ='pages'>
             <p
              className = {prevClass}
              onClick={()=>{this.changePage(this.state.page-1)}}>Previous</p>
             {this.renderPageLinks()}
             <p
             className = {nextClass}
             onClick={()=>{this.changePage(this.state.page+1)}}>Next</p>
           </div>
        }
      </div>
    )
  }
}

export default Projects;
