// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import shadcnlogo from './assets/tech_logo/shadcnui.png';
import renderlogo from './assets/tech_logo/render.jpeg';
import prismalogo from './assets/tech_logo/prisma.png'
import pandaslogo from './assets/tech_logo/pandas.png'
import numpylogo from './assets/tech_logo/numpy.png'

// Experience Section Logo's

import techsakshamlogo from './assets/company_logo/techsaksham.jpg'
import ypsilonlogo from './assets/company_logo/ypsilon.png'
import jobportal from './assets/work_logo/jobportal.png';

// Education Section Logo's

import tmulogo from './assets/education_logo/tmulogo.jpg';
import twhslogo from './assets/education_logo/tmhs.jpeg';

// Project Section Logo's

import taskremLogo from './assets/work_logo/task_rem.png';

import webverLogo from './assets/work_logo/web_dig.png';
import studynotionlogo from './assets/work_logo/studynotion.png';
import learnexpert from './assets/work_logo/learnexpert.png'
import flexgymlogo from './assets/work_logo/flexgym.png';
import youtubelogo from './assets/work_logo/youtubeclone.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },  
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Shadcn UI', logo: shadcnlogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
      { name: 'Prisma', logo: prismalogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo }, 
      { name: 'Python', logo: pythonLogo },
      { name: 'JS', logo: javascriptLogo },
      { name: 'TS', logo: typescriptLogo },
      { name: 'Pandas', logo: pandaslogo },
      { name: 'Numpy', logo: numpylogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Render', logo: renderlogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: techsakshamlogo,
      role: "Artificial Intelligence Intern ",
      company: "TechSaksham",
      date: "November 2024 - December 2024",
      desc: "During this internship, I had the incredible opportunity to delve into the realms of Artificial Intelligence (Al) and Python programming, gaining hands-on experience in solving real-world problems through technology. The program, organized by AICTE in collaboration with Microsoft, SAP, and the Edunet Foundation, focused on transformative learning and practical applications of Al.",
      skills: [
        "Python",
        "OpenCV",
        "Pandas",
        "Numpy",
        "Tkinter",
        "Machine Learning",
        "SQL",
      ],
    },
    {
      id: 1,
      img: ypsilonlogo,
      role: "Technical Intern – Full Stack Development",
      company: "YpSilon It Solutions Pvt Ltd",
      date: "July 2024 - October 2024",
      desc: "Developed and optimizing front-end interface using React.js ensuring a seamless interface user experience and build robust backend services with Node.js and Express.js including database management with MongoDb Collaborated with designers and other developers to translate wire frames and user stories into functional code.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "NodeJs",
        "Express Js",
        "MongoDB",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: tmulogo,
      school: "Teerthanker Mahaveer University, Moradabad",
      date: "Sept 2021 - July 2025",
      grade: "8.4 CGPA",
      desc: "I have completed my B.Tech in Computer Science with a specialization in Artificial Intelligence from TMU, Moradabad. During my time at TMU, I built a strong foundation in core computer science subjects such as Programming, Data Structures, Algorithms, Web Development, and Software Engineering. Alongside, I was introduced to modern AI concepts including Machine Learning, NLP which gave me insights into how intelligent systems are built and applied in real life. My journey at TMU played a significant role in shaping my problem-solving mindset and deepening my interest in technology.",
      degree: "Bachelor of Technology - Btech CSE(AI)",
    },
    {
      id: 1,
      img: twhslogo,
      school: "The Woods Heritage School, Jhansi(UP)",
      date: "May 2020 - June 2021",
      grade: "76%",
      desc: "I completed my class 12 education from The Woods Heritage School under the ICSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "ISC(XII) - PCM with Computer Science",
    },
    {
      id: 2,
      img: twhslogo,
      school: "The Woods Heritage School, Jhansi(UP)",
      date: "Apr 2018 - March 2019",
      grade: "72%",
      desc: "I completed my class 10 education from The Woods Heritage School under the ICSE board, where I studied Science with Computer.",
      degree: "ICSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Learn Expert - Your Learning Platform",
      description:
        "LearnExpert is a fully functional EdTech web app where instructors can create, manage, and upload course content, while students can explore, purchase, and learn from interactive courses. It features role-based authentication, a smooth payment flow using Razorpay, and media uploads via Cloudinary. Built with the MERN stack and styled using Tailwind CSS, this project reflects the core functionality of modern platforms like Udemy or Coursera.",
      image: learnexpert,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/prayasjain19/Learn_Expert-Platform",
      webapp: "https://learn-expert-platform.onrender.com/",
    },
    {
      id: 1,
      title: "Job Portal",
      description:
        "I built a full-featured Job Portal web application inspired by platforms like LinkedIn and Naukri, designed to connect job seekers with employers in a seamless, intuitive way. The app includes user authentication, job listings, applications, profile management, and an admin dashboard for managing posts and users. It was developed using the MERN stack (MongoDB, Express, React, Node.js). This project helped me gain deeper insights into building large-scale CRUD applications and managing user roles securely.",
      image: jobportal,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/prayasjain19/Job_Portal",
      webapp: "https://job-portal-mwzl.onrender.com",
    },
    {
      id: 2,
      title: "Flex Gym",
      description:
        "Flex Gym is a sleek, responsive gym website I designed to showcase services, plans, trainers, and testimonials — perfect for fitness brands. It features smooth scrolling, engaging animations, and a mobile-friendly design. I focused on creating a visually appealing layout with clear CTAs to simulate a real client-facing landing page. This project sharpened my frontend skills, especially in building responsive designs from scratch.",
      image: flexgymlogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/prayasjain19/Flex_Gym",
      webapp: "https://flex-gym-mocha.vercel.app/",
    },
    {
      id: 3,
      title: "Youtube Clone",
      description:
        "I built a YouTube-inspired video streaming platform to dive deeper into building responsive UIs and working with APIs. This project replicates core YouTube features like searching videos, watching them in a dedicated player, browsing categories, and viewing related content. I used the YouTube Data API for real-time video content, and React with Tailwind CSS to build a clean, responsive UI. This project helped me understand API integration, dynamic routing, and user experience design on video-heavy platforms.",
      image: youtubelogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/prayasjain19/Youtube-Clone",
      webapp: "https://youtube-clone-one-omega.vercel.app",
    },
    // {
    //   id: 4,
    //   title: "Task Reminder Chrome Extension Tool",
    //   description:
    //     "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
    //   image: taskremLogo,
    //   tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
    //   github: "https://github.com/codingmastr/Task-Reminder-Tool",
    //   webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
    // },
    // {
    //   id: 5,
    //   title: "Webverse Digital",
    //   description:
    //     "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
    //   image: webverLogo,
    //   tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
    //   github: "https://github.com/codingmastr/Webverse-Digital",
    //   webapp: "https://webversedigital.com/",
    // },
  ];  