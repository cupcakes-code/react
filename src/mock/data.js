import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: ' Jessica Bryant', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: ' Welcome thanks for stopping by', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, Im',//  
  name: 'Jessica D Bryant', //
  subtitle: 'Aspiring Front end/ Ux developer',// Aspiring Front end/ Ux developer
  cta: 'Thanks for stopping By.',// 
};

// ABOUT DATA
export const aboutData = {
  img: 'profilepic.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume:  '<embed type="application/pdf" src="C:\Users\Jbrya\OneDrive\Desktop\reactportfolio\my-gatsby-project\mate-portfolio\gatsby-simplefolio\src\components\Jessica Bryant Resume.docx" style= width=100% height 600px> </embed>', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'landing-page.jpg',
    title: 'Mock trave website',
    info: 'Travel website made with CSS and HTML',
    info2: '',
    url: 'https://travelag.netlify.app/',
    repo: 'https://github.com/cupcakes-code/rea', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'todolist.jpg',
    title: 'To do list',
    info: 'Simple to do list made with React using Javascript, Html and CSS',
    info2: '',
    url: 'https://cupcakes-code.github.io/proj2/',
    repo: 'https://github.com/cupcakes-code/proj2', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '202-560-1656',
  btn: 'Email me',
  email: 'Jbryant1015@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    
    
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jessica-bryant-709036173/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/cupcakes-code',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
