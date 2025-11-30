import { Project, SkillCategory, NavItem, ExperienceItem } from './types';
import { Home, FolderGit2, Terminal, FileText, Mail } from 'lucide-react';

export const PERSONAL_DETAILS = {
  name: "Kaligotla Sri Datta Sai Vithal",
  shortName: "Vithal",
  role: "Computer Science Student (AI & DS)",
  email: "kaligotlasridattasai18@gmail.com",
  linkedin: "https://www.linkedin.com/in/kaligotla-sri-datta-sai-vithal-01bb2a321",
  github: "https://github.com/Sridattasai18",
  about: `Hi, I’m Kaligotla Sri Datta Sai Vithal — a developer and designer who enjoys creating clean, modern, and meaningful digital experiences.

  I like working on projects that combine good design with practical functionality. Whether it’s building a web page, experimenting with AI, or improving a user interface, I enjoy the entire process of thinking, creating, and refining.

  I’m someone who learns best by doing, trying out new ideas, and improving a little with each project. I enjoy exploring different areas of tech like web development, UI/UX, data analytics, and app design because they help me understand how ideas turn into real, usable products.`
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Smartbridge",
    role: "Data Science Intern",
    year: "2025",
    description: "I worked on real datasets where I cleaned the data, explored patterns, and created dashboards using tools like Tableau. This experience helped me understand the importance of data storytelling and how insights can help solve real problems. It also strengthened my ability to work systematically, analyze situations, and present information clearly."
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'agrivision',
    title: "AgriVision",
    year: "2025",
    description: "A machine learning project that recommends suitable crops using soil and weather data. I trained the model, built the Flask backend, and connected everything to a simple web interface. The idea was to bring AI closer to agriculture.",
    tech: ["Python", "Flask", "ML", "HTML/CSS"],
    // Smart farming / Technology in agriculture
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=1600&auto=format&fit=crop",
    link: "https://github.com/Sridattasai18?tab=repositories"
  },
  {
    id: 'cinemate',
    title: "CineMate",
    year: "2025",
    description: "A full-stack movie tracker where users can save films, mark what they’ve watched, and keep everything organized. I worked on Firebase authentication, the Firestore database, and the entire frontend.",
    tech: ["JavaScript", "Firebase", "HTML/CSS"],
    // Movie collage / Netflix-style library background
    image: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=1600&auto=format&fit=crop",
    link: "https://github.com/Sridattasai18?tab=repositories"
  },
  {
    id: 'superstore',
    title: "Superstore Analytics",
    year: "2025",
    description: "A project exploring sales data to understand trends, profits, and customer behavior. I used Python, Pandas, and Tableau to clean the data and build dashboards that present insights clearly.",
    tech: ["Python", "Pandas", "Tableau"],
    // Data Visualization / Dashboard / Line Charts
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    link: "https://github.com/Sridattasai18?tab=repositories"
  },
  {
    id: 'portfolio',
    title: "Personal Portfolio",
    year: "2024",
    description: "My first real attempt at building a personal portfolio using HTML, CSS, and JavaScript. It was a playground to learn responsive design and basic DOM manipulation.",
    tech: ["HTML", "CSS", "JavaScript"],
    // Clean UI Design / Portfolio Style
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1600&auto=format&fit=crop",
    link: "https://github.com/Sridattasai18?tab=repositories"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages",
    description: "Core programming foundations.",
    skills: [
      { name: "Python", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Java", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "C", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
      { name: "JavaScript", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" }
    ],
    className: "col-span-1 md:col-span-2 row-span-1"
  },
  {
    title: "Frontend",
    description: "Building interfaces.",
    skills: [
      { name: "React", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "HTML5", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "Tailwind", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" }
    ],
    className: "col-span-1 row-span-1"
  },
  {
    title: "Backend & Cloud",
    description: "Server-side logic.",
    skills: [
      { name: "Node.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Firebase", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      { name: "Flask", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
      { name: "MongoDB", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
    ],
    className: "col-span-1 row-span-1"
  },
  {
    title: "Data & AI",
    description: "Analyzing and modeling.",
    skills: [
      { name: "Pandas", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
      { name: "NumPy", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
      { name: "Tableau", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/salesforce/salesforce-original.svg" },
      { name: "TensorFlow", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" }
    ],
    className: "col-span-1 md:col-span-2 row-span-1"
  },
  {
    title: "Tools",
    description: "My daily drivers.",
    skills: [
      { name: "Figma", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "Git", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "VS Code", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Postman", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" }
    ],
    className: "col-span-1 row-span-1"
  },
  {
    title: "Soft Skills",
    description: "How I work and collaborate.",
    skills: [
      { name: "Problem-solving" },
      { name: "Communication" },
      { name: "Teamwork" },
      { name: "Adaptability" },
      { name: "Time management" },
      { name: "Creativity" },
      { name: "Attention to detail" },
      { name: "Willingness to learn" },
      { name: "Patience" }
    ],
    className: "col-span-1 md:col-span-3 row-span-1"
  }
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', url: '#home', icon: Home },
  { label: 'Skills', url: '#skills', icon: Terminal }, 
  { label: 'Projects', url: '#projects', icon: FolderGit2 },
  { 
    label: 'Resume', 
    href: 'https://drive.google.com/file/d/1jnOIP-LfP7_8F0unLuh2BQ4QPh__deqx/view?usp=sharing', 
    icon: FileText, 
    external: true 
  },
  { label: 'Contact', url: '#contact', icon: Mail }
];