import { GitHubIcon, InstagramIcon, TelegramIcon } from '@/assets/icons/ui'

export const home_data = {
  languages: ['en', 'es', 'ru', 'uk'],
  contacts: [
    {
      id: 0,
      name: 'alexey.bortnytskyi@gmail.com',
      href: 'mailto:alexey.bortnytskyi@gmail.com',
    },
    {
      id: 1,
      name: '34 680 522 262',
      href: 'tel:34680522262',
    },
    // {
    //   id: 2,
    //   name: 'reacthero.blog',
    //   href: 'https://google.com',
    // },
  ],
  socials: [
    {
      id: 0,
      href: 'https://www.instagram.com/webshark.dev/',
      icon: InstagramIcon,
    },
    {
      id: 1,
      href: 'https://t.me/websharkdev',
      icon: TelegramIcon,
    },
    {
      id: 2,
      href: 'https://github.com/websharkdev',
      icon: GitHubIcon,
    },
  ],
  mail: 'alexey.bortnytskyi@gmail.com',
  cv_link: 'https://www.notion.so/CV-d9f17ad32676467f895a71b48974b6ae',
}

// @ts-ignore
export const myAge = Math.floor((new Date() - new Date('19 Jun 2003')) / (60 * 60 * 24 * 1000 * 365))

