import type { PersonalInfo, Education, Experience, Service, Stat, SocialLink, NavItem } from '@/types';

export const personalInfo: PersonalInfo = {
  name: 'Sithum Raigamage',
  jobTitle: 'Software Engineer Intern',
  location: 'Colombo, Sri Lanka',
  email: 'sraig2002@gmail.com',
  github: 'https://github.com/SithumRaigamage',
  linkedin: 'https://www.linkedin.com/in/sithum-raigamage/',
  profileImage: `${import.meta.env.BASE_URL}images/profile/DSC_4735.jpg`,
  bio: [
    "I'm a passionate Software Engineering student with a talent for problem-solving and a deep curiosity for exploring innovative technologies. With a strong foundation in frameworks like Angular, React, and Node.js, and proficiency in databases such as MySQL and MongoDB, I thrive in crafting seamless user experiences and scalable back-end solutions.",
    "My journey has been marked by hands-on experience in modern web development, CI/CD practices, and IoT solutions. I bring a collaborative spirit, a drive to excel, and an eagerness to contribute to impactful projects. Let's connect and build something exceptional together!",
  ],
};

export const education: Education[] = [
  {
    id: '1',
    institution: 'Informatics Institute Of Technology',
    partner: 'University of Westminster (UK)',
    degree: "Bachelor's Degree in Software Engineering",
    period: '2021 - Present',
    status: 'Present',
    logos: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6_0Buy_dnwSRqF6wGJISdmSUaholaZ4zvztv4Mlx-u-X5p0-ZqX9QY4pnKARakyix5MI&usqp=CAU',
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAApVBMVEX///9DAEM7ADs/AD82ADY+AD44ADhBAEE8ADxJEUnFvMVuTG5FAEU5ADlGB0Y0ADT7+fvOxM708fRJEEmtna1OGU5IB0gvAC/p4+l5W3ns6ex+YX5iOmKGbIaUfpSmmKahjaHa0tq0pLS/sr8rACukkaRpRGng2eCMdIy3qbfUytQnACdYKlhTIVO8rrxxUXFfNl9QHlAgACCQepAaABoiACIUABTjvHwyAAALhUlEQVR4nO2a62KjKhdAQUHUIBpJa2IuzdVcmjSZ03O+93+0DxDUNOlMZtr5t9ePNhdFlsBmg0EIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4l/86y/qyw4bAb63CoqoG7vayqA0KbeefrWTUp1b9er0Jo2qsW7TfjHuTLapaluiO01+9G83izB2RzPmxIKS4bNzN2bQX+SPDPvEao41H1EUHr8uOBy30/XzGDKEV8UfNF4uUHVHGOMeG4EWfrt+xhK3MEfmRchpiKk2DPDOJ0JmqQ7k7B59cYRMWbOzLuecLqRCU2mq8h+54788MPdYa+p42pOm+NcREV/BJcF1LkZbuiyn2VijjUj5FGv6iT5TREydYFkaxwqzar0Ye5rp5IvGE0Og5ip5U9Z/0SSfp2d6zCsQPW+zZk8LzTifPEzIYm49mrD4+kvzbDGW6umu48Ztj81RfL+Pi2BY1oKE6bzilpirblPdMBdM35AwNI26KRIdUenXXfBIktpejkXfR3TxfHcPIm9aGSWdwfI9hJFM3RK4M80Ji+/mc+RtjeGqLGlDPVPTMA1Wlt7B+ZyPXlWFpy2Yzc9mQ2xG2DKKgiQobEpk7PWPBXzCUrtArQ901TYOgDMskv2No2v6NhuqoVUhX7Xd32hCVRAbqVe5Jsq1L5TLctKfMqTnnbxjKJyWwvWO4IOJiPt57eIp+bjgsxI+y/fKOoVLAKnTtGJvW7+Ok2+kROoog/juGYf/MBB3eGqKJCA7IvDe3/eM4rPvlRKT6y2koglkzH94zVG1GDsNUBvYo1UXibt1WId4Zw+13G6q/FyxYeWu48rAOcP2gHjmqik+DF8UmM4Z0n29XF8zrhh4R4fuz8nNDtE9E78yp65kn4V1lCHkqKm2IZ+Yah281zI5cPOc3hghLPWGcedK3htJX0CI3hhElQSgYswarY4BZuvncUPVDwUXk3onmGAsTUhtGWF8kHaA/4hNDlEvOT5kzlM7QTBhbYquiAo4MNK/WEMtIetO2IeJLIoPp54YHEkVBE5B+tLI1vh4EypDqa6y/2VApCnxRQ+PasPTUhLHD4dIailM51CBjiHdYhtedacXq2fW+obqDuM3FKn7dS8uUj7RhGJtr/GHC3E8+MURDKth5zK8NVZX8DZMsc4bXkab/ptKTDHU5JGbm/8RQzSltAvXih90JBu0pHXw9lm4JnrrXqsG2rSHaeqqnRh8MF2mkBGfIGX6c8ceMtcmr4SLYg4bDtFucidjl1w0RF7ZBdOzHWcdQTX8y+mio5oIoKspPDVXyatKSfODWLBfOHzREU0Zn7bsd89Vk8XVDNeHurl61hjp1vDFceRF2rXTTS2NzW8hCZ3is/moRmE7ykGGORdIo7jxhcvYvG+aJDEfDLBuOQunl14YoTuVHQ8SblE7H0tOhbxg2M/6Lqpkq591nY1XBRSTSxaOGOkrT475UtRlwJjwz03/ZEB0KzAPOA8wLEwa7hugtvTGcexf3Us8WnqHYtDlNhfFZ93nMRK9KBDGt8pgh2vKQU4IZocIuLL/BEG0vxMfYJ5M6ORoU607utPxXXwcHQfNJ+U/zdUY8S6FXwMXahMKcJWtllV8I8xklc3OoH7hlyZn81zFcFJ31trk8D3zGaMBcprNLX79qqLrSZjrduGK2cdzJmNFGVyeOO9KdYBA3bM2JQ1fCSo+g+H00ng+bI+05hzhu55OhO6fDYTObDdputIjj79w6AgAA+AvkcdyErUMTMBc6nmZtpKzj3WI23g3y+sgOOjJuuun2wZaoCjAz7LwbC5ugOpxX1bsJ4P1uaSa+dorediqgKDuHdkP+52RpQtzrcbOQwck/OcrXzWxn5qxzqhe7RM/Q52Yi9Ly1vvqlO6ud7VRWvhKT341PHX8e1HuIs0JNeyzVWwaXoC2tyNSE7N78l+vj9CvyPKvLiNdqScol96R87aOHmOLEHlkmhb1Vi0CveHKzO2skdP0nPn7uTQJR7LWs+lSl4KH696pOyvzO6nxY2Ly1JGbPA03bLEhvVTzrus6JCKszxVRd6ELq0tTfRBkuacTq66rbjOYs8j2PCcpNT4hV4qByrjdV4vpBw9jDNvPeULcqmjOdS+WemLRZZ0z4SOeZfjpXf9Vnh0rQlf5SdyWStCnBO3PLZWeIWbvMrQ1V2Topy3tFlSN9kcNRhOZSKo2ibF5fNzZ18QeHeEalTgWtYYz2x8cNUSBZ/YJLt7J9El6pa8E7z0J2ODD9vt9sfKkE0w2wt1A0zZSnMnUbos4w8s/Xhv3EN4urvMlKJ8KNliXtLoTn9ZZ3yepSY3Y4+JvD7Hg4FI8ajnFgDo0T1evMBbf1Vtq14dgatnQM31kUuN2LuR/ZTcGOYUTHV4Yrz/+w7TIR6c8MVQJuSo2DNBVhSnmaBo8aum7a40LUyz3VSZc3hnOGx9cndgyPIuJ28GVcRnZjpNuGUTjtGqpV5NN1tvkrw0G9xWF76VJV9OE2zKl4RrrhxOUs9OJVdVLzjEkZ9trDtoWk1dXWbGuYJTKKbNdchlFkd5c643DpSW/XMVT/BL7alPmV4YibNtOGyW+OQ33uQfcCuu+bzXq1DDU1VNGganfS1OJI8nS87Z7nDBeB5NIGrGfBn6VZnHcMg1ytpYNZx3CbqpX0sWPSNfQH5rqlNdzqp62hxGa9gsuS7svNcVg+3IZqTOgYSiTNVPVUiLGd1MwWZjc0rePPCquAlra7oa2hin6bp3pzPk74eMrrffiO4VCtpSXZtIZoeAmESJ6apV/XMGL6ssV7bSiOk6Pn26eScbBey2Dt8fX64XGo1rGSo33I3vV+Ih3oByJDa1jvaCduq2pOfMmeXcBpDZXCduPr521qgU8WdshcG6JBGpFla6ju2I9EiNSlCleGZpObWMNIxQdJk7q9Y9WS4SobHLPs8TbU3XRxEXpvIQ/k8zAQE1QbimP7VMI66v54Y3gUhR6LfqYiiIpOh4SZypVB19A8ENx3DJXjicnicGuIp/qyL3FtKH9gid2N0OOwUJHm9DvjUM9mFa/j5hRzNZEPrGE30lgWTNq72RrmRMfgua/mmjMnB/1EZXLHEL17Mu1fOoYqOcJu4+7zSOMtzrjZto4DNTUP0Va9//dxQz3gorpXL0gkXFS8ni2a29FkPo2hajO9LxOK05CYU451bT8aqvQtYpHsGmaeezr/s1iaqVFoc6ZVmzu9XT2K+zk9HrnfClxEZDvpB8NtvarQ1d59MLTjbqZigjA3Sikt7hmiMZXSGJarg7se/bUh6qs4eLuSyG4++ZR9GFH3uwgv8l/uGO5fi/oBd99zhzaG9gFVTiJZpwz7+qcit4bo7Js2zP9HbBpH+eQBQzSj/Orx8O+SE5m6G/IsXXVyD7fjME/M80SUqahSfjCUdmjNVO5mes6ibuc7hqhipg1HuH6opnKx5a0hvZ3xL5i+f0WxR3dNidQ9isi9yP1aRqWrm0DgwWojeTBH14ZlYiNSSewmf0bNi3uG2RFrQ/1se7faTyh2TdM1lFF9XS9vDIdEkqsc6DfZvza5Sv6f24rNSfOLJ32fdyn2Qx+nzXbpyC/qJVvzs6pdYStxZFq+LOofUU1p2m6KZj9MwhMTxkKKvZNLIC6scIaJu+4601vs5qmAyhh4cbO1+jhlp5M3yWc+aX5QZire7xVp0WsfgL73JqZ6y8r9Qm0Y2q821URVq5xU5nbM6x/HuWJxndPsaFEc262Bcc8OSLRqfsimf+w2qOxe/KzX+/Dc7rfo5Pk/i1C/2nx+KLpld14BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwNf4P3oS+DBUYFg8AAAAAElFTkSuQmCC',
    ],
  },
];

