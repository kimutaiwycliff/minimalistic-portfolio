import { FaAws, FaNodeJs } from 'react-icons/fa';
import {
  SiCypress,
  SiDocker,
  SiFirebase,
  SiGithub,
  SiGraphql,
  SiLinkedin,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiReactquery,
  SiRedis,
  SiTailwindcss,
  SiTypescript,
  SiX,
} from 'react-icons/si';
export const socials = [
  {
    link: 'https://www.linkedin.com/in/wycliff-kimutai/',
    label: 'LinkedIn',
    Icon: SiLinkedin,
  },
  {
    link: 'https://www.linkedin.com/in/wycliff-kimutai/',
    label: 'GitHub',
    Icon: SiGithub,
  },
  {
    link: 'https://www.linkedin.com/in/wycliff-kimutai/',
    label: 'Twitter',
    Icon: SiX,
  },
];
export const skills = [
  {
    text: 'React',
    icon: SiReact,
  },
  {
    text: 'Next.js',
    icon: SiNextdotjs,
  },
  {
    text: 'TailwindCSS',
    icon: SiTailwindcss,
  },
  {
    text: 'Node.js',
    icon: FaNodeJs,
  },
  {
    text: 'TypeScript',
    icon: SiTypescript,
  },
  {
    text: 'GraphQL',
    icon: SiGraphql,
  },
  {
    text: 'Docker',
    icon: SiDocker,
  },
  {
    text: 'PostgreSQL',
    icon: SiPostgresql,
  },
  {
    text: 'MongoDB',
    icon: SiMongodb,
  },
  {
    text: 'Redis',
    icon: SiRedis,
  },
  {
    text: 'AWS',
    icon: FaAws,
  },
  {
    text: 'Firebase',
    icon: SiFirebase,
  },
  {
    text: 'Cypress',
    icon: SiCypress,
  },
];

export const projects = [
  {
    title: 'Job Tracker',
    description: 'This is a project',
    techStack: [SiNextdotjs, SiReactquery, SiTailwindcss, SiFirebase],
    link: 'https://www.linkedin.com/in/wycliff-kimutai/',
    cover: '/profile-1.png',
    background: 'bg-green-400',
  },
  {
    title: 'Project 2',
    description: 'This is a project',
    techStack: [SiNextdotjs, SiReactquery, SiTailwindcss, SiFirebase],
    link: 'https://www.linkedin.com/in/wycliff-kimutai/',
    cover: '/bio.png',
    background: 'bg-indigo-400',
  },
  {
    title: 'Project 3',
    description: 'This is a project',
    techStack: [SiNextdotjs, SiReactquery, SiTailwindcss, SiFirebase],
    link: 'https://www.linkedin.com/in/wycliff-kimutai/',
    cover: '/profile-1.png',
    background: 'bg-gray-400',
  },
  {
    title: 'Project 4',
    description: 'This is a project',
    techStack: [SiNextdotjs, SiReactquery, SiTailwindcss, SiFirebase],
    link: 'https://www.linkedin.com/in/wycliff-kimutai/',
    cover: '/profile-1.png',
    background: 'bg-green-400',
  },
];

export const experiences = [
  {
    title: 'Senior Desktop Developer',
    description:['Developed GIS apps, QGIS plugins, and automation scripts; managed data with GeoServer and POSTGIS.','ddd','ddd']
      ,
    date: '09/2022 - Present',
    company: 'Konza Silicon Company Limited',
    position: 'left',
  },
  {
    title: 'Geospatial Engineer',
    description:['Developed GIS apps, QGIS plugins, and automation scripts; managed data with GeoServer and POSTGIS.','ddd','ddd']
      ,
    date: '02/2022 - 09/2022',
    company: 'Bell Power International',
    position: 'right',
  },
  {
    title: 'Lead Surveyor',
    description:['Conducted topographic surveys and design reviews for the Garaad-Galkayo-Tuurdibi road project.']
      ,
    date: '07/2021 - 02/2022',
    company: 'KAAD, Somalia',
    position: 'left',
  },
  {
    title: 'Engineering Survey Intern',
    description:['Assisted in land surveys, topographic assessments, and CAD designs for the Busia-Malaba road project.']
      ,
    date: '08/2019 - 02/2020',
    company: 'Kenya National Highways Authority (KeNHA)',
    position: 'right',
  },
];

