import React, { Component } from 'react';

class AboutMe extends Component {
  componentWillMount() {
    document.body.style.background = '#58b url("./backgrounds/ocean.jpg") repeat fixed';
    document.body.style.backgroundSize = 'cover';
  }

  renderCourses (courses) {
    const renderedCourses = courses.map(course => {
      return <div className='course'><p>{course.name}</p><span>{course.date}</span></div>
    })
    return renderedCourses
  }

  renderList (items) {
    const list = items.map(item => {
      return <li>{item}</li>
    })
    return list;
  }

  render () {
    return (
      <div id='about-me'>
        <img id='zuke-driving' src='./zukedriving.jpeg' alt='Keith Dybvig' width='250px'/>
        <p id='about-text'>Keith Dybvig is a middle school math teacher transitioning into a career as a Web Developer. He completed the Full Stack JavaScript program at Austin Coding Academy.  He spends his free time working on personal programming projects as well as teaching himself how to code using FreeCodeCamp and Codecademy.</p>
        <h2>Training</h2>
          <h3>Austin Coding Academy</h3>
            <div>
              {this.renderCourses([
                {name: '211 Javascript Full-Stack (Intermediate)', date: 'June 2018'},
                {name: '311 Javascript Full-Stack (Advanced)', date: 'September 2018'}
              ])}
            </div>

          <h3>FreeCodeCamp</h3>
          {this.renderCourses([
            {name: 'Algorithms and Data Structures (300 hours)', date: 'June 2018'},
            {name: 'Front End Development (400 hours)', date: 'May 2018'}
          ])}
          <p className= 'fcc-link'>
            <a
             href="https://www.freecodecamp.org/kdybvig"
             target='_blank'
             rel = 'noopener noreferrer'>View Certifications</a>
          </p>

          <h3>Codecademy</h3>
            <ul>
              {this.renderList(['HTML', 'CSS', 'Make a Website', 'Responsive Design', 'Command Line', 'Git', 'Introduction To Javascript', 'ReactJS: Part I', 'ReactJS: Part II'])}
            </ul>
        <h2>Education</h2>
          <h3>Indiana University, Bloomington</h3>
            <div className='course'><p>Bachelor of Arts</p><span id='md-date'>December 2009</span></div>
          <div className='course'><p>Mathematics, Economics, and Psychology</p><span id='sm-date'>December 2009</span></div>
      </div>
    )
  }
}

export default AboutMe;
