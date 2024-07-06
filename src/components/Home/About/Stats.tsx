import styles from './Stats.module.scss';
import { AiFillCode, AiFillSmile } from 'react-icons/ai';
import { Reveal } from '@/components/utils/Reveal';

const stats = [
  {
    tech: 'React',
  },
  {
    tech: 'Next.js',
  },
  {
    tech: 'TypeScript',
  },
  {
    tech: 'JavaScript',
  },
  {
    tech: 'Node.js',
  },
  {
    tech: 'Python',
  },
  {
    tech: 'Express',
  },
  {
    tech: 'SQL',
  },
  {
    tech: 'GraphQL',
  },
  {
    tech: 'REST',
  },
  {
    tech: 'SASS',
  },
  {
    tech: 'Tailwind',
  },
  {
    tech: 'HTML',
  },
  {
    tech: 'CSS',
  },
  {
    tech: 'MongoDB',
  },
  {
    tech: 'Docker',
  },
  {
    tech: 'Postman',
  },
  {
    tech: 'Cypress',
  },
  {
    tech: 'Jest',
  },
  {
    tech: 'Vitest',
  },
  {
    tech: 'AWS',
  },
  {
    tech: 'GCP',
  },
  {
    tech: 'Azure',
  },
  {
    tech: 'Docker',
  },
  {
    tech: 'Git',
  },
  {
    tech: 'Jira',
  },
  {
    tech: 'Google Analytics',
  },
  {
    tech: 'Tag Manager',
  },
  {
    tech: 'Clickup',
  },
];

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Tech I Know</span>
          </h4>
          <div className={styles.statGrid}>
            {stats.map((stats) => {
              return (
                <span key={stats.tech} className="chip">
                  {stats.tech}
                </span>
              );
            })}
          </div>
        </div>
      </Reveal>
      {/* <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillSmile size="2.4rem" color="var(--brand)" />
            <span>Tech I&apos;m Learning</span>
          </h4>
          <div className={styles.statGrid}>
            {learning.map((learning) => {
              return (
                <span key={learning.tech} className="chip">
                  {learning.tech}
                </span>
              );
            })}
          </div>
        </div>
      </Reveal> */}
    </div>
  );
};
