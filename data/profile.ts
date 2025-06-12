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
        title: 'Portfolio',
        subTitle: 'Interactive portfolio website',
        date: '2024 - Present',
        description: 'Modern portfolio built with Next.js 15, React 19, TypeScript, and TailwindCSS with animations.',
        href: 'https://heyadrsh.tech',
      },
      {
        title: 'Resume Card',
        subTitle: 'Modern CV website',
        date: '2025 - Present',
        description: 'Built responsive Next.js CV website with dark/light theme support and modern design.',
        href: 'https://resume.heyadrsh.tech',
      },
      {
        title: 'Shot Detector',
        subTitle: 'ML-based audio analysis',
        date: '12.24 - 02.25',
        description: 'Advanced gunshot detection using neural networks and acoustic analysis with real-time processing.',
        href: 'https://github.com/heyadrsh/gunshotdetection',
      },
      {
        title: 'Tumor Vision',
        subTitle: 'AI medical imaging platform',
        date: '08.24 - 12.24',
        description: 'Brain tumor detection from MRI/CT scans using deep learning with PDF reports and authentication.',
        href: 'https://github.com/heyadrsh/brain-tumor-detection',
      },
      {
        title: 'SortViz',
        subTitle: 'Algorithm visualizer',
        date: '07.24 - 08.24',
        description: 'Interactive sorting algorithm visualizer with real-time animations and performance comparisons.',
        href: 'https://github.com/heyadrsh/sortviz',
      },
      {
        title: 'AltNews',
        subTitle: 'AI news generator',
        date: '04.24 - 06.24',
        description: 'Fictional news generator with AI-powered content, vintage styling, and PDF generation.',
        href: 'https://heyadrsh.github.io/alternate-reality-news-generator/',
      },
      {
        title: 'ShiftTac',
        subTitle: 'Dynamic Tic Tac Toe',
        date: '05.24 - 06.24',
        description: 'Never draw again! Tic Tac Toe with Google Gemini AI where 4th mark removes oldest.',
        href: 'https://heyadrsh.github.io/dynamic-tictactoe/',
      },
      {
        title: 'YT Clone',
        subTitle: 'YouTube interface clone',
        date: '06.23 - 07.23',
        description: 'Responsive YouTube homepage clone with HTML, CSS & JavaScript. Mobile optimized interface.',
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
