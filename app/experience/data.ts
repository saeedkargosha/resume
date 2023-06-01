export type Experience = {
  title: string
  company: string
  country: string
  type: string
  start: string
  end: string
  link: string
  bulletPoints: string[]
}

export const experiences: Experience[] = [
  {
    title: 'Senior Frontend Engineer',
    company: 'CoDeTech',
    country: 'Slovakia',
    type: 'Remote',
    start: '03/2022',
    end: 'Present',
    link: 'https://codetech.cc',
    bulletPoints: [
      'Developing blockchain-based software and technology, mesh network communication solutions and enterprise software products.',
      'Used cryptocurrencies to develop e-commerce transactions in a fully decentralized marketplace.',
      'Planned a chat system to connect customers and get more information before purchasing.',
      'Designed the app according to design systems with Figma',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'Cosmopolis(Thinkeo)',
    country: 'France',
    type: 'Remote',
    start: '03/2020',
    end: '09/2022',
    link: 'https://www.thinkeo.io/',
    bulletPoints: [
      'Used SaaS solution that allows the generation of custom documents in a few seconds.',
      'Redesigned the custom documents with Slate.js and GraphQL instead of using Draft.js which helped us to improve +50% development.',
      'Optimized +60% smooth customer editor by using optimistic updates and pure components with Sass/CSS.',
      'Controlled the nested attributes and content for the editor on the front end side to reduce +40% of processing on the backend side.',
      'Achieved this startup to get +4 investments with the generation of custom documents.',
    ],
  },
  {
    title: 'Lead Frontend Engineer',
    company: 'Areatak',
    country: 'Tehran, Iran',
    type: 'Hybird',
    start: '10/2019',
    end: '07/2020',
    link: 'https://areatak.com/',
    bulletPoints: [
      'Implemented customer authentication and identification services (KYC) for interbank, issuing, and management of tokens and currency codes.',
      'Fixed and generated EC, CSR, DER, and ECDSA algorithms with merge requests , ensuring the security and integrity of the applications.',
      'Worked closely with designers, CEO, and PO to design and improve applications.',
      'Controlled the nested attributes and content for the editor on the front end side to reduce +40% of processing on the backend side.',
      'Hired and trained 4 developers, including junior and mid-level developers, in various skills and knowledge.',
    ],
  },
  {
    title: 'Senior React Developer',
    company: 'AppTech',
    country: 'Tehran, Iran',
    type: 'Hybird',
    start: '09/2018',
    end: '09/2019',
    link: 'http://www.app-tech.ir/',
    bulletPoints: [
      'Managed 3 projects and mentored other developers (med, senior) and review the code and merged requests them.',
      'Developed a club management system with an in-app chat system for the United States For Mobile Application and Admin Panel (Trainer ).',
      'Programmed e-commerce and customer club by searching stores with Mapbox(OffPlus ).',
    ],
  },
]
