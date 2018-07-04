const projects = [
  {
    image: '../screenshots',
    title: 'React Checkers',
    description: '',
    tools: ['HTML', 'CSS', 'React'],
    link: '',
    additionalTags: ['Responsive Design']
  },
  {
    image: '',
    title: 'Board Game Finder',
    description: '',
    tools: ['HTML', 'CSS', 'React'],
    link: '',
    additionalTags: ['Responsive Design']
  },
  {
    image: '',
    title: 'Towers Of Hanoi',
    description: '',
    tools: ['HTML', 'CSS', 'React'],
    link: '',
    additionalTags: ['Responsive Design']
  },
  {
    image: '',
    title: 'Wikipedia Viewer',
    description: '',
    tools: ['HTML', 'CSS', 'React'],
    link: '',
    additionalTags: ['Responsive Design']
  },
  {
    image: '',
    title: 'Calendar Trick', 
    description: '',
    tools: ['HTML', 'CSS', 'React'],
    link: '',
    additionalTags: ['Responsive Design']
  }
];

projects.forEach(project => {
  const titleWords = project.title.split(' ');
  project.tags = titleWords.concat(project.tools).concat(project.additionalTags);
});


export default projects;
