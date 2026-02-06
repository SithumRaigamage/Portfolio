import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'CeraFlaw',
    description: 'Cross-platform CeraFlaw Marketing Page',
    category: 'web_development',
    imageUrl: '/images/projects/tile.jpeg',
    projectLink: '#',
    techStack: [
      { name: 'HTML5', icon: 'https://cdn.worldvectorlogo.com/logos/html-1.svg' },
      { name: 'CSS3', icon: 'https://cdn.worldvectorlogo.com/logos/css-3.svg' },
      { name: 'JavaScript', icon: 'https://cdn.worldvectorlogo.com/logos/javascript-1.svg' },
    ],
  },
  {
    id: '2',
    title: 'Predictive Analytics',
    description: 'Machine Learning Clustering and Neural Network',
    category: 'AI_ML',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
    projectLink: '#',
    techStack: [
      { name: 'R', icon: 'https://cdn.worldvectorlogo.com/logos/r-lang.svg' },
    ],
  },
  {
    id: '3',
    title: 'To Do App',
    description: 'To Do App',
    category: 'web_development',
    imageUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&auto=format&fit=crop',
    projectLink: '#',
    techStack: [
      { name: 'HTML5', icon: 'https://cdn.worldvectorlogo.com/logos/html-1.svg' },
      { name: 'CSS3', icon: 'https://cdn.worldvectorlogo.com/logos/css-3.svg' },
      { name: 'JavaScript', icon: 'https://cdn.worldvectorlogo.com/logos/javascript-1.svg' },
    ],
  },
  {
    id: '4',
    title: 'QR Code Generator',
    description: 'QR Code Generator',
    category: 'web_development',
    imageUrl: 'https://images.unsplash.com/photo-1595079676339-1534801ad6cf?w=800&auto=format&fit=crop',
    projectLink: '#',
    techStack: [
      { name: 'HTML5', icon: 'https://cdn.worldvectorlogo.com/logos/html-1.svg' },
      { name: 'CSS3', icon: 'https://cdn.worldvectorlogo.com/logos/css-3.svg' },
      { name: 'JavaScript', icon: 'https://cdn.worldvectorlogo.com/logos/javascript-1.svg' },
      { name: 'Python', icon: 'https://cdn.worldvectorlogo.com/logos/python-5.svg' },
    ],
  },
  {
    id: '5',
    title: 'Weather App',
    description: 'Weather App',
    category: 'web_development',
    imageUrl: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&auto=format&fit=crop',
    projectLink: '#',
    techStack: [
      { name: 'HTML5', icon: 'https://cdn.worldvectorlogo.com/logos/html-1.svg' },
      { name: 'CSS3', icon: 'https://cdn.worldvectorlogo.com/logos/css-3.svg' },
      { name: 'JavaScript', icon: 'https://cdn.worldvectorlogo.com/logos/javascript-1.svg' },
      { name: 'Python', icon: 'https://cdn.worldvectorlogo.com/logos/python-5.svg' },
    ],
  },
  {
    id: '6',
    title: 'Music Player',
    description: 'Music Player',
    category: 'web_development',
    imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&auto=format&fit=crop',
    projectLink: '#',
    techStack: [
      { name: 'HTML5', icon: 'https://cdn.worldvectorlogo.com/logos/html-1.svg' },
      { name: 'CSS3', icon: 'https://cdn.worldvectorlogo.com/logos/css-3.svg' },
      { name: 'JavaScript', icon: 'https://cdn.worldvectorlogo.com/logos/javascript-1.svg' },
      { name: 'Python', icon: 'https://cdn.worldvectorlogo.com/logos/python-5.svg' },
    ],
  },
  {
    id: '7',
    title: 'Demon Slayer Website',
    description: 'Demon Slayer Website',
    category: 'web_development',
    imageUrl: '/images/projects/1317168.jpeg',
    projectLink: '#',
    techStack: [
      { name: 'HTML5', icon: 'https://cdn.worldvectorlogo.com/logos/html-1.svg' },
      { name: 'CSS3', icon: 'https://cdn.worldvectorlogo.com/logos/css-3.svg' },
      { name: 'JavaScript', icon: 'https://cdn.worldvectorlogo.com/logos/javascript-1.svg' },
      { name: 'Bootstrap', icon: 'https://cdn.worldvectorlogo.com/logos/bootstrap-1.svg' },
    ],
  },
];

export const projectCategories = [
  { value: 'all', label: 'All' },
  { value: 'web_development', label: 'Web Development' },
  { value: 'mobile', label: 'Mobile Apps' },
  { value: 'AI_ML', label: 'AI & ML' },
  { value: 'IOT', label: 'Embedded Systems' },
] as const;
