import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import '../CSS/App.css';
import NavItem from './NavItem.js';
import Home from './Home';
import Projects from './Projects'
import AboutMe from './AboutMe'


class App extends Component {

  renderNavLinks(linkNames) {
    const navItems = linkNames.map((name,index) => {
      const key = `Nav-item-${index}`;
      return <NavItem name = {name}  key = {key}/>
    });
    return navItems;
  }

  render() {
    const linkNames = ['Home', 'About', 'Projects']

    return (
      <Router className ='router'>
        <div className='container'>
          <nav>
            <ul>
              {this.renderNavLinks(linkNames)}
            </ul>
          </nav>
          <Route className='route' exact path= {process.env.PUBLIC_URL + '/'} component ={Home} />
          <Route className='route' path = {process.env.PUBLIC_URL + '/projects'} component ={Projects} />
          <Route className='route' path = {process.env.PUBLIC_URL + '/about'} component ={AboutMe} />
        </div>
      </Router>
    );
  }
}

export default App;
