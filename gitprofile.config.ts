// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'chihyanglee',
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Enterprise Document Workflow Platform',
          description:
            "Taiwan's leading official document system serving 300+ organizations. Features ML routing (85–95% accuracy), LLM/RAG document generation, and inter-agency correspondence workflows.",
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://www.gss.com.tw/speed',
        },
        {
          title: 'SaaS Document Workflow Platform',
          description:
            'Cloud-native Azure edition with free trial-to-subscription model. ~50 new subscribers/year. Features automated OCR and email-to-system integration.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://www.gsscloud.com/tw/vital-od',
        },
      ],
    },
  },
  seo: {
    title: 'Simon Lee — Senior Product Manager',
    description:
      'I blend strategy, system design, and LLM craft to turn complex enterprise work into AI-native products.',
    imageURL: '',
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/chihyanglee/',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    youtube: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    skype: '',
    telegram: '',
    website: 'https://chihyanglee.cc',
    phone: '',
    email: 'chihyanglee@gmail.com',
  },
  resume: {
    fileUrl: '',
  },
  skills: [
    'Product Strategy',
    'Agile/Scrum',
    'LLM',
    'RAG',
    'AI Agents',
    'NLP',
    'Domain-Driven Design',
    '.NET',
    'SQL Server',
    'Azure',
    'Docker',
    'TypeScript',
    'OpenSearch',
    'DevSecOps',
  ],
  experiences: [
    {
      company: 'Galaxy Software Services',
      position: 'Product Manager',
      from: '2024',
      to: 'Present',
      companyLink: 'https://www.gss.com.tw',
    },
    {
      company: 'Galaxy Software Services',
      position: 'Product Development Manager',
      from: '2023',
      to: '2024',
      companyLink: 'https://www.gss.com.tw',
    },
    {
      company: 'Galaxy Software Services',
      position: 'Software Designer & System Analyst',
      from: '2021',
      to: '2023',
      companyLink: 'https://www.gss.com.tw',
    },
    {
      company: 'Galaxy Software Services',
      position: 'Software Engineer',
      from: '2016',
      to: '2022',
      companyLink: 'https://www.gss.com.tw',
    },
  ],
  certifications: [
    {
      name: 'Azure Administrator Associate',
      body: '',
      year: 'November 2020',
      link: 'https://learn.microsoft.com/api/credentials/share/en-us/chihyanglee/220BB1A18C6B7F6E?sharingId=B916C1ECE24430EB',
    },
    {
      name: 'Azure Developer Associate',
      body: '',
      year: 'November 2021',
      link: 'https://learn.microsoft.com/api/credentials/share/en-us/chihyanglee/DCB36CADE6BA914E?sharingId=B916C1ECE24430EB',
    },
  ],
  educations: [
    {
      institution: 'National Taiwan University',
      degree: 'Bachelor in Plant Pathology and Microbiology',
      from: '2008',
      to: '2012',
    },
  ],
  publications: [],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: '',

  enablePWA: true,
};

export default CONFIG;
