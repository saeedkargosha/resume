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
      'eveloped a custom UI component library using React, TypeScript, and Styledcomponents for use across various applications.',
      'Revamped the Corepay website utilizing React and Styled-components for an improved user experience.',
      'Created a cross-platform desktop application for a decentralized e-commerce marketplace with ElectronJs, React, and NodeJS.',
      'Employed WebSockets for efficient real-time data transfer and seamless communication between client and server.',
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
      'Implemented a SaaS solution for generating custom documents within seconds, allowing for quick document generation.',
      'Redesigned custom documents using Slate.js and GraphQL, which improved development by 50% compared to Draft.js and REST FULL, resulting in more efficient document creation.',
      'Optimized the customer editor by 60% using optimistic updates and pure components with Sass/CSS, leading to a smoother editing experience.',
      'Controlled nested attributes and content on the front-end side to reduce processing on the back-end by 40%, resulting in faster document generation and more efficient use of server resources.',
      'Improved the overall app performance by removing Material Components to pure components with Tailwindcss and CSS Module, and customized Webpack to speed up page loading by 75%. Also, published an Office plugin that reduced customer complaints by 90% for Microsoft Office users.',
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
      'Designed and implemented a robust architecture and structure for KYC services, enabling secure inter-bank transactions and efficient management of tokens and currency codes.',
      'Reimplemented RSA algorithms using Swift and Android, ensuring the security and integrity of the applications bridge for React Native.',
      'Developed an Admin Panel for identifying users using React and Ant Design, streamlining the process of user identification and management.',
      "Mentored junior front-end developers and was actively involved in the hiring process, ensuring the development team's growth and the company's success.",
      'Utilized React Native and Redux to create a seamless user experience for secure inter-bank transactions and token management.',
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
      'Collaborated and maintained the company’s startup and 3 outsourced projects from Upwork and Freelancer.com for end-clients and startups such as React Native, React, Vue, Swift, Landing pages, and pure JS projects.',
      'Worked closely with an agile team of 30 members.',
      'Managed 3 projects and mentored other developers (med, senior) and review the code and merged requests them.',
      'Developed a club management system with an in-app chat system for the United States For Mobile Application and Admin Panel (Trainer).',
      'Programmed e-commerce and customer club by searching stores with Mapbox(OffPlus).',
    ],
  },
]
