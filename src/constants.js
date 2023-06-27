export const responsibilitiesList = {
  coreFuncUi: 'Creating core functionality and UI interface.',
  compStory: 'Create new components in storybook.',
  projSupp: 'Project support and troubleshooting, fixing bugs.',
  scrum: 'Working within the SCRUM methodology.',
  planRisks: 'Planning and analysis of project risks.',
  colDesigners: 'Collaborating with UX/UI designers.',
  cleanCode: 'Supporting and scaling a clean code.',
  mentoring: 'Mentoring.',
  findingEfficient: 'Finding unusual solutions for efficient development of product.',
  innerManagement: 'Inner management.',
  reviews: 'Conducting regular code reviews to ensure adherence to coding standards, best practices, and project requirements.'
}

export const positions = {
  top: 'Top developer',
  assistant: 'Assistance to the technical lead'
}

export const toolsTechnologies = {
  js: 'JavaScript',
  ts: 'Typescript',
  react: 'React',
  nextJS: 'Next.js',
  vue: 'Vue.js',
  nuxtJS: 'Nuxt.js',
  git: 'Git',
  figma: 'Figma',
  nodeJS: 'Node.js',
  expressJS: 'Express.js',
  nestJS: 'Nest.js',
  dry: 'DRY',
  solid: 'SOLID',
  restApi: 'REST API',
  linux: 'Linux',
  macOS: 'MacOS',
  mysql: 'MySQL',
  postgreSql: 'PostgreSQL',
  mongodb: 'MongoDB',
  html: 'HTML',
  css: 'CSS',
  amChartsFive: 'AmCharts5',
  redux: 'Redux',
  vuex: 'VueX',
  laravel: 'Laravel',
  reactRouter: 'ReactRouter',
  php: 'PHP',
  storybook: 'Storybook',
  reactIntl: 'ReactIntl',
  dateFns: 'DateFns'
}


export const PROJECTS_CONSTANT = [
  {
    title: 'Crypto Trading Platform (NDA)',
    content: 'Project provides users with a secure and user-friendly interface to buy, sell, and trade various cryptocurrencies.',
    start: new Date(2023, 0),
    end: new Date(2023, 3),
    members: 6,
    responsibilities: [
      responsibilitiesList.coreFuncUi,
      responsibilitiesList.projSupp,
      responsibilitiesList.cleanCode,
      responsibilitiesList.findingEfficient
    ],
    toolsTechnologies: [
      toolsTechnologies.ts,
      toolsTechnologies.react,
      toolsTechnologies.redux,
      toolsTechnologies.nextJS,
      toolsTechnologies.amChartsFive
    ]
  },
  {
    title: 'Bukka',
    content: 'The global leader in digital skills training, helping people to succeed in the digital age.',
    start: new Date(2022, 8),
    end: new Date(2023, 0),
    members: 12,
    responsibilities: [
      responsibilitiesList.coreFuncUi,
      responsibilitiesList.projSupp,
      responsibilitiesList.scrum,
      responsibilitiesList.planRisks,
      responsibilitiesList.coreFuncUi,
      responsibilitiesList.cleanCode,
      responsibilitiesList.findingEfficient,
      responsibilitiesList.reviews,

    ],
    toolsTechnologies: [
      toolsTechnologies.js,
      toolsTechnologies.vue,
      toolsTechnologies.vuex,
      toolsTechnologies.nuxtJS,
      toolsTechnologies.dateFns,
      toolsTechnologies.laravel
    ]
  },
  {
    title: 'Integration e-commerces (NDA)',
    content: 'Platform for integration of online stores.',
    start: new Date(2021, 4),
    end: new Date(2022, 11),
    members: 12,
    responsibilities: [
      responsibilitiesList.coreFuncUi,
      responsibilitiesList.projSupp,
      responsibilitiesList.planRisks,
      responsibilitiesList.cleanCode,
      responsibilitiesList.mentoring,
      responsibilitiesList.findingEfficient,
      responsibilitiesList.innerManagement,
      responsibilitiesList.reviews

    ],
    toolsTechnologies: [
      toolsTechnologies.ts,
      toolsTechnologies.react,
      toolsTechnologies.reactRouter,
      toolsTechnologies.redux,
      toolsTechnologies.storybook,
      toolsTechnologies.amChartsFive,
      toolsTechnologies.reactIntl,
      toolsTechnologies.dateFns
    ]
  },
  {
    title: 'Govshop',
    content: 'Global Ecosystem to Connect Diverse & Emerging Suppliers With Government.',
    start: new Date(2022, 0),
    end: new Date(2022, 7),
    members: 45,
    responsibilities: [
      responsibilitiesList.coreFuncUi,
      responsibilitiesList.projSupp,
      responsibilitiesList.scrum,
      responsibilitiesList.findingEfficient,
      responsibilitiesList.reviews

    ],
    toolsTechnologies: [
      toolsTechnologies.ts,
      toolsTechnologies.nextJS,
      toolsTechnologies.dateFns,
      toolsTechnologies.storybook,
      toolsTechnologies.amChartsFive
    ]
  },
  {
    title: 'V-expo',
    content: 'Online events where people interact in a virtual environment on the Internet.',
    start: new Date(2021, 9),
    end: new Date(2022, 3),
    members: 14,
    responsibilities: [
      responsibilitiesList.coreFuncUi,
      responsibilitiesList.scrum,
      responsibilitiesList.planRisks,
      responsibilitiesList.cleanCode,
      responsibilitiesList.findingEfficient,
      responsibilitiesList.reviews
    ],
    toolsTechnologies: [
      toolsTechnologies.js,
      toolsTechnologies.vue,
      toolsTechnologies.nestJS
    ]
  },
  {
    title: 'MOM',
    content: 'Interactive educational quest on safe employment and combating human trafficking.',
    start: new Date(2021, 7),
    end: new Date(2021, 11),
    members: 18,
    responsibilities: [
      responsibilitiesList.coreFuncUi,
      responsibilitiesList.projSupp,
      responsibilitiesList.scrum,
      responsibilitiesList.findingEfficient,
    ],
    toolsTechnologies: [
      toolsTechnologies.js,
      toolsTechnologies.vue,
      toolsTechnologies.vuex,
    ]
  },
  {
    title: 'Lutskup',
    content: 'Professional service that provides assistance in cleaning and maintaining various types of spaces.',
    start: new Date(2021, 4),
    end: new Date(2021, 7),
    members: 4,
    responsibilities: [],
    toolsTechnologies: [
      toolsTechnologies.js,
      toolsTechnologies.laravel,
    ]
  }
]