import { MyLinks } from '@/components/Nav/components/MyLinks/MyLinks';
import { Reveal } from '@/components/utils/Reveal';
import { SectionHeader } from '@/components/utils/SectionHeader';
import styles from './About.module.scss';
import { Stats } from './Stats';
import { AiOutlineArrowRight } from 'react-icons/ai';

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Hello! I&apos;m Mark, a Minneapolis-based software engineer with a
              passion for crafting dynamic user experiences using React,
              Next.js, and TypeScript. I bring creativity and precision to every
              project, always choosing the best tools for the job.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              As a dedicated developer, I continually hone my skills to stay
              current with the latest technologies and industry best practices.
              My goal is to design and implement scalable, efficient, and
              user-friendly solutions.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Outside of coding, I spend my time snowboarding, hitting the gym,
              and most importantly, creating music in the studio. Music
              production is not just a hobby for me, but a significant part of
              my life.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m always looking for new challenges and opportunities to
              expand my knowledge in cutting-edge technology. If you&apos;re in
              need of a developer with a creative edge and a strong technical
              background, let&apos;s explore the possibilities together.
              Let&apos;s connect 🔗
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