export const home_dataEN = {
  menu: [
    {
      id: 0,
      link: '/',
      title: 'home',
    },
    {
      id: 1,
      link: '/about',
      title: 'about',
    },
    {
      id: 2,
      link: '/works',
      title: 'works',
    },
    {
      id: 3,
      link: '/in_progress',
      title: 'blog',
    },
    {
      id: 4,
      link: '/contacts',
      title: 'contacts',
    },
  ],
  fio: 'Bortnytskyi. Alexey.',
  header_fio: `Bortnytskyi  Alexey.`,
  home: {
    sub_title: 'creative. developer',
    text: 'I help companies, brands and entrepreneurs develop any digital products and achieve their goals',
    btn: {
      name: 'contact me.',
      link: 'alexey.bortnytskyi@gmail.com',
    },
  },
  about: {
    section: 'about.',
    text: `I have been engaged in web development for ${
      new Date().getFullYear() - 2017
    } years, during this time I have implemented dozens of projects, which you can find below. Most of them I can't show (I signed an NDA)`,
    btn: {
      name: 'actual cv.',
      link: 'https://www.notion.so/CV-d9f17ad32676467f895a71b48974b6ae',
    },
  },
  work_history: {
    section: 'work history.',
    text: `I took my first freelancing job at 15, and that's how my professional career began. But after some time, I realized that the work is not stable, and I do not develop in it as a professional.`,
    history: [
      {
        id: 0,
        title: 'Freelance',
        started: new Date('19 Aug 2018'),
        ended: new Date('7 Oct 2021'),
      },
      {
        id: 1,
        title: 'NeonPilots',
        started: new Date('7 Oct 2021'),
        ended: new Date('19 Apr 2022'),
      },
      {
        id: 2,
        title: 'Changeblock',
        started: new Date('19 Oct 2021'),
        ended: new Date('19 Apr 2022'),
      },
      {
        id: 3,
        title: 'Investables',
        started: new Date('19 Apr 2022'),
        ended: new Date('19 Jun 2022'),
      },
      {
        id: 4,
        title: 'Your company',
        started: new Date(),
        ended: new Date('19 Jun 2026'),
      },
      {
        id: 5,
        title: 'Future',
        started: new Date('19 Jun 2026'),
        ended: new Date('19 Jun 2027'),
      },
      {
        id: 6,
        title: 'Future',
        started: new Date('19 Jun 2027'),
        ended: new Date('19 Jun 2028'),
      },
    ],
  },
  personal_info: {
    section: 'personal.',
    text: `I was born in Irpin, Ukraine and started studying front-end development at the age of 14 (now I’m ${myAge}). During this time, I have implemented dozens of projects, which you can see above.`,
    personal_information: [
      {
        id: 0,
        title: 'Based',
        text: 'Pamplona, Spain',
      },
      {
        id: 1,
        title: 'Employment options',
        text: 'Remote \\ Office',
      },
      {
        id: 2,
        title: 'Origin',
        text: 'Ukraine',
      },
    ],
    tech_stack: 'HTML SASS TYPESCRIPT REACT REDUX Framer MaterialUI TAILWIND GRAPHQL REST API STORYBOOK',
    btn: {
      name: 'actual cv.',
      link: 'https://www.notion.so/CV-d9f17ad32676467f895a71b48974b6ae',
    },
  },
  stack: {
    section: 'stack.',
    tech_stack: 'HTML SASS TYPESCRIPT REACT REDUX Framer MaterialUI TAILWIND GRAPHQL REST API STORYBOOK',
  },
  project: {
    section: 'projects.',
    projects: [
      {
        id: 0,
        title: 'Title of the project',
        text: 'Description of the project, steck which I use, for hwo, when start...',
        stack: ['react', 'typescript', 'material-ui', 'redux', 'storybook', 'framer'],
        slider: [
          'https://images.unsplash.com/photo-1668965521789-f1a13aa4a55c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
          'https://images.unsplash.com/photo-1668965521789-f1a13aa4a55c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
          'https://images.unsplash.com/photo-1668965521789-f1a13aa4a55c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
          'https://images.unsplash.com/photo-1668965521789-f1a13aa4a55c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
          'https://images.unsplash.com/photo-1668965521789-f1a13aa4a55c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
          'https://images.unsplash.com/photo-1668965521789-f1a13aa4a55c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
        ],
        btn: {
          name: 'check out.',
          link: '',
        },
      },
      {
        id: 1,
        title: 'Title of the project',
        text: 'Description of the project, steck which I use, for hwo, when start...',
        stack: ['react', 'typescript', 'material-ui', 'redux', 'storybook', 'framer'],
        slider: [
          'https://images.unsplash.com/photo-1668965521789-f1a13aa4a55c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
          'https://images.unsplash.com/photo-1668965521789-f1a13aa4a55c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
          'https://images.unsplash.com/photo-1668965521789-f1a13aa4a55c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
          'https://images.unsplash.com/photo-1668965521789-f1a13aa4a55c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
          'https://images.unsplash.com/photo-1668965521789-f1a13aa4a55c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
          'https://images.unsplash.com/photo-1668965521789-f1a13aa4a55c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
        ],
        btn: {
          name: 'check out.',
          link: '',
        },
      },
      {
        id: 2,
        title: 'Title of the project',
        text: 'Description of the project, steck which I use, for hwo, when start...',
        stack: ['react', 'typescript', 'material-ui', 'redux', 'storybook', 'framer'],
        slider: [
          'https://images.unsplash.com/photo-1668965521789-f1a13aa4a55c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
          'https://images.unsplash.com/photo-1668965521789-f1a13aa4a55c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
          'https://images.unsplash.com/photo-1668965521789-f1a13aa4a55c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
          'https://images.unsplash.com/photo-1668965521789-f1a13aa4a55c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
          'https://images.unsplash.com/photo-1668965521789-f1a13aa4a55c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
          'https://images.unsplash.com/photo-1668965521789-f1a13aa4a55c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
        ],
        btn: {
          name: 'check out.',
          link: '',
        },
      },
    ],
  },
  contacts: {
    section: 'contacts.',
    text: `I was born in Irpin, Ukraine and started studying front-end development at the age of 14 (now I’m ${myAge}). During this time, I have implemented dozens of projects, which you can see above.`,
    btn: {
      name: 'actual CV.',
      link: 'alexey.bortnytskyi@gmail.com',
    },
  },

  contacts_page: {
    section: 'contacts.',
    text: `I was born in Irpin, Ukraine and started studying front-end development at the age of 14 (now I’m ${myAge}). During this time, I have implemented dozens of projects, which you can see above.`,
    contacts_links: [
      {
        id: 0,
        title: 'Telegram',
        link: '#1',
      },
      {
        id: 1,
        title: 'Whatsapp',
        link: '#2',
      },
      {
        id: 2,
        title: 'Instagram',
        link: '#3',
      },
      {
        id: 3,
        title: 'Linkedin',
        link: '#4',
      },
      {
        id: 4,
        title: 'Gmail',
        link: '#5',
      },
      {
        id: 5,
        title: 'Github',
        link: '#6',
      },
      {
        id: 6,
        title: 'Viber',
        link: '#7',
      },
      {
        id: 7,
        title: 'Whatsapp',
        link: '#8',
      },
    ],

    personal_information: [
      {
        id: 0,
        title: 'Based',
        text: 'Pamplona, Spain',
      },
      {
        id: 1,
        title: 'Employment options',
        text: 'Remote \\ Office',
      },
      {
        id: 2,
        title: 'Origin',
        text: 'Ukraine',
      },
    ],
    tech_stack: 'HTML SASS TYPESCRIPT REACT REDUX Framer MaterialUI TAILWIND GRAPHQL REST API STORYBOOK',
    btn: {
      name: 'actual cv.',
      link: 'https://www.notion.so/CV-d9f17ad32676467f895a71b48974b6ae',
    },
  },
}
export const home_dataRU = {
  menu: [
    {
      id: 0,
      link: '/',
      title: 'home',
    },
    {
      id: 1,
      link: '/about',
      title: 'about',
    },
    {
      id: 2,
      link: '/works',
      title: 'works',
    },
    {
      id: 3,
      link: '/in_progress',
      title: 'blog',
    },
    {
      id: 4,
      link: '/contacts',
      title: 'contacts',
    },
  ],
  fio: 'Bortnytskyi. Alexey.',
  header_fio: `Bortnytskyi  Alexey.`,
  home: {
    sub_title: 'creative. developer',
    text: 'I help companies, brands and entrepreneurs develop any digital products and achieve their goals',
    btn: {
      name: 'contact me.',
      link: 'alexey.bortnytskyi@gmail.com',
    },
  },
  about: {
    section: 'about.',
    text: `I have been engaged in web development for ${
      new Date().getFullYear() - 2017
    } years, during this time I have implemented dozens of projects, which you can find below. Most of them I can't show (I signed an NDA)`,
    btn: {
      name: 'actual cv.',
      link: 'https://www.notion.so/CV-d9f17ad32676467f895a71b48974b6ae',
    },
  },
  work_history: {
    section: 'work history.',
    text: `I took my first freelancing job at 15, and that's how my professional career began. But after some time, I realized that the work is not stable, and I do not develop in it as a professional.`,
    history: [
      {
        id: 0,
        title: 'Freelance',
        started: new Date('19 Aug 2018'),
        ended: new Date('7 Oct 2021'),
      },
      {
        id: 1,
        title: 'NeonPilots',
        started: new Date('7 Oct 2021'),
        ended: new Date('19 Apr 2022'),
      },
      {
        id: 2,
        title: 'Changeblock',
        started: new Date('19 Oct 2021'),
        ended: new Date('19 Apr 2022'),
      },
      {
        id: 3,
        title: 'Investables',
        started: new Date('19 Apr 2022'),
        ended: new Date('19 Jun 2022'),
      },
      {
        id: 4,
        title: 'Your company',
        started: new Date(),
        ended: new Date('19 Jun 2026'),
      },
      {
        id: 5,
        title: 'Future',
        started: new Date('19 Jun 2026'),
        ended: new Date('19 Jun 2027'),
      },
      {
        id: 6,
        title: 'Future',
        started: new Date('19 Jun 2027'),
        ended: new Date('19 Jun 2028'),
      },
    ],
  },
  personal_info: {
    section: 'personal.',
    text: `I was born in Irpin, Ukraine and started studying front-end development at the age of 14 (now I’m ${myAge}). During this time, I have implemented dozens of projects, which you can see above.`,
    personal_information: [
      {
        id: 0,
        title: 'Based',
        text: 'Pamplona, Spain',
      },
      {
        id: 1,
        title: 'Employment options',
        text: 'Remote \\ Office',
      },
      {
        id: 2,
        title: 'Origin',
        text: 'Ukraine',
      },
    ],
    tech_stack: 'HTML SASS TYPESCRIPT REACT REDUX Framer MaterialUI TAILWIND GRAPHQL REST API STORYBOOK',
    btn: {
      name: 'actual cv.',
      link: 'https://www.notion.so/CV-d9f17ad32676467f895a71b48974b6ae',
    },
  },
  stack: {
    section: 'stack.',
    tech_stack: 'HTML SASS TYPESCRIPT REACT REDUX Framer MaterialUI TAILWIND GRAPHQL REST API STORYBOOK',
  },
  project: {
    section: 'projects.',
    projects: [
      {
        id: 0,
        title: 'Title of the project',
        text: 'Description of the project, steck which I use, for hwo, when start...',
        stack: ['react', 'typescript', 'material-ui', 'redux', 'storybook', 'framer'],
        slider: [
          'https://images.unsplash.com/photo-1668965521789-f1a13aa4a55c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
          'https://images.unsplash.com/photo-1668965521789-f1a13aa4a55c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
          'https://images.unsplash.com/photo-1668965521789-f1a13aa4a55c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
          'https://images.unsplash.com/photo-1668965521789-f1a13aa4a55c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
          'https://images.unsplash.com/photo-1668965521789-f1a13aa4a55c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
          'https://images.unsplash.com/photo-1668965521789-f1a13aa4a55c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
        ],
        btn: {
          name: 'check out.',
          link: '',
        },
      },
      {
        id: 1,
        title: 'Title of the project',
        text: 'Description of the project, steck which I use, for hwo, when start...',
        stack: ['react', 'typescript', 'material-ui', 'redux', 'storybook', 'framer'],
        slider: [
          'https://images.unsplash.com/photo-1668965521789-f1a13aa4a55c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
          'https://images.unsplash.com/photo-1668965521789-f1a13aa4a55c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
          'https://images.unsplash.com/photo-1668965521789-f1a13aa4a55c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
          'https://images.unsplash.com/photo-1668965521789-f1a13aa4a55c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
          'https://images.unsplash.com/photo-1668965521789-f1a13aa4a55c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
          'https://images.unsplash.com/photo-1668965521789-f1a13aa4a55c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
        ],
        btn: {
          name: 'check out.',
          link: '',
        },
      },
      {
        id: 2,
        title: 'Title of the project',
        text: 'Description of the project, steck which I use, for hwo, when start...',
        stack: ['react', 'typescript', 'material-ui', 'redux', 'storybook', 'framer'],
        slider: [
          'https://images.unsplash.com/photo-1668965521789-f1a13aa4a55c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
          'https://images.unsplash.com/photo-1668965521789-f1a13aa4a55c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
          'https://images.unsplash.com/photo-1668965521789-f1a13aa4a55c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
          'https://images.unsplash.com/photo-1668965521789-f1a13aa4a55c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
          'https://images.unsplash.com/photo-1668965521789-f1a13aa4a55c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
          'https://images.unsplash.com/photo-1668965521789-f1a13aa4a55c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
        ],
        btn: {
          name: 'check out.',
          link: '',
        },
      },
    ],
  },
  contacts: {
    section: 'contacts.',
    text: `I was born in Irpin, Ukraine and started studying front-end development at the age of 14 (now I’m ${myAge}). During this time, I have implemented dozens of projects, which you can see above.`,
    btn: {
      name: 'actual CV.',
      link: 'alexey.bortnytskyi@gmail.com',
    },
  },

  contacts_page: {
    section: 'contacts.',
    text: `I was born in Irpin, Ukraine and started studying front-end development at the age of 14 (now I’m ${myAge}). During this time, I have implemented dozens of projects, which you can see above.`,
    contacts_links: [
      {
        id: 0,
        title: 'Telegram',
        link: '#1',
      },
      {
        id: 1,
        title: 'Whatsapp',
        link: '#2',
      },
      {
        id: 2,
        title: 'Instagram',
        link: '#3',
      },
      {
        id: 3,
        title: 'Linkedin',
        link: '#4',
      },
      {
        id: 4,
        title: 'Gmail',
        link: '#5',
      },
      {
        id: 5,
        title: 'Github',
        link: '#6',
      },
      {
        id: 6,
        title: 'Viber',
        link: '#7',
      },
      {
        id: 7,
        title: 'Whatsapp',
        link: '#8',
      },
    ],

    personal_information: [
      {
        id: 0,
        title: 'Based',
        text: 'Pamplona, Spain',
      },
      {
        id: 1,
        title: 'Employment options',
        text: 'Remote \\ Office',
      },
      {
        id: 2,
        title: 'Origin',
        text: 'Ukraine',
      },
    ],
    tech_stack: 'HTML SASS TYPESCRIPT REACT REDUX Framer MaterialUI TAILWIND GRAPHQL REST API STORYBOOK',
    btn: {
      name: 'actual cv.',
      link: 'https://www.notion.so/CV-d9f17ad32676467f895a71b48974b6ae',
    },
  },
}

