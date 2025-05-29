export type ProfileDataProps = {
  title: string
  items: {
    title: string
    subTitle: string
    date: string
    description: string
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
        title: 'GunShot Detection System',
        subTitle: 'Real-time acoustic monitoring',
        date: '12.24 - 02.25',
        description: 'Built desktop and web application with audio processing.',
      },
      {
        title: 'Brain Tumor Detection System',
        subTitle: 'MRI/CT scan analysis',
        date: '08.24 - 12.24',
        description: 'Developed web application for medical image analysis using CNN and GenAI.',
      },
      {
        title: 'Alternate Reality News Generator',
        subTitle: 'Fictional news generator',
        date: '04.24 - 06.24',
        description: 'Built web app generating fictional news articles with GenAI content and vintage styling.',
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
