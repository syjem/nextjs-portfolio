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
import postgresql from '@/public/icons8-postgresql.svg';

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
    title: 'Financial Tracker',
    description:
      'Provides a user-friendly interface for monitoring and analyzing financial data in real-time.',
    tags: [react, next, typescript, tailwind, postgresql],
    imageUrl: project1,
  },
  {
    title: 'InvestMate',
    description:
      'Serves as a comprehensive investment platform that enables users to invest in stocks and manage their portfolio in a seamless and user-friendly manner.',
    tags: [react, typescript, next, tailwind],
    imageUrl: project2,
  },
  {
    title: 'Foundation',
    description:
      "We'll build the house of your Dream. Provide's customers with the flexibility to choose from a range of house designs.",
    tags: [next, react, typescript, postgresql, sass],
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
