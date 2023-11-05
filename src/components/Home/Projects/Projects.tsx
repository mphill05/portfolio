import { SectionHeader } from '@/components/utils/SectionHeader';
import { Project } from './Project';
import styles from './Projects.module.scss';

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: 'Music App',
    imgSrc: 'project-imgs/musicapp.png',
    code: 'https://github.com/mphill05/music-app',
    projectLink: '',
    tech: [
      'Next JS',
      'Sass',
      'TypeScript',
      'Framer Motion',
      'Node',
      'Express',
      'CircleCi',
      'Next Auth',
      'MongoDB',
      'Jira',
    ],
    description: 'A landing page for my music.',
    modalContent: (
      <>
        <p>
          Challenge: I needed a website that would allow me to have a single
          location for previous music releases and upcoming news and what not
          pertaining to my music. This website will allow fans to see what
          I&apos;m up to, as well as gain access to their own accounts for
          previous orders.
        </p>
        <p>
          Solution: I created a NextJS application that uses framer motion for
          simple designs and animations, and am using NextAuth to handle user
          authentication to see previous orders and purchased digital assets.
        </p>
        <p>Outcome: This application is a work in progress for now.</p>
      </>
    ),
  },
  {
    title: 'Merchbox',
    imgSrc: 'project-imgs/merchbox.png',
    code: 'https://github.com/mphill05/merchbox',
    projectLink: 'https://merchboxapp.vercel.app/',
    tech: ['Next JS', 'Sass', 'TypeScript', 'Framer Motion', 'Jira'],
    description: 'A landing page for Merchbox clients to obtain store info.',
    modalContent: (
      <>
        <p>
          Challenge: This client had an issue with their existing wix template
          and found it difficult to adjust parameters how they wanted, they had
          clunky animations and issues with the site being responsive.
        </p>
        <p>
          Solution: I created a lightweight Next 13 application utilizing framer
          motion for the animations and SASS to handle the reponsive design. The
          email form is handled with Nodemailer creating a lightweight and
          smooth user experience.
        </p>
        <p>
          Outcome: The site loads significantly faster than the previous wix
          page, with a smoother design that is responsive. The page has a locked
          in design for clients and we improved SEO utilizing proper meta tags
          and cross site referencing.
        </p>
      </>
    ),
  },
  {
    title: 'Phillstack',
    imgSrc: 'project-imgs/psSiteImg.webp',
    code: 'https://github.com/Phillstack/phillstack-react',
    projectLink: 'https://phillstack.com/',
    tech: [
      'React',
      'Sass',
      'Bootstrap',
      'JavaScript',
      'Node',
      'Express',
      'AWS',
      'CircleCi',
      'Jira',
    ],
    description:
      'A simple ReactJS application for freelance clients to showcase previous work and help clients find us.',
    modalContent: (
      <>
        <p>
          Challenge: A site to operate as a landing page for freelance clients
          and to showcase work that we&apos;ve previously worked on. This site
          needed to be simple and easy for nontechnical people to be able to see
          our work, what we&apos;re about and get in contact with us.
        </p>
        <p>
          Solution: A simple, straightforward design making it easy for anyone
          to find us and what we do. The page is straight forward and minimal.
        </p>
        <p>
          Outcome: The site contains minimal design tricks and maximum
          userability and responsiveness. We employed CircleCi to consistently
          test the application, and built the site utilizing an agile
          methodology. The site contains a simple contact form and is deployed
          with amazon web services.
        </p>
      </>
    ),
  },
  {
    title: 'Boombox Cartel',
    imgSrc: 'project-imgs/bmbxCtrlSiteImg.webp',
    code: '',
    projectLink: 'http://boomboxcartel.com',
    tech: ['Angular', 'Sass', 'Bootstrap', 'HTML', 'CSS'],
    description:
      'A center location for Boombox Cartel fans to stay in touch with the artist and get up to date news on new music, tour dates, and video and music releases.',
    modalContent: (
      <>
        <p>
          Challenge: The original site was broken and extremely dated, I was
          approached to help improve their web presence and give the artist a
          homebase to work from. We needed something that was new, creative,
          showcased the artists talents, and felt engaging to fans without going
          overboard. I needed to be able to show images and videos without
          costing the user too much, and use custom graphics with abnormal
          placement to achieve the vision the artists and his designer
          eventually landed on.
        </p>
        <p>
          Solution: A complete site redesign from the ground up working closely
          with the artist and his graphic designer. This is a page achieves the
          visions they set without being too taxing on the end user. Everything
          is made with custom icons and fonts, a custom sliding drawer in the
          bottom for socials and subscribe via email, and gives users what they
          need in regards to tour dates and the store.
        </p>
        <p>
          Outcome: The website went from being completely stagnant, to having
          over 10,000 users immediately. I took their vision from from concept
          to full on web application and deployed the site using Angular, styled
          with Bootstrap and Sass.
        </p>
      </>
    ),
  },
  {
    title: 'Shop J&W',
    imgSrc: 'project-imgs/shopJWSiteImg.webp',
    code: '',
    projectLink: 'https://shopjandw.com',
    tech: ['Big Commerce', 'Wordpress'],
    description:
      'An e-commerce app that I transfered from Wordpress to Bigcommerce for a client.',
    modalContent: (
      <>
        <p>
          Challenge: The client needed to upgrade their existing WordPress site
          that was broken due to plugins not being updated. The client was
          hosting their products with Bigcommerce and transfering their data to
          WordPress.
        </p>
        <p>
          Solution: The site was migrated over from WordPress to Bigcommerce for
          the front-end and setup with a custom theme.
        </p>
        <p>
          Outcome: The sites redesign has improved usability and the migration
          to Bigcommerce has improved stability by over 50%.
        </p>
      </>
    ),
  },
];
