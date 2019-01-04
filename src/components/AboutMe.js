import React, { Component } from 'react';

class AboutMe extends Component {
  componentWillMount() {
    document.body.style.background = ' #222225';
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
        <p id='about-text'>Keith Dybvig is a middle school math teacher and freelance web developer. He graduated from Indiana University in December of 2009 and from the Full-Stack JavaScript program at Austin Coding Academy in October of 2018.  When he is not teaching or programming, he enjoys playing board games, ultimate frisbee and disc golf as well as reading fantasy novels and non-fiction books, and of course taking walks with his dog, Zucchini.</p>
        <h2>Education</h2>
          <h3>Indiana University, Bloomington</h3>
            <div className='course'><p>Bachelor of Arts</p><span id='md-date'>December 2009</span></div>
          <div className='course'><p>Mathematics, Economics, and Psychology</p><span id='sm-date'>December 2009</span></div>
        <h2>Training</h2>
          <h3>Austin Coding Academy</h3>
            <div>
              {this.renderCourses([
                {name: '211 Javascript Full-Stack (Intermediate)', date: 'June 2018'},
                {name: '311 Javascript Full-Stack (Advanced)', date: 'October 2018'}
              ])}
            </div>

          <h3>FreeCodeCamp</h3>
          {this.renderCourses([
            {name: 'Front End Libraries (300 hours)', date: 'January 2019'},
            {name: 'Algorithms and Data Structures (300 hours)', date: 'June 2018'},
            {name: 'Front End Development (400 hours)', date: 'May 2018'}
          ])}
          <p className= 'fcc-link'>
            <a
             href="https://www.freecodecamp.org/kdybvig"
             target='_blank'
             rel = 'noopener noreferrer'>View Certifications</a>
          </p>
      </div>
    )
  }
}

export default AboutMe;
