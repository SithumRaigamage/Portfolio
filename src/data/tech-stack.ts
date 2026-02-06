import type { TechCategories } from '@/types';

export const techCategories: TechCategories = {
  web: [
    {
      name: 'HTML5',
      img: 'https://cdn.worldvectorlogo.com/logos/html-1.svg',
      desc: 'Markup Language',
    },
    {
      name: 'CSS3',
      img: 'https://cdn.worldvectorlogo.com/logos/css-3.svg',
      desc: 'Styling Language',
    },
    {
      name: 'JavaScript',
      img: 'https://cdn.worldvectorlogo.com/logos/javascript-1.svg',
      desc: 'Programming Language',
    },
    {
      name: 'Angular',
      img: 'https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg',
      desc: 'Frontend Framework',
    },
    {
      name: 'React',
      img: 'https://cdn.worldvectorlogo.com/logos/react-2.svg',
      desc: 'Frontend Library',
    },
    {
      name: 'TypeScript',
      img: 'https://cdn.worldvectorlogo.com/logos/typescript.svg',
      desc: 'Programming Language',
    },
    {
      name: 'Node.js',
      img: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg',
      desc: 'Runtime Environment',
    },
    {
      name: 'Tailwind CSS',
      img: 'https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg',
      desc: 'CSS Framework',
    },
    {
      name: 'Bootstrap',
      img: 'https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg',
      desc: 'CSS Framework',
    },
    {
      name: 'Sass',
      img: 'https://cdn.worldvectorlogo.com/logos/sass-1.svg',
      desc: 'CSS Preprocessor',
    },
    {
      name: 'jQuery',
      img: 'https://cdn.worldvectorlogo.com/logos/jquery-1.svg',
      desc: 'JavaScript Library',
    },
    {
      name: 'MySQL',
      img: 'https://cdn.worldvectorlogo.com/logos/mysql-2.svg',
      desc: 'Database',
    },
    {
      name: 'MongoDB',
      img: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg',
      desc: 'Database',
    },
    {
      name: 'Next.js',
      img: 'https://cdn.worldvectorlogo.com/logos/next-js.svg',
      desc: 'React Framework',
    },
    {
      name: 'Java',
      img: 'https://cdn.worldvectorlogo.com/logos/java-4.svg',
      desc: 'Programming Language',
    },
    {
      name: 'Spring Boot',
      img: 'https://cdn.worldvectorlogo.com/logos/spring-3.svg',
      desc: 'Backend Framework',
    },
    {
      name: 'Python',
      img: 'https://cdn.worldvectorlogo.com/logos/python-5.svg',
      desc: 'Programming Language',
    },
  ],
  mobile: [
    {
      name: 'Flutter',
      img: 'https://cdn.worldvectorlogo.com/logos/flutter.svg',
      desc: 'UI Framework',
    },
    {
      name: 'React Native',
      img: 'https://cdn.worldvectorlogo.com/logos/react-native-1.svg',
      desc: 'Mobile Framework',
    },
  ],
  cloud: [
    {
      name: 'AWS',
      img: 'https://cdn.worldvectorlogo.com/logos/aws-2.svg',
      desc: 'Cloud Provider',
    },
    {
      name: 'Vercel',
      img: 'https://cdn.worldvectorlogo.com/logos/vercel.svg',
      desc: 'Deployment Platform',
    },
    {
      name: 'Firebase',
      img: 'https://cdn.worldvectorlogo.com/logos/firebase-1.svg',
      desc: 'Backend as a Service',
    },
  ],
  ai: [
    {
      name: 'TensorFlow',
      img: 'https://cdn.worldvectorlogo.com/logos/tensorflow-2.svg',
      desc: 'ML Framework',
    },
    {
      name: 'R Programming',
      img: 'https://cdn.worldvectorlogo.com/logos/r-lang.svg',
      desc: 'Programming Language',
    },
  ],
  tools: [
    {
      name: 'Git',
      img: 'https://cdn.worldvectorlogo.com/logos/git-icon.svg',
      desc: 'Version Control System',
    },
    {
      name: 'Docker',
      img: 'https://cdn.worldvectorlogo.com/logos/docker-4.svg',
      desc: 'Containerization Tool',
    },
    {
      name: 'Postman',
      img: 'https://cdn.worldvectorlogo.com/logos/postman.svg',
      desc: 'API Testing Tool',
    },
    {
      name: 'Jira',
      img: 'https://cdn.worldvectorlogo.com/logos/jira-1.svg',
      desc: 'Project Management Tool',
    },
    {
      name: 'IntelliJ IDEA',
      img: 'https://cdn.worldvectorlogo.com/logos/intellij-idea-1.svg',
      desc: 'IDE',
    },
    {
      name: 'Visual Studio Code',
      img: 'https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg',
      desc: 'Code Editor',
    },
    {
      name: 'PyCharm',
      img: 'https://cdn.worldvectorlogo.com/logos/jetbrains-pycharm.svg',
      desc: 'IDE',
    },
    {
      name: 'GitHub',
      img: 'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg',
      desc: 'Version Control System',
    },
    {
      name: 'Bitbucket',
      img: 'https://cdn.worldvectorlogo.com/logos/bitbucket-icon.svg',
      desc: 'Version Control System',
    },
    {
      name: 'Windsurf AI',
      img: 'https://exafunction.github.io/public/images/windsurf/windsurf-app-icon.svg',
      desc: 'AI Tool',
    },
    {
      name: 'Figma',
      img: 'https://cdn.worldvectorlogo.com/logos/figma-icon.svg',
      desc: 'Design Tool',
    },
  ],
};

export const techCategoryTabs = [
  { value: 'web', label: 'Web Development' },
  { value: 'mobile', label: 'Mobile Development' },
  { value: 'cloud', label: 'Cloud Technologies' },
  { value: 'ai', label: 'AI & Machine Learning' },
  { value: 'tools', label: 'Tools' },
] as const;