export const helpUkraineEN = {
  section: 'about',
  images: [
    {
      id: 0,
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Civilian_evacuation_across_Irpin_River_2022-03-08_4.jpg/1280px-Civilian_evacuation_across_Irpin_River_2022-03-08_4.jpg',
      alt: 'Evacuation of residents across the Irpin River',
    },
    {
      id: 1,
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/A_damaged_building_in_Mashtorf.jpg/1280px-A_damaged_building_in_Mashtorf.jpg',
      alt: 'Burnt house in Mashtorf',
    },
    {
      id: 2,
      src: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Transfer_of_civilians_from_Irpin_to_Kyiv_due_to_Russian_attacks.jpg',
      alt: 'Evacuation of civilians from Irpin to Kyiv across the Romanovsky bridge.',
    },
    {
      id: 3,
      src: 'https://img.pravda.com/images/doc/6/d/6d5c838-bd1c7be-fm1ly2uxmaaqt9v.jpg',
      alt: 'Destroid house',
    },
    {
      id: 4,
      src: 'https://gdb.rferl.org/08700000-0a00-0242-d11a-08da043367e7_w1597_n_st.jpg',
      alt: 'Murdored civilian people',
    },
    {
      id: 5,
      src: 'https://gdb.rferl.org/08700000-0a00-0242-218a-08da04336e78_w1597_n_st.jpg',
      alt: 'Murdored civilian people',
    },
    {
      id: 5,
      src: 'https://gdb.rferl.org/08700000-0a00-0242-d1df-08da04336396_w1597_n_st.jpg',
      alt: 'Murdored civilian people',
    },
  ],
  text: [
    {
      id: 0,
      text: `My name is Olexii, I'm a frontend developer from Irpin (city close to Kyiv), Ukraine.`,
    },
    {
      id: 1,
      text: `On 24th of February 2022 I woke up to war: Russian armed forces have invaded my country. Driven by chauvinistic ideals and determination to eradicate the Ukrainian people, this act of aggression can only be described as genocide.`,
    },
    {
      id: 2,
      text: `Russian soldiers spare no thought when bombing residential areas, hospitals, schools, museums, cultural heritages, and civilian infrastructure. The list of committed war crimes grows longer by the minute, while the rest of the world largely remains passive.`,
    },
    {
      id: 3,
      text: `Be on the right side of history! Today it's us, tomorrow it could be you.`,
    },
  ],

  financially: {
    section: 'Help financially.',
    text: 'Please consider helping Ukraine fight back by donating to local charitable funds. Avoid donating to global funds such as Red Cross, UNCR, or other non-UA based NGOs — their support is ineffective.',
    aids: [
      {
        id: 0,
        title: 'united24',
        text: 'Official government donation page.United24 is a global initiative to support Ukraine launched on May 5, 2022 by the Ukrainian authorities during the Russian invasion of Ukraine.',
        image: 'https://via.placeholder.com/880x879.png/a59090/000000?Text=880x879',
        link: {
          id: 0,
          title: 'help.',
          link: '#',
        },
      },
      {
        id: 1,
        title: 'united24',
        text: 'Official government donation page.United24 is a global initiative to support Ukraine launched on May 5, 2022 by the Ukrainian authorities during the Russian invasion of Ukraine.',
        image: 'https://via.placeholder.com/347x179.png/a59090/000000?Text=347x179',
        link: {
          id: 0,
          title: 'help.',
          link: '#',
        },
      },
      {
        id: 2,
        title: 'united24',
        text: 'Official government donation page.United24 is a global initiative to support Ukraine launched on May 5, 2022 by the Ukrainian authorities during the Russian invasion of Ukraine.',
        image: 'https://via.placeholder.com/347x179.png/a59090/000000?Text=347x179',
        link: {
          id: 0,
          title: 'help.',
          link: '#',
        },
      },
      {
        id: 3,
        title: 'united24',
        text: 'Official government donation page.United24 is a global initiative to support Ukraine launched on May 5, 2022 by the Ukrainian authorities during the Russian invasion of Ukraine.',
        image: 'https://via.placeholder.com/347x179.png/a59090/000000?Text=347x179',
        link: {
          id: 0,
          title: 'help.',
          link: '#',
        },
      },
      {
        id: 4,
        title: 'united24',
        text: 'Official government donation page.United24 is a global initiative to support Ukraine launched on May 5, 2022 by the Ukrainian authorities during the Russian invasion of Ukraine.',
        image: 'https://via.placeholder.com/347x179.png/a59090/000000?Text=347x179',
        link: {
          id: 0,
          title: 'help.',
          link: '#',
        },
      },
    ],
  },
}

