import { FaAws, FaNodeJs } from 'react-icons/fa';
import {
  SiCypress,
  SiDocker,
  SiFirebase,
  SiGithub,
  SiGo,
  SiGraphql,
  SiLeaflet,
  SiLinkedin,
  SiMapbox,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiReactquery,
  SiRedis,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiX,
} from 'react-icons/si';
import { text } from 'stream/consumers';
export const socials = [
  {
    link: 'https://www.linkedin.com/in/kimutai-wycliff-698903139/',
    label: 'LinkedIn',
    Icon: SiLinkedin,
  },
  {
    link: 'https://github.com/kimutaiwycliff',
    label: 'GitHub',
    Icon: SiGithub,
  },
  {
    link: 'https://x.com/kimtaiwiki',
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
    text: 'React Query',
    icon: SiReactquery,
  },
  {
    text: 'Mapbox',
    icon: SiMapbox,
  },
  {
    text: 'Leaftlet',
    icon: SiLeaflet,
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
    text: 'Golang',
    icon: SiGo
  },
  {
    text: 'Redux',
    icon: SiRedux
  }
];

export const projects = [
  {
    title: 'Job Tracker',
    description: 'This is a project that tracks job applications',
    techStack: [SiNextdotjs, SiReactquery, SiTailwindcss, SiFirebase],
    link: 'https://jobify-dev-seven.vercel.app/',
    cover: '/profile-1.png',
    background: 'bg-green-400',
  },
  {
    title: 'Indigenous Territories Map',
    description: 'This is a project that maps indigenous territories',
    techStack: [SiNextdotjs, SiReactquery,  SiLeaflet, SiRedis, SiPostgresql],
    link: 'http://54.246.245.19:3000',
    cover: '/territories_webmap.png',
    background: 'bg-indigo-400',
  },
  {
    title: 'Airbnb Clone',
    description: 'This is a clone of Airbnb',
    techStack: [SiNextdotjs, SiReactquery, SiTailwindcss, SiFirebase],
    link: 'https://nextjs-home-away-production.vercel.app/',
    cover: '/airbnb-clone.png',
    background: 'bg-gray-400',
  },
  {
    title: 'E-commerce project',
    description: 'This is an e-commerce project with Sanity CMS',
    techStack: [SiNextdotjs, SiReactquery, SiTailwindcss, SiFirebase],
    link: 'https://sanity-e-commerce-mu.vercel.app/',
    cover: '/sanity-e-commerce.png',
    background: 'bg-green-400',
  },
  {
    title: 'To do list',
    description: 'This is a todo list project made with React and Golang',
    techStack: [SiReactquery, SiTailwindcss, SiReact, SiGo, SiMongodb],
    link: 'https://go-todo-app-production-c0b6.up.railway.app/',
    cover: '/go-todo-app.png',
    background: 'bg-green-400',
  },
];

export const experiences = [
  {
    title: 'Front-End Developer',
    description: [
      'Designed and developed user interfaces using Angular.',
      'Collaborated with backend developers to integrate APIs and optimize performance.',
      'Ensured responsive design and cross-browser compatibility.',
      'Implemented best practices in UI/UX to enhance user experience.',
    ],
    date: '09/2023 - Present',
    company: 'Konza Silicon Company Limited',
    position: 'left',
  },
  {
    title: 'Senior GIS Desktop Developer',
    description: [
      'Developed GIS desktop applications for Windows and Linux.',
      'Created QGIS plugins and wrote Python scripts for geoprocessing automation.',
      'Conducted spatial data analysis using pandas and geopandas.',
      'Built web applications and data dashboards using Python.',
      'Managed and rendered spatial data using Geoserver and POSTGIS.',
      'Deployed applications using Docker Swarm and Kubernetes.',
      'Developed web maps for data visualizations using folium and dash libraries.',
    ],
    date: '09/2022 - 09/2023',
    company: 'Konza Silicon Company Limited',
    position: 'right',
  },
  {
    title: 'Geospatial Engineer',
    description: [
      'Conducted spatial analysis to identify optimal locations for renewable energy installations.',
      'Collected, managed, and analyzed spatial data to support project planning and monitoring.',
      'Utilized GIS to assess the environmental impact of proposed energy projects.',
      'Developed automated workflows to improve operational efficiency and data analysis accuracy.',
      'Implemented GIS solutions to optimize the planning and management of energy infrastructure.',
    ],
    date: '02/2022 - 09/2022',
    company: 'Bell Power International',
    position: 'left',
  },
  {
    title: 'Lead Surveyor',
    description: [
      'Successfully conducted topographic surveys and design reviews for highway construction.',
      'Established control points and benchmarks for accurate road construction using static survey techniques.',
      'Mapped and analyzed terrain to identify potential challenges and opportunities.',
      'Ensured alignment with project timelines and milestones through efficient survey planning and execution.',
      'Implemented precise land surveys to establish boundaries and right-of-way considerations.',
      'Developed comprehensive survey reports to guide decision-making in the early stages of the road project.',
    ],
    date: '07/2021 - 02/2022',
    company: 'KAAD, Somalia',
    position: 'right',
  },
];
