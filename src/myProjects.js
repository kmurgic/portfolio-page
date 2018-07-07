const projects = [
  {
    image: './screenshots/react-checkers.png',
    title: 'React Checkers',
    description: 'Tournament rules checkers built with create-react-app. The board has green and cream colored squares. Red and white checker pieces are created using CSS only. Players move pieces using drag and drop.',
    tools: ['HTML', 'CSS', 'React', 'React DnD'],
    link: 'https://kdybvig.github.io/react-checkers/',
    code: 'https://github.com/kdybvig/react-checkers',
    additionalTags: ['lodash', 'drag and drop', 'game']
  },
  {
    image: './screenshots/board-game-finder.png',
    title: 'Board Game Finder',
    description: "Board-game-finder is an application built with create-react-app designed to help users decide which board game to purchase. Users answer a questionnaire and the application uses data from the boardgamegeek.com XML API to find the five games that best match the user's responses.",
    tools: ['HTML', 'CSS', 'Flexbox', 'React', 'Material UI', 'XML API'],
    link: 'https://kdybvig.github.io/board-game-finder/',
    code: 'https://github.com/kdybvig/board-game-finder',
    additionalTags: ['lodash']
  },
  {
    image: './screenshots/towers-of-hanoi.png',
    title: 'Towers Of Hanoi',
    description: "Towers of Hanoi puzzle created with Javascript and JQuery.  The game allows the user to adjust the number of stones and keeps track of the user's number of moves and time.  It also tracks the user's record shortest time and fewest moves.",
    tools: ['HTML', 'CSS', 'JQuery'],
    link: 'https://kdybvig.github.io/towers-of-hanoi',
    code: 'https://github.com/kdybvig/towers-of-hanoi',
    additionalTags: ['game']
  },
  {
    image: './screenshots/wikipedia-viewer.png',
    title: 'Wikipedia Viewer',
    description: 'The Wikipedia Viewer is a FreeCodeCamp project.  A user can click on get random article to get a random wikipedia article, or search for an article on wikipedia and see up to 12 results with descriptions and links to Wikipedia articles.',
    tools: ['HTML', 'CSS', 'Flexbox', 'JQuery', 'JSON API'],
    link: 'https://kdybvig.github.io/wikipedia-viewer/',
    code: 'https://github.com/kdybvig/calendartrick',
    additionalTags: ['API', 'FreeCodeCamp']
  },
  {
    image: './screenshots/calendar-trick.png',
    title: 'Calendar Trick',
    description: 'The calender trick site provides instructions for mathematically calculating the day of the week for any date.  Additionally, users can select a date from a pulldown, and the app explains the steps for calculating the day of the week for that date.',
    tools: ['HTML', 'CSS', 'CSS-Grid',],
    link: 'https://kdybvig.github.io/calendartrick/',
    code: 'https://github.com/kdybvig/wikipedia-viewer',
    additionalTags: []
  },
  {
    image: './screenshots/twitch-tv-viewer.png',
    title: 'Twitch TV Viewer',
    description: 'This app was created for a FreeCodeCamp project. This app uses the Twitch TV API to shows users which TwitchTV channels are online and the current activity on each channel.  Users can search for a channel as well as filter by only online or only offline channels.',
    tools: ['HTML', 'CSS', 'JSON API'],
    link: 'https://kdybvig.github.io/twitch-tv-viewer/',
    code: 'https://github.com/kdybvig/twitch-tv-viewer',
    additionalTags: ['API', 'FreeCodeCamp']
  },
  {
    image: './screenshots/calculator.png',
    title: 'Javascript Calculator',
    description: 'This app was created as a FreeCodeCamp project.  It is a four function calculator which mimics the functionality of an iPhone calculator exactly.  It is programmed using only Vanilla Javascript ',
    tools: ['HTML', 'CSS', 'Vanilla JS'],
    link: false,
    code: 'https://codepen.io/kdybvig/pen/GdWNNz',
    additionalTags: ['FreeCodeCamp', 'math']
  },
  {
    image: './screenshots/simon.png',
    title: 'React Simon Game',
    description: 'This game mimics the functionality of the original Simon. It plays a sound on every button press.  Users can play in two modes: strict and basic.  The game notifies the user when they win or lose. ',
    tools: ['HTML', 'CSS', 'React', 'Asynchronous Code'],
    link: false,
    code: 'https://codepen.io/kdybvig/pen/YLOxEX',
    additionalTags: ['FreeCodeCamp', 'game']
  },
  {
    image: './screenshots/pomodoro.png',
    title: 'Pomodoro Timer',
    description: 'This pomodoro timer runs a session timer that lasts for 25 minutes, followed by a break timer that lasts for 5 minutes.  The user can change these times to anywhere between 1 and 99 minutes, as well as pause or reset the timer.',
    tools: ['HTML', 'CSS', 'Vanilla JS', 'Asynchronous Code'],
    link: false,
    code: 'https://codepen.io/kdybvig/pen/GdxYMb',
    additionalTags: ['FreeCodeCamp', 'game']
  }
];

projects.forEach(project => {
  const titleWords = project.title.split(' ');
  project.tags = titleWords.concat(project.tools).concat(project.additionalTags);
});


export default projects;
