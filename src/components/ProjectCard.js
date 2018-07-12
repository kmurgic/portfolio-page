import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';

class ProjectCard extends Component {
  state = {active: false};

  renderTools = (tools) => {
    const toolBoxes = tools.map((tool,index) => {
      const key = `tool-${index}`
      return <button key={key} className='tool'>{tool}</button>
    });
    return toolBoxes
  }

  toggleActive = () => {
    const toggledActive = !this.state.active;
    this.setState({active: toggledActive});
  }

  render () {
    const proj = this.props.project;
    const logo = /github/.test(proj.code) ?
      'fa fa-github' : 'fa fa-codepen';

    return (
      <div
       className={this.state.active ? 'flippable hover' : 'flippable'}
       onClick={this.toggleActive}
       onMouseOver= {() => this.setState({active: false})}>
        <div className='project-card'>
          <Card raised = {true} className='card-front'>
            <CardMedia
             style={{paddingTop: '100%'}}
             image = {proj.image}>
            </CardMedia>
            <h3 className='title-front'>{proj.title}</h3>
          </Card>
          <Card raised = {true} className= 'card-back'>
            <CardContent>
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <h4>Built With: {this.renderTools(proj.tools)}</h4>
            </CardContent>
            <CardActions className='card-actions'>
            {proj.link &&
              <a
               href={proj.link}
               target='_blank'
               rel = 'noopener noreferrer'><i className="fa fa-external-link-square"></i>
              </a>
            }
            <a
             href={proj.code}
             target='_blank'
             rel = 'noopener noreferrer'><i className={logo}></i>
            </a>
            </CardActions>
          </Card>
        </div>
      </div>
    )
  }
}

export default ProjectCard;
