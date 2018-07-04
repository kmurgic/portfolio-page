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
          <h2 id="job-title">Full-Stack Developer</h2>
        <div id = "media-links">
          <a href='#'><i class="fa fa-github"></i> Github</a>
          <a href='#'><i class="fa fa-free-code-camp"></i> FreeCodeCamp</a>
          <a href='#'><i class="fa fa-codepen"></i> CodePen</a>
        </div>
      </div>
    )
  }
}

export default Home;
