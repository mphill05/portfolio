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
    title: 'Mastery Logistics Systems',
    position: 'Software Engineer',
    time: 'March 2022 – June 2023',
    location: 'Remote',
    description:
      'As a Software Engineer at Mastery, I honed my skills in building high-performance, scalable applications tailored for the logistics industry. My role involved close collaboration with UI/UX and product teams to meet tight deadlines, ensuring code quality through meticulous reviews and testing with tools like Jest and Cypress.',
    tech: [
      'React',
      'TypeScript',
      'GraphQL',
      'Jest',
      'Cypress',
      'Azure',
      'Git',
      'GitHub',
    ],
  },
  {
    title: 'PhillStack',
    position: 'Software Engineer',
    time: 'August 2020 – May 2022',
    location: 'Remote',
    description:
      "During my tenure as a Software Engineer at PhillStack, I crafted cutting-edge web applications from the ground up, enhancing user experiences with React, Angular, and TypeScript. My direct engagement with clients and active role in marketing our services were pivotal in driving the company's growth and reducing time-to-market.",
    tech: [
      'React',
      'Angular',
      'TypeScript',
      'Git',
      'Node.js',
      'Express',
      'AWS',
    ],
  },
  {
    title: 'Boombox Cartel',
    position: 'Web Developer',
    time: 'June 2017 – August 2020',
    location: 'Remote',
    description:
      "I led the strategic website overhaul at Boombox Cartel, working closely with the team to reimagine the web app design. This redesign significantly improved site retention and user engagement, contributing to a marked increase in the artist's fan following and social media presence.",
    tech: ['Angular', 'TypeScript', 'SASS', 'RESTful Web Services'],
  },
];
