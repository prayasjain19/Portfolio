// ═══════════════════════════════════════════════
// Skills Section Logos
// ═══════════════════════════════════════════════

// Frontend
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import shadcnlogo from './assets/tech_logo/shadcnui.png';

// Backend
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import graphqlLogo from './assets/tech_logo/graphql.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import restlogo from './assets/tech_logo/rest.png'
import postgreslogo from './assets/tech_logo/Postgres.png'

// DevOps & Tools
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import dockerLogo from './assets/tech_logo/docker.png';
import awsLogo from './assets/tech_logo/aws.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postmanLogo from './assets/tech_logo/postman.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import claudeLogo from './assets/tech_logo/claude.png';
import antigravityLogo from './assets/tech_logo/antigravity.png';

// ═══════════════════════════════════════════════
// Experience Section Logos
// ═══════════════════════════════════════════════

import webkulLogo from './assets/company_logo/webkul-logo.webp';
import aquonicsLogo from './assets/company_logo/triflerlogo.jpg';
import ypsilonlogo from './assets/company_logo/ypsilon.png';

// ═══════════════════════════════════════════════
// Education Section Logos
// ═══════════════════════════════════════════════

import tmulogo from './assets/education_logo/tmulogo.jpg';
import twhslogo from './assets/education_logo/tmhs.jpeg';

// ═══════════════════════════════════════════════
// Project Section Images
// ═══════════════════════════════════════════════

import learnexpert from './assets/work_logo/learnexpert.png';
import jobportal from './assets/work_logo/jobportal.png';
import flexgymlogo from './assets/work_logo/flexgym.png';
import youtubelogo from './assets/work_logo/youtubeclone.png';


// ═══════════════════════════════════════════════════════
//  SKILLS
// ═══════════════════════════════════════════════════════

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5', logo: htmlLogo },
      { name: 'CSS3', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
      { name: 'React.js', logo: reactjsLogo },
      { name: 'Next.js', logo: nextjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Shadcn UI', logo: shadcnlogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', logo: nodejsLogo },
      { name: 'Express.js', logo: expressjsLogo },
      { name: 'GraphQL', logo: graphqlLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Rest API', logo: restlogo },
      { name: 'PostgreSQL', logo: postgreslogo },
    ],
  },
  {
    title: 'DevOps & Cloud',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'Docker', logo: dockerLogo },
      { name: 'AWS', logo: awsLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Postman', logo: postmanLogo },
    ],
  },
  {
    title: 'AI & Productivity',
    skills: [
      { name: 'Claude', logo: claudeLogo },
      { name: 'Antigravity', logo: antigravityLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'GitHub', logo: githubLogo },
    ],
  },
];


// ═══════════════════════════════════════════════════════
//  EXPERIENCE 
// ═══════════════════════════════════════════════════════

