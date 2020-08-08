import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'AJ | React Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Check this out!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, am ',
  name: 'AJ',
  subtitle: 'I\'m a React Developer.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'When the screen is on, I am a web developer passionate about React, PHP and software development cycle.',
  paragraphTwo: 'When the screen is off, I like to live with my daugther(we pray, exercise, play, photo shoot, make fun together)',
  paragraphThree: 'Am addicted to reading articles in medium.com, eagar to contribute a non-profit org, willing to help people, mentor to juniors, motivator to failures',
  resume: 'https://ajaydev.netlify.app/resume.docx', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Auto repair and service company',
    info: 'Worked for a startup from northern region of USA where we provide application for the Auto repair and service for the vehicle.',
    info2: 'My role is as a frontend engineer, worked on react, material-ui, react-admin, mapbox, full-calendar etc',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Non-profit organization',
    info: 'A project close to my heart and with some like minded people',
    info2: 'Here am into digital marketing, developing the application in react, material-ui.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Restaurants asset management',
    info: 'Worked for a start-up Manchester, MA where we developed an application in web and mobile for a assest management, maintenance and purchase',
    info2: 'Here I worked as a frontend developer in react, react-strap, redux',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'jadacce@gmail.com',
  phone: '+917667552888',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/j.ajaydev/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ajaydev/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/gitajay',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
