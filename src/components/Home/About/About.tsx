import { MyLinks } from '@/components/Nav/components/MyLinks';
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
              Hey! I&apos;m Mark, if you haven&apos;t already gathered that by
              now. I&apos;m a music producer turned software engineer from
              Minneapolis, Minnesota. I specialize in frontend, primarily using
              React, NextJS and TypeScript, but love building with whatever
              tools are right for the job.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I currently have been taking on freelance clients while I sort out
              where to go for my next role. Currently working towards obtaining
              certifications with AWS.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Outside of work, I love to spend time creating music or
              snowboarding. I&apos;m almost always trying to filming
              snowboarding or writing music for a new project.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m currently looking for new positions where I can expand on
              my love for next tech and expand on my skills. If you think
              you&apos;ve got an opening that I might like, let&apos;s connect
              🔗
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
