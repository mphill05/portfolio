import { Reveal } from '@/components/utils/Reveal';
import styles from './Contact.module.scss';
import { AiFillMail } from 'react-icons/ai';
import Link from 'next/link';

export const Contact = () => {
  return (
    <section id="contact">
      <div className={styles.contactWrapper}>
        <Reveal width="100%">
          <h4 className={styles.contactTitle}>
            Get in Touch<span>.</span>
          </h4>
        </Reveal>
        <Reveal width="100%">
          <p className={styles.contactCopy}>
            I&apos;m always open to discussing new opportunities or potential
            collaborations. <br />
            Feel free to reach out via email or connect with me on{' '}
            <Link
              href="https://www.linkedin.com/in/mphill05"
              target="_blank"
              aria-label="LinkedIn Profile"
            >
              Linkedin
            </Link>
            .
          </p>
        </Reveal>
        <Reveal width="100%">
          <Link href="mailto:mphill05@gmail.com" aria-label="Email">
            <div className={styles.contactEmail}>
              <AiFillMail size="2.4rem" />
              <span>mphill05@gmail.com</span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
};