export const experiences = [
  {
    id: 0,
    img: webkulLogo,
    role: "Associate Software Engineer",
    company: "Webkul Software Pvt. Ltd.",
    date: "November 2025 – Present",
    desc: "Building and maintaining a production-grade Headless E-commerce theme with Next.js and Magento, using GraphQL & Rest APIs. Contributing to core product features deployed across multiple client storefronts. Driving frontend performance gains by optimizing component architecture, eliminating redundant API calls, and streamlining state management across large-scale headless applications.",
    skills: [
      "Next.js",
      "React.js",
      "GraphQL",
      "Magento",
      "TypeScript",
      "REST API",
      "Tailwind CSS",
    ],
  },
  {
    id: 1,
    img: aquonicsLogo,
    role: "Full Stack Developer",
    company: "Aquonics Tech Services Pvt. Ltd.",
    date: "July 2025 – November 2025",
    desc: "Developed partner and admin dashboards in Next.js, enabling partners to manage venues, create coupons, and track user meet-ups — boosting partner engagement by 35%. Integrated WhatsApp templates, email, and notification services into the admin panel, cutting manual operational effort by 40%. Implemented advanced filters, pagination, and sorting to optimize large dataset management.",
    skills: [
      "Next.js",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux",
      "REST API",
    ],
  },
  {
    id: 2,
    img: ypsilonlogo,
    role: "Technical Intern — Full Stack Development",
    company: "YpSilon IT Solutions Pvt. Ltd.",
    date: "July 2024 – October 2024",
    desc: "Developed and optimized dynamic, reusable UI components using React.js and Redux, reducing frontend load times by 30% across multiple modules. Collaborated with backend teams to integrate RESTful APIs, improving data flow efficiency and reducing API call latency by 25%.",
    skills: [
      "React.js",
      "Redux",
      "JavaScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
  },
];


// ═══════════════════════════════════════════════════════
//  EDUCATION
// ═══════════════════════════════════════════════════════

export const education = [
  {
    id: 0,
    img: tmulogo,
    school: "Teerthanker Mahaveer University, Moradabad",
    date: "July 2021 – June 2025",
    grade: "8.4 CGPA",
    desc: "Completed B.Tech in Computer Science Engineering with a specialization in Artificial Intelligence. Built a strong foundation in Data Structures, Algorithms, Web Development, and Software Engineering alongside modern AI concepts including Machine Learning and NLP.",
    degree: "Bachelor of Technology — CSE (AI)",
  },
  {
    id: 1,
    img: twhslogo,
    school: "The Woods Heritage School, Jhansi (UP)",
    date: "May 2020 – June 2021",
    grade: "76%",
    desc: "Completed Class 12 (ISC) with Physics, Chemistry, Mathematics, and Computer Science.",
    degree: "ISC (XII) — PCM with Computer Science",
  },
  {
    id: 2,
    img: twhslogo,
    school: "The Woods Heritage School, Jhansi (UP)",
    date: "April 2018 – March 2019",
    grade: "72%",
    desc: "Completed Class 10 (ICSE) with Science and Computer Application.",
    degree: "ICSE (X) — Science with Computer Application",
  },
];


// ═══════════════════════════════════════════════════════
//  PROJECTS
// ═══════════════════════════════════════════════════════

export const projects = [
  {
    id: 0,
    title: "Learn Expert — Your Learning Platform",
    description:
      "A full-featured EdTech platform where instructors create and manage courses while students explore, purchase, and learn interactively. Features role-based authentication, Razorpay payment integration, and Cloudinary media uploads. Defined and maintained 15+ RESTful API endpoints with Express.js for real-time data handling, and optimized MongoDB queries for scalable dataset retrieval.",
    image: learnexpert,
    tags: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "Razorpay", "Cloudinary"],
    github: "https://github.com/prayasjain19/Learn_Expert-Platform",
    webapp: "https://learn-expert-platform.onrender.com/",
  },
  {
    id: 1,
    title: "Job Portal — Smart Recruitment App",
    description:
      "A LinkedIn-inspired recruitment platform connecting job seekers with employers. Designed a modular backend with Express.js middleware, cutting onboarding time for new developers by 30%. Applied JWT-based role authentication enabling recruiters to post jobs and students to apply securely, reducing unauthorized access by 90%.",
    image: jobportal,
    tags: ["React.js", "Node.js", "MongoDB", "Express.js", "JWT", "Tailwind CSS"],
    github: "https://github.com/prayasjain19/Job_Portal",
    webapp: "https://job-portal-mwzl.onrender.com",
  },
  {
    id: 2,
    title: "Flex Gym",
    description:
      "A sleek, responsive gym landing page showcasing services, plans, trainers, and testimonials. Features smooth scrolling, engaging animations, and a fully mobile-friendly design with clear CTAs — built to simulate a real client-facing fitness brand website.",
    image: flexgymlogo,
    tags: ["React.js", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/prayasjain19/Flex_Gym",
    webapp: "https://flex-gym-mocha.vercel.app/",
  },
  {
    id: 3,
    title: "YouTube Clone",
    description:
      "A YouTube-inspired video streaming platform that replicates core features — searching, watching, browsing categories, and viewing related content. Integrated the YouTube Data API for real-time content, with dynamic routing and a clean responsive UI.",
    image: youtubelogo,
    tags: ["React.js", "YouTube API", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/prayasjain19/Youtube-Clone",
    webapp: "https://youtube-clone-one-omega.vercel.app",
  },
];


// ═══════════════════════════════════════════════════════
//  CERTIFICATIONS
// ═══════════════════════════════════════════════════════

export const certifications = [
  {
    id: 0,
    title: "React.js Development Course",
    issuer: "Scaler Academy",
    date: "June 2025",
  },
  {
    id: 1,
    title: "AI Internship Program",
    issuer: "TechSaksham (AICTE × Microsoft × SAP)",
    date: "November 2024",
  },
  {
    id: 2,
    title: "GIT Training Certification",
    issuer: "IIT Bombay",
    date: "February 2024",
  },
  {
    id: 3,
    title: "Web Designing Training",
    issuer: "Cetpa Infotech Pvt. Ltd.",
    date: "June 2023",
  },
];


// ═══════════════════════════════════════════════════════
//  STATS / ACHIEVEMENTS
// ═══════════════════════════════════════════════════════

export const stats = [
  {
    label: "Problems Solved",
    value: "250+",
    platform: "LeetCode",
  },
  {
    label: "Months Experience",
    value: "9+",
    platform: "Professional",
  },
  {
    label: "Projects Built",
    value: "10+",
    platform: "Full Stack",
  },
  {
    label: "Achievement Badges",
    value: "5",
    platform: "LeetCode",
  },
];