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
      "Implemented a robust payment processing solution for cryptocurrency, ensuring direct transfer of funds from users to the store's wallet.",
      'Planned a chat system to connect customers and get more information before purchasing.',
      'Using TypeScript, React, Next.js, Electron.js, Tailwindscss, React-Query, Figma, WebSocket',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'Thinkeo',
    country: 'France',
    type: 'Remote',
    start: '03/2020',
    end: '09/2022',
    link: 'https://www.thinkeo.io/',
    bulletPoints: [
      'Used SaaS solution that allows the generation of custom documents in a few seconds.',
      'Redesigned the custom documents with Slate.js and GraphQL instead of using Draft.js which helped us to improve +40% development.',
      'Gained +60% smooth customer editor by using optimistic updates and Apollo Client.',
      'Controlled nested attributes and content on the front-end side to reduce processing on the back end by 35%.',
      'Optimized the app by removing CSS-in-JS Components to pure components with Tailwindcss and CSS Module to reduce +45% JavaScript execution and smaller bundle sizes.',
      'Published the Office plugin to reduce +90% of customer complaints who are using Microsoft Office.',
      'Achieved this startup to get +4 investments with the generation of custom documents.',
      'Using TypeScript, React, Nest.js, GraphQL, Postgres, Prisma, Slate.js, Cypress, Tailwindscss, and CSS Module.',
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
      'Designed and implemented customer authentication and identification services (KYC) in the form of inter-bank, issuing, and management of tokens and cryptocurrencies.',
      'Reimplemented RSA library into Swift and Android, making a bridge for React Native.',
      'Developed an Admin Panel for identifying users using React and Ant Design, streamlining the process of user identification and management.',
      "Mentored junior front-end developers and was actively involved in the hiring process, ensuring the development team's growth and the company's success.",
      'Using TypeScript, React-Native, Redux, Redux-Thunk, REST FULL, Encrypt Storage, and StyledCompoents.',
    ],
  },
  {
    title: 'React Developer',
    company: 'AppTech',
    country: 'Tehran, Iran',
    type: 'Hybird',
    start: '09/2018',
    end: '09/2019',
    link: 'http://www.app-tech.ir/',
    bulletPoints: [
      'Collaborated and maintained the company’s startup and 3 outsourced projects from Upwork and Freelancer.com for end-clients and startups such as React Native, React, Vue, Swift, Landing pages, and pure JS projects.',
      'Worked closely with an agile team of 30 members.',
      'Managed 3 projects and mentored other developers (med, senior) and review the code and merged requests them.',
      'Developed a club management system with an in-app chat system for the United States For Mobile Application and Admin Panel (Trainer).',
      'Programmed e-commerce and customer club by searching stores with Mapbox(OffPlus).',
      'Using TypeScript, React, ReactNative, WebSocket, CodePush, Firebase, Maps, Redux, UnitTest',
    ],
  },
]
