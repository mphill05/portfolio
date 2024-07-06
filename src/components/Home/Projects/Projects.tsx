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
    imgSrc: '/project-imgs/musicapp.png',
    code: 'https://github.com/mphill05/music-app',
    projectLink: '',
    tech: [
      'Next.js',
      'Sass',
      'TypeScript',
      'Framer Motion',
      'Node.js',
      'Express',
      'CircleCI',
      'NextAuth',
      'PostgreSQL',
      'Jira',
    ],
    description: 'Full Stack e-Commerce app built with Next.js.',
    modalContent: (
      <>
        <p>
          <strong className={styles.cso}>Challenge</strong>: As an artist and
          developer, I sought to centralize my digital presence, creating a hub
          for my music portfolio, tour updates, and merchandise. The goal was to
          craft a seamless, engaging experience for fans and a functional
          platform for user engagement and e-commerce.
        </p>
        <p>
          <strong className={styles.cso}>Solution</strong>: Leveraging the power
          of Next.js, I engineered a robust web application that not only
          showcases my music but also enhances user interaction through Framer
          Motion&apos;s sleek animations. I integrated NextAuth for secure user
          authentication, enabling fans to access their order history and
          digital downloads with ease.
        </p>
        <p>
          <strong className={styles.cso}>Outcome</strong>: Currently, the
          application is evolving. It stands as a testament to my dual expertise
          in software engineering and creative design, reflecting my commitment
          to delivering both aesthetic appeal and technical functionality.
        </p>
      </>
    ),
  },
  {
    title: 'Commercial EVs',
    imgSrc: '/project-imgs/commercialEVs.png',
    code: '',
    projectLink: 'https://commercialevs.com',
    tech: ['Next.js', 'React Bootstrap', 'JavaScript', 'Jira'],
    description: 'An e-commerce platform for electric vehicles',
    modalContent: (
      <>
        <p>
          <strong className={styles.cso}>Challenge</strong>: The client required
          a landing page for their electric vehicle store that would enhance
          their online presence. The primary objective was to create a visually
          appealing, user-friendly website that could be easily navigated and
          regularly updated with new and used inventory.
        </p>
        <p>
          <strong className={styles.cso}>Solution</strong>: To improve the user
          experience, I implemented a modern, responsive design. Collaborating
          closely with design teams, we minimized clutter and ensured visual
          appeal. Additionally, I led the main development team in integrating
          new features and design updates to maintain a fresh and engaging site.
        </p>
        <p>
          <strong className={styles.cso}>Outcome</strong>: The resulting website
          is both modern and user-friendly, offering a seamless navigation
          experience. It integrates smoothly with the existing CMS, allowing for
          consistent updates and a uniform user experience across all devices.
        </p>
      </>
    ),
  },
  {
    title: 'Shaed.ai',
    imgSrc: '/project-imgs/shaed.png',
    code: '',
    projectLink: 'https://shaed.ai',
    tech: [
      'React.js',
      'Material UI',
      'TypeScript',
      'JavaScript',
      'SQL',
      'Google Cloud Platform',
      'Github Actions',
      'Clickup',
    ],
    description: 'A comprehensive React-based client portal.',
    modalContent: (
      <>
        <p>
          <strong className={styles.cso}>Challenge</strong>: My client needed a
          robust website to serve as a central portal for accessing multiple
          applications. The primary challenge was to implement seamless
          authentication across all integrated applications with a single
          sign-on (SSO) approach.
        </p>
        <p>
          <strong className={styles.cso}>Solution</strong>: We developed a
          React.js application functioning as a landing page, providing a
          unified entry point for all client applications. The solution included
          secure authentication and seamless navigation across various products.
          Collaborating with another engineer and an external team, we designed
          an efficient system to authenticate users and facilitate smooth
          transitions between different applications.
        </p>
        <p>
          <strong className={styles.cso}>Outcome</strong>: The portal now
          seamlessly communicates with multiple applications, offering users a
          smooth authentication experience. The integrated database effectively
          tracks user activity, ensuring secure access based on predefined
          parameters, thus enhancing the overall user experience.
        </p>
      </>
    ),
  },
  {
    title: 'Phillstack',
    imgSrc: '/project-imgs/psSiteImg.webp',
    code: 'https://github.com/Phillstack/phillstack-react',
    projectLink: 'https://phillstack.com/',
    tech: [
      'React',
      'Sass',
      'Bootstrap',
      'TypeScript',
      'Node.js',
      'Express',
      'AWS',
      'CircleCI',
      'Jira',
    ],
    description: 'Phillstack: Simplified Client Solutions',
    modalContent: (
      <>
        <p>
          <strong className={styles.cso}>Challenge</strong>: Our goal was to
          create an inviting digital landing space for our freelance services,
          one that would not only highlight our past projects but also be
          accessible to non-technical visitors, ensuring they understand our
          services and can easily reach out to us.
        </p>
        <p>
          <strong className={styles.cso}>Solution</strong>: We crafted a
          straightforward and intuitive design, prioritizing ease of navigation
          and clarity of information. The interface is clean and minimalistic,
          removing any barriers between our work and potential clients.
        </p>
        <p>
          <strong className={styles.cso}>Outcome</strong>: The resulting site is
          the epitome of user-friendly design, boasting high responsiveness and
          usability. With CircleCI integration, we ensure continuous testing for
          seamless performance. The development process followed agile
          principles for efficiency and adaptability. Deployment via Amazon Web
          Services guarantees reliability and scalability, while a simple
          contact form facilitates effortless communication.
        </p>
      </>
    ),
  },
  {
    title: 'Boombox Cartel',
    imgSrc: '/project-imgs/bmbxCtrlSiteImg.webp',
    code: '',
    projectLink: 'http://boomboxcartel.com',
    tech: [
      'Angular',
      'Sass',
      'Bootstrap',
      'HTML',
      'CSS',
      'Mailchimp',
      'Bands in Town',
    ],
    description: 'The official website for Boombox Cartel',
    modalContent: (
      <>
        <p>
          <strong className={styles.cso}>Challenge</strong>: Tasked with
          revitalizing Boombox Cartel&apos;s online presence, the objective was
          to create a fresh, engaging web experience that resonates with fans.
          The site needed to showcase the artist&apos;s creativity and talent
          through a modern, multimedia-rich interface without compromising on
          performance.
        </p>
        <p>
          <strong className={styles.cso}>Solution</strong>: Collaborating
          closely with the artist and their graphic designer, we orchestrated a
          full-scale site redesign. The new platform is a testament to their
          vision, featuring custom graphics with unique placements, custom
          icons, and fonts. A bespoke sliding drawer for social media links and
          email subscriptions enhances engagement, while streamlined access to
          tour dates and the store caters to fan needs.
        </p>
        <p>
          <strong className={styles.cso}>Outcome</strong>: The reinvented
          website transformed from dormant to dynamic, attracting over 10,000
          users immediately post-launch. By translating the artist&apos;s
          conceptual art into a high-performance web application using Angular,
          and crafting a stylish interface with Bootstrap and Sass, the site now
          stands as a vibrant hub for fan interaction and artist promotion.
        </p>
      </>
    ),
  },
  {
    title: 'Shop J&W',
    imgSrc: '/project-imgs/shopJWSiteImg.webp',
    code: '',
    projectLink: 'https://shopjandw.com',
    tech: ['Big Commerce', 'Wordpress'],
    description: 'WordPress to BigCommerce Migration',
    modalContent: (
      <>
        <p>
          <strong className={styles.cso}>Challenge</strong>: Our client faced a
          malfunctioning WordPress site, plagued by outdated plugins and a
          disjointed product hosting setup with BigCommerce. The task was to
          streamline their online presence and ensure seamless data integration.
        </p>
        <p>
          <strong className={styles.cso}>Solution</strong>: We executed a
          strategic migration, transitioning the entire storefront from
          WordPress to BigCommerce. This move was complemented by the
          implementation of a custom theme tailored to the client&apos;s brand,
          enhancing the front-end experience.
        </p>
        <p>
          <strong className={styles.cso}>Outcome</strong>: The website&apos;s
          redesign and platform migration have markedly enhanced user experience
          and site stability, with a 50% improvement in performance metrics.
        </p>
      </>
    ),
  },
  {
    title: 'Old Portfolio',
    imgSrc: '/project-imgs/oldportfolio.png',
    code: 'https://github.com/mphill05/oldportfolio',
    projectLink: 'https://mpoldportfolio.vercel.app/',
    tech: [
      'Next.js',
      'Tailwindcss',
      'JavaScript',
      'GraphQL',
      'GraphCMS',
      'Lottie',
      'Nodemailer',
    ],
    description: 'My original portfolio and Blog',
    modalContent: (
      <>
        <p>
          <strong className={styles.cso}>Challenge</strong>: The goal was to
          create a personal portfolio that not only displayed my software
          development projects but also included a blog to share my insights and
          experiences in the tech world.
        </p>
        <p>
          <strong className={styles.cso}>Solution</strong>: Embracing the power
          of Next.js for the first time, I integrated GraphCMS, a headless CMS,
          to manage blog content efficiently. The data is fetched using GraphQL,
          ensuring a seamless flow of information.
        </p>
        <p>
          <strong className={styles.cso}>Outcome</strong>: The result is a fully
          responsive web application that provides a quick, lightweight, and
          user-friendly experience. It serves as a comprehensive showcase of my
          work and a platform for my written thoughts in the blog.
        </p>
      </>
    ),
  },
];
