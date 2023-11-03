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
      'I specialized in crafting high-performannt, scalable, and testable application for the logistics industry. I ensured robustness by conducting thorough unit and integration tests, and collaborated with UI/UX and product to achieve frequent tight deadlines, all while mainting stringent code quality through dilligent code reviews.',
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
    title: 'PhtillStack',
    position: 'Software Engineer',
    time: 'August 2020 – May 2022',
    location: 'Remote',
    description:
      'I developed cutting-edge web applications from scratch with React, Angular and/or TypeScript, significantly enhancing user experience and functionality. While wearing many hats as a developer, I also spent a lot of time working with various clients directly and marketing our services.',
    tech: ['React', 'Angular', 'TypeScript', 'Git', 'NodeJS', 'Express', 'AWS'],
  },
  {
    title: 'Boombox Cartel',
    position: 'Web Developer',
    time: 'June 2017 – August 2020',
    location: 'Remote',
    description:
      'I handled the strategic overhaul of the website and worked with the team to create an entirely new web app design from scratch. Not only did I improve site retention and user engagement, but the redesign helped increase fan following and engagement across all social media platforms.',
    tech: ['Angular', 'TypeScript', 'SASS', 'RESTful Web Services'],
  },
];
