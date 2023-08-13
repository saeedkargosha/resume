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
    title: 'Senior Front-end Engineer',
    company: 'CoDeTech',
    country: 'Slovakia',
    type: 'Remote',
    start: 'Mar 2022',
    end: 'Present, 1y 6mos',
    link: 'https://codetech.cc',
    bulletPoints: [
      'Developed a cryptocurrency payment processing solution with Next.js and WebSocket, including a management panel for handling transactions.',
      'Utilized cryptocurrencies to develop decentralized e-commerce using React and ElectronJs.',
      'Restructured app, migrated main code to TypeScript for enhanced type handling and reduced errors.',
      'Implement Unit test and E2E test using Cypress and Vitest, which reduced buggy releases by up to 45%/',
      'Built responsive Next.js 13 landing page, integrated Strapi CMS, and added PWA features.',
    ],
  },
  {
    title: 'Senior Front-end Engineer',
    company: 'Thinkeo',
    country: 'France',
    type: 'Remote',
    start: 'Aug 2019',
    end: 'Feb 2022, 2y 7mos',
    link: 'https://www.thinkeo.io',
    bulletPoints: [
      'Developed MVP web app from scratch using React, MobX-state-tree and Material-UI.',
      'Improved the custom documents(advanced rich text editor) with Slate.js instead of Draft.js.',
      'Gained +60% smooth customer editor by using optimistic updates and Apollo GraphQL.',
      'Optimized app performance by converting CSS-in-JS to pure CSS, reducing JS execution and bundle sizes by +45.',
      'Published the Office plugin to reduce +90% of customer satisfaction who are using Microsoft Office.',
      'Achieved this startup to get +4 investments with the generation of custom documents.',
      'Achieved 74% test coverage through Cypress E2E and unit testing, enhancing code maintainability.',
      "Leveraged Sentry's features to quickly identify and resolve issues in the application.",
    ],
  },
  {
    title: 'Front-end and React Native Developer',
    company: 'Areatak',
    country: 'Tehran, Iran',
    type: 'Onsite',
    start: 'Jul 2018',
    end: ' Jul 2019, 1y 1mo',
    link: 'https://areatak.com',
    bulletPoints: [
      'Reimplemented the "RSA-react-native" library for Swift and Android, creating a React Native bridge.',
      'Mentored 4+ juniors, engaged in hiring, regularly reviewed code, provided feedback and suggested improvements for quality.',
      'Led web and mobile app development, implementing Agile and Scrum for 20% improved project delivery.',
      'Created a KYC app on a private blockchain using React Native and Redux, streamlining identity verification processes.',
    ],
  },
  {
    title: 'Front-end Developer',
    company: 'AppTech',
    country: 'Tehran, Iran',
    type: 'Onsite',
    start: 'Aug 2016',
    end: 'Jun 2018, 1y 11mos',
    link: 'http://www.app-tech.ir',
    bulletPoints: [
      'Developed and maintained company’s startup and outsourced projects from Upwork and freelancer.com for end clients and startups using React Native, React, and pure JS.',
      'Designed and developed a React Native shopping app for Android and iOS, along with a customer club feature, resulting in a 20% increase in sales [https://www.offplus.ir/app].',
      'Upgraded and refactored legacy React and React Native fitness app for improved local trainer discovery, enhancing user experience [https://www.sendmeatrainer.com].',
      'Collaborated with 30-member agile team. Managed meetings, stand-ups, QA, branching, and multiple environments for success.',
      'Created a real-time educational game utilizing React Native and Node.js, designed to assess and enhance vocabulary skills.',
    ],
  },
]
