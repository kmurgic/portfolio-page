import React, { Component } from 'react';

class Home extends Component {
    componentWillMount () {
      document.body.style.background = '#823 url("./backgrounds/cloudsky.jpg") repeat fixed'
      document.body.style.backgroundSize ='cover';
    }
  render () {
    return (
      <div id="home">
        <h1 id="name">Keith Dybvig</h1>
          <h2 id="job-title">Web Developer</h2>
        <div id = "media-links">
          <a href='https://github.com/kdybvig'><i className="fa fa-github"></i> Github</a>
          <a href='https://www.freecodecamp.org/kdybvig'><i className="fa fa-free-code-camp"></i> FreeCodeCamp</a>
          <a href='https://codepen.io/kdybvig/'><i className="fa fa-codepen"></i> CodePen</a>
        </div>
      </div>
    )
  }
}

export default Home;
