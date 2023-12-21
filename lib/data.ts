import React from 'react';

import project1 from '@/public/project-1.jpg';
import project2 from '@/public/project-2.png';
import project3 from '@/public/project-3.jpg';
import html from '@/public/icons8-html.svg';
import css from '@/public/icons8-css.svg';
import javascript from '@/public/icons8-javascript.svg';
import react from '@/public/icons8-react-native.svg';
import sass from '@/public/icons8-sass.svg';
import next from '@/public/next-icon.ico';
import tailwind from '@/public/icons8-tailwind-css.svg';
import typescript from '@/public/icons8-typescript.svg';
// import flask from '@/public/icons8-flask.svg';
// import python from '@/public/icons8-python.svg';
// import postgresql from '@/public/icons8-postgresql.svg';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    title: 'Project 1',
    description: 'A brief description...',
    tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
    imageUrl: project1,
  },
  {
    title: 'Project 2',
    description: 'A brief description...',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
    imageUrl: project2,
  },
  {
    title: 'Project 3',
    description: 'A brief description...',
    tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
    imageUrl: project3,
  },
] as const;

type skillsType = {
  name: string;
  icon: any;
};

export const skillsData = [
  {
    name: 'HTML',
    icon: html,
  },
  {
    name: 'CSS',
    icon: css,
  },
  {
    name: 'SASS',
    icon: sass,
  },
  {
    name: 'Tailwind',
    icon: tailwind,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React',
    icon: react,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'Next Js',
    icon: next,
  },
  // {
  //   name: 'Python',
  //   icon: python,
  // },
  // {
  //   name: 'Flask',
  //   icon: flask,
  // },
  // {
  //   name: 'PostgreSQL',
  //   icon: postgresql,
  // },
] as const;
