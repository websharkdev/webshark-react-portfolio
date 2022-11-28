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
    {
      id: 2,
      name: 'reacthero.blog',
      href: 'https://google.com',
    },
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
}
export const home_dataEN = {
  menu: [
    {
      id: 0,
      link: '#home',
      title: 'home',
    },
    {
      id: 1,
      link: '#about',
      title: 'about',
    },
    {
      id: 2,
      link: '#works',
      title: 'works',
    },
    {
      id: 3,
      link: '#blog',
      title: 'blog',
    },
    {
      id: 4,
      link: '#contacts',
      title: 'contacts',
    },
  ],
  fio: 'Bortnytskyi. Alexey.',
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
}

export const home_dataRU = {
  menu: [
    {
      id: 0,
      link: '#home',
      title: 'домашняя',
    },
    {
      id: 1,
      link: '#about',
      title: 'про меня',
    },
    {
      id: 2,
      link: '#works',
      title: 'работы',
    },
    {
      id: 3,
      link: '#blog',
      title: 'блог',
    },
    {
      id: 4,
      link: '#contacts',
      title: 'контакты',
    },
  ],
  fio: 'Бортницкий. Алексей.',
  home: {
    sub_title: 'креативный. разработчик',
    text: 'Помогаю компаниям, брендам и предпринимателям разрабатывать любые цифровые продукты и достигать поставленных целей',
    btn: {
      name: 'написать мне.',
      link: 'alexey.bortnytskyi@gmail.com',
    },
  },
  about: {
    section: 'про меня.',
    text: `Я занимаюсь веб-разработкой уже ${
      new Date().getFullYear() - 2017
    } лет, за это время реализовал десятки проектов, с которыми вы можете ознакомиться ниже. Большинство из них я не могу показать (я подписал NDA)`,
    btn: {
      name: 'резюме.',
      link: 'https://www.notion.so/CV-d9f17ad32676467f895a71b48974b6ae',
    },
  },
  stack: {
    section: 'стэк.',
    tech_stack: 'HTML SASS TYPESCRIPT REACT REDUX Framer MaterialUI TAILWIND GRAPHQL REST API STORYBOOK',
  },
  project: {
    section: 'работы.',
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
}
