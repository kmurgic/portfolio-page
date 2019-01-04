const projects = [
  {
    image: './screenshots/quizard.png',
    title: 'Quizard',
    description: 'Quizard is a React/Redux application that allows the user to create and play Jeopardy-style quizzes.  The user enters a title, five categories, and five questions for each category, and the application creates a Jeopardy-style game with that information.',
    tools: ['HTML', 'CSS', 'CSS-Grid', 'Flexbox', 'SCSS', 'React', 'Redux', 'React Router'],
    link: 'https://kdybvig.github.io/quizard/',
    code: 'https://github.com/kdybvig/quizard',
    additionalTags: []
  },
  {
    image: './screenshots/board-game-finder.png',
    title: 'Board Game Finder',
    description: "Board Game Finder is an application built with React designed to help users decide which board game to purchase. Users answer a questionnaire and the application uses data from the boardgamegeek.com XML API to find the five games that best match the user's responses.",
    tools: ['HTML', 'CSS', 'Flexbox', 'React', 'Material UI', 'XML API'],
    link: 'https://kdybvig.github.io/board-game-finder/',
    code: 'https://github.com/kdybvig/board-game-finder',
    additionalTags: ['lodash', 'API']
  },
  {
    image: './screenshots/react-checkers.png',
    title: 'React Checkers',
    description: 'Tournament rules checkers built with React. The board has green and cream colored squares. Red and white checker pieces are created using CSS only. Players move pieces using drag and drop.',
    tools: ['HTML', 'CSS', 'React', 'React DnD'],
    link: 'https://kdybvig.github.io/react-checkers/',
    code: 'https://github.com/kdybvig/react-checkers',
    additionalTags: ['lodash', 'drag and drop', 'game', 'responsive']
  },
  {
    image: './screenshots/markdown-previewer.png',
    title: 'Markdown Previewer',
    description: 'Markdown Previewer allows the user to put github flavored markdown in an edit box and shows an HTML rendered preview.  The app is a freeCodeCamp project built with React and Redux.',
    tools: ['HTML', 'CSS', 'React', 'Redux'],
    link: 'https://kdybvig.github.io/Markdown-Previewer/',
    code: 'https://github.com/kdybvig/Markdown-Previewer',
    additionalTags: ['freeCodeCamp', 'responsive']
  },
  {
    image: './screenshots/drum-machine.png',
    title: 'Drum Machine',
    description: 'When a user clicks a button or presses a key, the drum machine plays a sound and displays the name of the sound.  The app is a freeCodeCamp project built with React.',
    tools: ['HTML', 'CSS', 'React', 'Flexbox'],
    link: 'https://kdybvig.github.io/drum-machine/',
    code: 'https://github.com/kdybvig/drum-machine',
    additionalTags: ['freeCodeCamp']
  },
  {
    image: './screenshots/wikipedia-viewer.png',
    title: 'Wikipedia Viewer',
    description: 'The Wikipedia Viewer is a freeCodeCamp project.  A user can click on the "get random article" button to see a random Wikipedia article, or search for an article on Wikipedia and see up to 12 results with descriptions and links to Wikipedia articles.',
    tools: ['HTML', 'CSS', 'Flexbox', 'JQuery', 'REST API'],
    link: 'https://kdybvig.github.io/wikipedia-viewer/',
    code: 'https://github.com/kdybvig/calendartrick',
    additionalTags: ['API', 'freeCodeCamp']
  },
  {
    image: './screenshots/twitch-tv-viewer.png',
    title: 'Twitch TV Viewer',
    description: 'The Twitch TV Viewer is a freeCodeCamp project. It uses the Twitch TV API to shows users which TwitchTV channels are online and the current activity on each channel.  Users can search for a channel as well as filter by only online or only offline channels.',
    tools: ['HTML', 'CSS', 'REST API'],
    link: 'https://kdybvig.github.io/twitch-tv-viewer/',
    code: 'https://github.com/kdybvig/twitch-tv-viewer',
    additionalTags: ['API', 'freeCodeCamp']
  },
  {
    image: './screenshots/simon.png',
    title: 'React Simon Game',
    description: 'The Simon Game is a freeCodeCamp project. It mimics the functionality of the original Simon. It plays a sound on every button press.  Users can play in two modes: strict and basic.  The game notifies the user when they win or lose. ',
    tools: ['HTML', 'CSS', 'React', 'Asynchronous Code'],
    link: false,
    code: 'https://codepen.io/kdybvig/pen/YLOxEX',
    additionalTags: ['freeCodeCamp', 'game']
  },
  {
    image: './screenshots/calculator.png',
    title: 'Javascript Calculator',
    description: 'The Javascript Calculator is a freeCodeCamp project.  It is a four function calculator that mimics the functionality of an iPhone calculator exactly.  It is programmed using only Vanilla Javascript ',
    tools: ['HTML', 'CSS', 'Vanilla JS'],
    link: false,
    code: 'https://codepen.io/kdybvig/pen/GdWNNz',
    additionalTags: ['freeCodeCamp', 'math']
  },
  /*{
    image: './screenshots/towers-of-hanoi.png',
    title: 'Towers Of Hanoi',
    description: "Towers of Hanoi puzzle created with Javascript and JQuery.  The game allows the user to adjust the number of stones and keeps track of the user's number of moves and time.  It also tracks the user's record shortest time and fewest moves.",
    tools: ['HTML', 'CSS', 'JQuery'],
    link: 'https://kdybvig.github.io/towers-of-hanoi',
    code: 'https://github.com/kdybvig/towers-of-hanoi',
    additionalTags: ['game']
  },*/
  {
    image: './screenshots/pomodoro.png',
    title: 'Pomodoro Timer',
    description: 'The pomodoro timer is a freeCodeCamp project. It runs a session timer that lasts for 25 minutes, followed by a break timer that lasts for 5 minutes.  The user can change these times to anywhere between 1 and 99 minutes, as well as pause or reset the timer.',
    tools: ['HTML', 'CSS', 'Vanilla JS', 'Asynchronous Code'],
    link: false,
    code: 'https://codepen.io/kdybvig/pen/GdxYMb',
    additionalTags: ['freeCodeCamp', 'game']
  }
];

projects.forEach(project => {
  const titleWords = project.title.split(' ');
  project.tags = titleWords.concat(project.tools).concat(project.additionalTags);
});


export default projects;
