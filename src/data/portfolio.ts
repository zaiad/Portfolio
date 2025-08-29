import { Project, Skill, TimelineItem } from "../types";
import adspot from "../public/img/adspot.png";
import marhaba from "../public/img/marhaba.png";
import vivo from "../public/img/vivo.png";
import germanHaus from "../public/img/germanHaus.png";

export const projects: Project[] = [
  {
    id: 1,
    title: "GermanHaus",
    description:
      "A showcase website for GermanHaus, an online platform for learning German. The site highlights courses, features, and resources to help users improve their German language skills.",
    image: germanHaus,
    technologies: ["Next.js", "Tailwind CSS"],
    // liveUrl: "https://example.com",
    // githubUrl: "https://github.com/username/ecommerce",
  },
  {
    id: 2,
    title: "AdSpot",
    description:
      "A web platform designed to manage and display digital advertisements efficiently. Features include campaign management, responsive UI, and seamless integration for advertisers.",
    image: adspot,
    technologies: [
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    // liveUrl: "https://adspot.ma/",
    // githubUrl: "https://github.com/username/taskapp",
  },
  {
    id: 3,
    title: "Livraison Marhaba",
    description:
      "A delivery management platform featuring real-time order tracking, user-friendly interface, and secure data handling for optimized logistics",
    image: marhaba,
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "Stripe",
      "MongoDb",
      "Tailwind CSS",
    ],
    // liveUrl: "https://example.com",
    // githubUrl: "https://github.com/username/ai-generator",
  },
  {
    id: 4,
    title: "Vivo Energy Stock App",
    description:
      "A mobile application for stock management, enabling real-time inventory tracking and seamless API integration for efficient operations.",
    image: vivo,
    technologies: ["React-Native", "Symfony", "Tailwind CSS", "Geolocation"],
    // liveUrl: "https://example.com",
    // githubUrl: "https://github.com/username/weather-app",
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "frontend" },
  { name: "React-Native", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  // { name: "Vue.js", category: "frontend" },
  { name: "Tailwind CSS & bootstrap 5", category: "frontend" },
  { name: "HTML5/CSS3", category: "frontend" },

  //  // Frontend
  // { name: "React", level: 95, category: "frontend" },
  // { name: "TypeScript", level: 90, category: "frontend" },
  // { name: "Next.js", level: 85, category: "frontend" },
  // { name: "Vue.js", level: 80, category: "frontend" },
  // { name: "Tailwind CSS", level: 95, category: "frontend" },
  // { name: "HTML5/CSS3", level: 98, category: "frontend" },

  // Backend
  { name: "Node.js", category: "backend" },
  // { name: "Python", category: "backend" },
  { name: "Express.js", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "MongoDB", category: "backend" },
  // { name: "GraphQL", category: "backend" },

  // Tools
  { name: "Git", category: "tools" },
  { name: "Docker", category: "tools" },
  // { name: "AWS", category: "tools" },
  { name: "Figma", category: "tools" },
  // { name: "Webpack", category: "tools" },
  { name: "Jest", category: "tools" },
];

export const timeline: TimelineItem[] = [
  {
    year: "2024",
    title: "Freelance Full-Stack Developer",
    company: "IM Creation",
    description:
      "Designed and developed scalable web and mobile solutions using the MERN Stack and Next.js, implementing modern UI and ensuring performance optimization.",
  },
  {
    year: "2024",
    title: "Mobile Developer Intern",
    company: "ARK-X Talent Factory",
    description:
      "Created a mobile application for stock management (Vivo Energy) using React Native, integrated RESTful APIs, and optimized user interfaces for better performance.",
  },
  {
    year: "2024",
    title: "Advanced Full-Stack Developer Training",
    company: "Jobintech",
    description:
      "Completed a specialized program focusing on advanced industry practices in full-stack development, including modern frameworks and agile methodologies.",
  },
  {
    year: "2023",
    title: "Full-Stack Developer Intern",
    company: "Dial Technologie",
    description:
      "Developed an e-commerce web application using React for the frontend and Node.js/Express.js for the backend, integrating MongoDB for data management.",
  },
  {
    year: "2021 - 2023",
    title: "Full-Stack Web Development Trainee",
    company: "YouCode (UM6P)",
    description:
      "Completed an intensive full-stack training program based on the 'Learning by Doing' methodology, mastering both frontend and backend development.",
  },
];
