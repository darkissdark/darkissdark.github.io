module.exports = {
  profile: {
    name: 'Viktor Medvid',
    role: 'Frontend Developer',
    avatar: '/images/me.webp',
    location: 'Split, Croatia',
    contacts: [
      { label: 'GitHub', href: 'https://github.com/darkissdark', target: '_blank' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/viktor-medvid-910160357/', target: '_blank' },
      { label: 'Telegram', href: 'https://t.me/darkiss', target: '_blank' },
      { label: 'Email', href: 'mailto:darkissdark@gmail.com', target: '_self' },
    ],
    skills: ['Vue', 'Nuxt', 'React', 'JS', 'CSS', 'SASS'],
    tools: ['Git', 'Figma', 'Webpack', 'Vite', 'Trello', 'Jira'],
    languages: [
      { language: 'English', level: 'A2' },
      { language: 'Ukrainian', level: 'Fluent' },
    ],
    education: [
      {
        institution: 'School of Programming «Shpp»',
        year: '2025',
        link: 'https://diploma.programming.org.ua/en/d/ojM7n5vrkRO6DpdG1aebVW8Z43Y0yaEL',
        linkText: 'Computer Science Basics',
      },
      {
        institution: 'Vinnytsia National Technical University',
        year: '2008 – 2013',
        description: 'Institute of Civil Engineering, Thermal Power Engineering and Gas Supply',
      },
      {
        institution: 'Vinnytsia Technical Lyceum',
        year: '2004 – 2008',
        description: 'Specialization in Informatics and Computer Technology',
      },
    ],
    projects: [
      {
        title: 'Portfolio',
        description: 'Personal portfolio website built with Nuxt 3 and Tailwind CSS. Responsive, fast, and beautiful.',
        tags: ['Nuxt3', 'Vue', 'TailwindCSS', 'TypeScript'],
        visit: 'https://darkissdark.github.io',
        source: 'https://github.com/darkissdark/darkissdark.github.io',
        image: '/images/projects/portfolio.webp',
        disabled: true,
      },
      {
        title: 'Trello-like Application',
        description: 'Features include creating and managing boards, adding and organizing tasks, responsive design, user authentication, custom board backgrounds, and drag & drop functionality for cards and lists.',
        tags: ['React', 'Redux', 'TypeScript', 'SCSS'],
        visit: 'https://darkissdark.github.io/my-trello/',
        source: 'https://github.com/darkissdark/my-trello/',
        image: '/images/projects/trello-like.webp',
      },
      {
        title: 'DiGi - Digital Agency',
        description: 'A training project for the frontend course at School of Programming «Shpp», showcasing modern web development practices.',
        tags: ['HTML', 'CSS', 'JavaScript'],
        visit: 'https://darkissdark.github.io/di-gi/',
        source: 'https://github.com/darkissdark/di-gi',
        image: '/images/projects/di-gi.webp',
      },
    ],
  }
}; 