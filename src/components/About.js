import React, { Component } from 'react';

class About extends Component {

  componentWillMount() {
    document.body.style.background = '#CB9 url("./backgrounds/sand.jpg") repeat fixed';
    document.body.style.backgroundSize ='cover';
  }

  render () {
    return (
      <div id='about'>
        <h2>About Me</h2>
        <h2>Skills</h2>
      </div>
    )
  }
}

export default About;