export const experience: Experience[] = [
  {
    id: '1',
    title: 'Software Engineer Intern',
    company: 'Wavenet',
    period: '2024 - 2025 (Present)',
    companyLogo: `${import.meta.env.BASE_URL}images/logos/wavenet-logo.jpeg`,
    responsibilities: [
      'Developed full-stack web applications',
      'Collaborated with senior developers',
      'Implemented responsive designs',
    ],
  },
];

export const services: Service[] = [
  {
    id: '1',
    title: 'Full-Stack Development',
    description: 'Designing and developing end-to-end web applications with modern front-end and back-end technologies to ensure seamless performance and scalability.',
    icon: 'Code',
  },
  {
    id: '2',
    title: 'Front-End Development',
    description: 'Transforming designs into interactive, responsive, and user-friendly websites using modern front-end technologies like HTML, CSS, and JavaScript.',
    icon: 'Laptop',
  },
  {
    id: '3',
    title: 'Back-End Development',
    description: 'Building scalable, secure, and efficient server-side applications with modern back-end technologies to support your website\'s data and functionality.',
    icon: 'Database',
  },
];

export const stats: Stat[] = [
  {
    id: '1',
    icon: 'FolderGit2',
    value: '10+',
    label: 'Projects Completed',
  },
  {
    id: '2',
    icon: 'Code',
    value: '1500+',
    label: 'Lines of Code',
  },
  {
    id: '3',
    icon: 'Coffee',
    value: '100+',
    label: 'Cups of Coffee',
  },
  {
    id: '4',
    icon: 'Clock',
    value: '100+',
    label: 'Hours Coded',
  },
];

export const socialLinks: SocialLink[] = [
  {
    platform: 'linkedin',
    url: 'https://www.linkedin.com/in/sithum-raigamage/',
    icon: 'Linkedin',
  },
  {
    platform: 'github',
    url: 'https://github.com/SithumRaigamage',
    icon: 'Github',
  },
];

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'aboutme', label: 'About Me', href: '#aboutme' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'techstack', label: 'Technologies', href: '#techstack' },
  { id: 'contactme', label: 'Contact Me', href: '#contactme' },
];

export const aboutTabs = [
  { value: 'personal', label: 'Personal Info' },
  { value: 'education', label: 'Education' },
  { value: 'experience', label: 'Experience' },
  { value: 'certificates', label: 'Certifications' },
  { value: 'stats', label: 'Stats' },
] as const;