export const helpUkraineRU = {
  section: 'about',
  images: [
    {
      id: 0,
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Civilian_evacuation_across_Irpin_River_2022-03-08_4.jpg/1280px-Civilian_evacuation_across_Irpin_River_2022-03-08_4.jpg',
      alt: 'Evacuation of residents across the Irpin River',
    },
    {
      id: 1,
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/A_damaged_building_in_Mashtorf.jpg/1280px-A_damaged_building_in_Mashtorf.jpg',
      alt: 'Burnt house in Mashtorf',
    },
    {
      id: 2,
      src: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Transfer_of_civilians_from_Irpin_to_Kyiv_due_to_Russian_attacks.jpg',
      alt: 'Evacuation of civilians from Irpin to Kyiv across the Romanovsky bridge.',
    },
    {
      id: 3,
      src: 'https://img.pravda.com/images/doc/6/d/6d5c838-bd1c7be-fm1ly2uxmaaqt9v.jpg',
      alt: 'Destroid house',
    },
    {
      id: 4,
      src: 'https://gdb.rferl.org/08700000-0a00-0242-d11a-08da043367e7_w1597_n_st.jpg',
      alt: 'Murdored civilian people',
    },
    {
      id: 5,
      src: 'https://gdb.rferl.org/08700000-0a00-0242-218a-08da04336e78_w1597_n_st.jpg',
      alt: 'Murdored civilian people',
    },
    {
      id: 5,
      src: 'https://gdb.rferl.org/08700000-0a00-0242-d1df-08da04336396_w1597_n_st.jpg',
      alt: 'Murdored civilian people',
    },
  ],
  text: [
    {
      id: 0,
      text: `My name is Olexii, I'm a frontend developer from Irpin (city close to Kyiv), Ukraine.`,
    },
    {
      id: 1,
      text: `On 24th of February 2022 I woke up to war: Russian armed forces have invaded my country. Driven by chauvinistic ideals and determination to eradicate the Ukrainian people, this act of aggression can only be described as genocide.`,
    },
    {
      id: 2,
      text: `Russian soldiers spare no thought when bombing residential areas, hospitals, schools, museums, cultural heritages, and civilian infrastructure. The list of committed war crimes grows longer by the minute, while the rest of the world largely remains passive.`,
    },
    {
      id: 3,
      text: `Be on the right side of history! Today it's us, tomorrow it could be you.`,
    },
  ],

  financially: {
    section: 'Help financially.',
    text: 'Please consider helping Ukraine fight back by donating to local charitable funds. Avoid donating to global funds such as Red Cross, UNCR, or other non-UA based NGOs — their support is ineffective.',
    aids: [
      {
        id: 0,
        title: 'united24',
        text: 'Official government donation page.United24 is a global initiative to support Ukraine launched on May 5, 2022 by the Ukrainian authorities during the Russian invasion of Ukraine.',
        image: 'https://via.placeholder.com/880x879.png/a59090/000000?Text=880x879',
        link: {
          id: 0,
          title: 'help.',
          link: '#',
        },
      },
      {
        id: 1,
        title: 'united24',
        text: 'Official government donation page.United24 is a global initiative to support Ukraine launched on May 5, 2022 by the Ukrainian authorities during the Russian invasion of Ukraine.',
        image: 'https://via.placeholder.com/347x179.png/a59090/000000?Text=347x179',
        link: {
          id: 0,
          title: 'help.',
          link: '#',
        },
      },
      {
        id: 2,
        title: 'united24',
        text: 'Official government donation page.United24 is a global initiative to support Ukraine launched on May 5, 2022 by the Ukrainian authorities during the Russian invasion of Ukraine.',
        image: 'https://via.placeholder.com/347x179.png/a59090/000000?Text=347x179',
        link: {
          id: 0,
          title: 'help.',
          link: '#',
        },
      },
      {
        id: 3,
        title: 'united24',
        text: 'Official government donation page.United24 is a global initiative to support Ukraine launched on May 5, 2022 by the Ukrainian authorities during the Russian invasion of Ukraine.',
        image: 'https://via.placeholder.com/347x179.png/a59090/000000?Text=347x179',
        link: {
          id: 0,
          title: 'help.',
          link: '#',
        },
      },
      {
        id: 4,
        title: 'united24',
        text: 'Official government donation page.United24 is a global initiative to support Ukraine launched on May 5, 2022 by the Ukrainian authorities during the Russian invasion of Ukraine.',
        image: 'https://via.placeholder.com/347x179.png/a59090/000000?Text=347x179',
        link: {
          id: 0,
          title: 'help.',
          link: '#',
        },
      },
    ],
  },
}
