import { SectionHeader } from '@/components/utils/SectionHeader';
import { ExperienceItem } from './ExperienceItem';

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: 'Ledelsea',
    position: 'Software Engineer',
    time: 'December 2023 - Present',
    location: 'Minneapolis, MN',
    description:
      '      As a Software Engineer at Ledelsea, I assist in designing and developing a variety of web applications using React and Next.js with TypeScript. I lead development efforts in an AI-driven, data-centric SaaS environment, delivering end-to-end solutions from architecture to execution. I also oversee content management for React applications utilizing Kontent.ai and implement robust authentication services with JWT and CORS for secure token passing. I contribute to API development with Python and FastAPI, manage multiple databases, and collaborate with cross-functional teams to improve software and guide platform integration.',
    tech: [
      'React',
      'Next.js',
      'TypeScript',
      'Redux',
      'Material UI',
      'Bootstrap',
      'Python',
      'JWT',
      'GCP',
      'Kubernetes',
      'Docker',
      'CI/CD',
      'DataDog',
      'Google Analytics',
      'Tag Manager',
      'Git',
      'GitHub Actions',
      'ClickUp',
      'Jira',
    ],
  },
  {
    title: 'Mastery Logistics Systems',
    position: 'Software Engineer',
    time: 'March 2022 – June 2023',
    location: 'Remote',
    description:
      'At Mastery Logistics Systems, I honed my skills in building high-performance, scalable applications for the logistics industry. My responsibilities included writing clean, maintainable TypeScript code with React, streamlining data retrieval with GraphQL APIs, and conducting unit and integration testing with Jest and Cypress. I collaborated with product managers, UI/UX teams, and engineers to deliver new features on time, ensuring customer satisfaction.',
    tech: [
      'React',
      'TypeScript',
      'GraphQL',
      'Jest',
      'Cypress',
      'Azure',
      'Kubernetes',
      'Sentry',
      'New Relic',
      'Docker',
      'SQL',
      'Git',
      'GitHub Actions',
    ],
  },
  {
    title: 'PhillStack',
    position: 'Software Engineer',
    time: 'August 2020 – May 2022',
    location: 'Remote',
    description:
      'During my tenure at PhillStack, I developed and deployed high-performance web applications using React and TypeScript. I utilized AWS services like S3, Route 53, CloudFront, and RDS for secure, scalable storage and content delivery. I also optimized site speed and functionality with Node.js and built RESTful APIs, significantly improving site performance and user engagement.',
    tech: [
      'React',
      'TypeScript',
      'Node.js',
      'Express',
      'MongoDB',
      'AWS',
      'Google Analytics',
      'Google Tag Manager',
      'Agile Methodologies',
    ],
  },
];
