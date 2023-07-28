/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: constants.js
   Version: I
   Creation: 02/06/2023
   Last modification: 03/06/2023
*/

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faX,
  faBars,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faEnvelope,
  faContactBook,
} from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  pawsitivePrototype,
  calculator,
  memoryGame,
  avatar,
  mongoDb,
  express,
} from "../assets";

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  avatar,
};

const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faGithub,
  faLinkedin,
  faEnvelope,
  faContactBook,
};

const introduction = {
  text: [
    "Hello there, I'm so happy you are here! (:",

    "My name is Sourabh, and I'm a Software Developer with a strong passion for technologies related to MERN.",

    "As a software developer, I specialize in the MERN stack, which includes MongoDB, Express, React, and Node.js.",

    "Additionally, I am proficient in HTML, CSS, AJAX, JSX, and JavaScript. I have hands-on experience with various React libraries that enhance web development.",

    "Im continuously thrilled to collaborate with individuals and teams who share my enthusiasm for crafting extraordinary experiences.",

    "Thank you for visiting my portfolio; your support means a lot to me!",
  ],
};

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const projects = [
  {
    name: "Bodymapp Pro",
    description: "Visualise changes in your body with your 3D Avatar. React",
    image: memoryGame,
    source_code_link: "https://github.com/Sourabh0777/Bodymapp",
    demo_link: "https://dainty-kulfi-9959fe.netlify.app//",
  },
  {
    name: "Traverl-Share",
    description:
      "Created dynamic web app for sharing visited places with MongoDB backend.Implemented secure login, authorization, and authentication functionalities.Utilized React and custom hooks for an engaging and optimized frontend.      Successfully deployed and maintained the application using DevOps practices.",
    image: pawsitivePrototype,
    source_code_link: "https://github.com/Sourabh0777/Traverl-share",
    demo_link: "https://travel-share-35a2e.web.app/",
  },
  {
    name: "Ace Cart",
    description:
      'Spearheaded the complete development of "Ace Cart," a dynamic e-commerce website, leveraging the full power of the MERN (MongoDB, Express.js, React.js, Node.js) stack.',
    image: calculator,
    source_code_link: "https://github.com/Sourabh0777/Ace-Cart",
    demo_link: "https://acecart.vercel.app/",
  },
];

const memoji = {
  image: [avatar],
};

const skills = [
  {
    id: "html",
    title: "HTML",
    icon: htmlIcon,
    description:
      "I have a strong command of HTML for organizing web pages and generating meaningful content that can be accessed by all users.",
  },
  {
    id: "css",
    title: "CSS",
    icon: cssIcon,
    description:
      "I possess expertise in utilizing CSS to design web pages and craft visually captivating layouts that enhance the overall user experience.",
  },
  {
    id: "javascript",
    title: "JavaScript",
    icon: jsIcon,
    description:
      "I have substantial experience in employing JavaScript to introduce interactivity and functionality into web pages, resulting in dynamic user interfaces.",
  },
  {
    id: "react",
    title: "React",
    icon: reactIcon,
    description:
      "I am well-versed in React, proficient in creating reusable components and managing application state using hooks and context.",
  },
  // {
  //   id: "java",
  //   title: "Java",
  //   icon: javaIcon,
  //   description:
  //     "I have extensive experience utilizing Java for object-oriented programming (OOP) and implementing data structures.",
  // },
  // {
  //   id: "aws",
  //   title: "Amazon Web Services",
  //   icon: awsIcon,
  //   description:
  //     "I am certified in AWS and proficient in working with EC2 and RDS instances, leveraging the power of cloud computing for scalable and reliable infrastructure.",
  // },
  // {
  //   id: "figma",
  //   title: "Figma",
  //   icon: figmaIcon,
  //   description:
  //     "In my Figma skills, I unleash creativity, designing captivating user interfaces and collaborating seamlessly with designers and developers.",
  // },
  {
    id: "git",
    title: "Git",
    icon: gitIcon,
    description:
      "I am proficient in Git, managing code changes, collaborating with others, and resolving conflicts effectively.",
  },
  {
    id: "github",
    title: "GitHub",
    icon: githubIcon,
    description:
      "I am skilled in using GitHub for seamless project collaboration, code sharing, and issue tracking. Through GitHub, I efficiently create and manage repositories and effectively present my work to potential employers.",
  },
  // {
  //   id: "psql",
  //   title: "Postgresql",
  //   icon: psqlIcon,
  //   description:
  //     "I have a strong command of PostgreSQL, encompassing a wide range of skills such as database normalization, triggers, front-end connectivity, and data analysis using software like Power BI.",
  // },
  {
    id: "vite",
    title: "Vite",
    icon: viteIcon,
    description:
      "I have gained considerable experience working with Vite for approximately six months, leveraging its capabilities to build React websites and seamlessly deploy them on platforms like Netlify.",
  },
  // {
  //   id: "py",
  //   title: "Python",
  //   icon: pyIcon,
  //   description:
  //     "With 3 years of Python experience, I am adept at coding functions and creating graphic interfaces using Tkinter.",
  // },
  {
    id: "node",
    title: "Node",
    icon: nodeIcon,
    description:
      "When it comes to building web applications, I prefer using Node as my runtime environment over Yarn. I have expertise in leveraging Node.js to develop powerful and scalable web applications.",
  },
  // {
  //   id: "neo",
  //   title: "Neo4j",
  //   icon: neoIcon,
  //   description:
  //     "I am knowledgeable in Neo4j, the graph database management system. I have expertise in utilizing GraphOS to build robust recommendation systems, leveraging the strength of graph-based data modeling.",
  // },
  // {
  //   id: "raspi",
  //   title: "Raspberry Pi",
  //   icon: raspIcon,
  //   description:
  //     "I have hands-on experience with Raspberry Pi, where I utilized a virtual Linux machine to execute programs written in assembly language. This allowed me to explore low-level computing and develop efficient code for the Raspberry Pi platform.",
  // },
  {
    id: "eslint",
    title: "Eslint",
    icon: eslintIcon,
    description:
      "I utilize ESLint to identify and resolve code issues, as well as standardize the structure of my projects. With ESLint, I ensure code quality and consistency throughout my development process.",
  },
  {
    id: "express",
    title: "Express.js",
    icon: express,
    description:
      "Express.js is a minimalist web application framework for Node.js, simplifying the process of building robust and scalable web applications and APIs.",
  },
  {
    id: "mongodb",
    title: "MongoDb",
    icon: mongoDb,
    description:
      "MongoDB is a NoSQL database management system that stores data in flexible, JSON-like documents, offering scalability and high performance for modern applications.",
  },
  
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export { media, introduction, projects, memoji, skills, markerSvg, icons };
