export type ProfileDataProps = {
  title: string
  items: {
    title: string
    subTitle: string
    date: string
    description: string
    href?: string
  }[]
}

export const profileData = [
  {
    title: 'Experience',
    items: [
      {
        title: 'ML & Front-end Developer Intern',
        subTitle: 'Solid State Physical Laboratory (DRDO)',
        date: '12.24 - 02.25',
        description: 'Worked on sound classifying model and built web interface.',
      },
      {
        title: 'Machine Learning Trainee',
        subTitle: 'CETPA Infotech',
        date: '06.23 - 08.23',
        description: 'ML models for predictive analytics and data analysis.',
      },
    ],
  },
  {
    title: 'Projects',
    items: [
      {
        title: 'Personal CV Website',
        subTitle: 'Modern resume portfolio',
        date: '2025 - Present',
        description: 'Built responsive Next.js CV website with dark/light theme support and modern design.',
        href: 'https://resume.heyadrsh.tech',
      },
      {
        title: 'GunShot Detection System',
        subTitle: 'Real-time acoustic monitoring',
        date: '12.24 - 02.25',
        description: 'Developed desktop and web application with audio processing.',
        href: 'https://github.com/heyadrsh/gunshotdetection',
      },
      {
        title: 'Brain Tumor Detection System',
        subTitle: 'MRI/CT scan analysis',
        date: '08.24 - 12.24',
        description: 'Created web application for medical image analysis using CNN and GenAI.',
        href: 'https://github.com/heyadrsh/brain-tumor-detection',
      },
      {
        title: 'Alternate Reality News Generator',
        subTitle: 'Fictional news generator',
        date: '04.24 - 06.24',
        description: 'Designed web app generating fictional news articles with GenAI content and vintage styling.',
        href: 'https://heyadrsh.github.io/alternate-reality-news-generator/',
      },
      {
        title: 'Dynamic Tic Tac Toe',
        subTitle: 'AI-powered web game',
        date: '05.24 - 06.24',
        description: 'Engineered unique twist on classic game with self-learning AI. Limited marks per player with strategic gameplay.',
        href: 'https://heyadrsh.github.io/dynamic-tictactoe/',
      },
      {
        title: 'YouTube Homepage Clone',
        subTitle: 'Responsive web interface',
        date: '06.23 - 07.23',
        description: 'Created responsive YouTube homepage clone with HTML, CSS & JavaScript. Features mobile optimization and interactive elements.',
        href: 'https://heyadrsh.github.io/youtube-homepage-clone/',
      },
    ],
  },
  {
    title: 'Education',
    items: [
      {
        title: 'B.Tech Electronics & Communication (AI & ML)',
        subTitle: 'NSUT, Delhi',
        date: '2021 - Present',
        description: 'AI & ML specialization.',
      },
      {
        title: 'Senior Secondary',
        subTitle: 'Sarvodaya Vidyalaya, Delhi',
        date: '2019 - 2021',
        description: '',
      },
    ],
  },
  {
    title: 'Skills & Interests',
    items: [
      {
        title: 'Technical Skills',
        subTitle: 'Programming & Development',
        date: '',
        description: 'Python, GenAI, JavaScript, C/C++, HTML/CSS, Node.js, Flask, TensorFlow, SQL',
      },
      {
        title: 'Areas of Interest',
        subTitle: 'Focus Areas',
        date: '',
        description: 'Software Development, Genrative AI, ML, Frontend, UI Design',
      },
    ],
  },
]
