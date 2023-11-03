// import { StandardButton } from '@/components/Buttons/StandardButton';
import { Reveal } from '@/components/utils/Reveal';
import { DotGrid } from './DotGrid';
import styles from './Intro.module.scss';
import { Typing, TextCursor } from './TypingAnimation';
import { StyledButton } from '@/components/Buttons/StyledButton';

export const Hero = () => {
  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.copyWrapper}>
        <Reveal>
          <h1 className={styles.title}>
            Hey, I&apos;m Mark<span>.</span>
          </h1>
        </Reveal>
        <Reveal>
          <Typing>
            <h2 className={styles.subTitle}>
              I&apos;m a{' '}
              <span>
                Software Developer
                <TextCursor />
              </span>
            </h2>
          </Typing>
        </Reveal>
        <Reveal>
          <p className={styles.aboutCopy}>
            Who&apos;s self taught with a passion for building cool stuff.
            stuff.
            <br />
            Let&apos;s connect!
          </p>
        </Reveal>
        <Reveal>
          <StyledButton
            onClick={() => document.getElementById('contact')?.scrollIntoView()}
          >
            Contact me&nbsp;
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={styles.contactSVG}
              fill="none"
              viewBox="0 0 22 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </StyledButton>
        </Reveal>
      </div>
      <DotGrid />
    </section>
  );
};
