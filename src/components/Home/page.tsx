'use client';

import React from 'react';
import { SideBar } from '../Nav/SideBar';
import { Hero } from './Intro/Intro';
import styles from './page.module.scss';
import { Nav } from '../Nav/Nav';
import { About } from './About/About';
import { Projects } from './Projects/Projects';
import { Experience } from './Experience/Experience';
import { Contact } from './Contact/Contact';

export const Home = () => {
  return (
    <>
      <div className={styles.home}>
        <SideBar />
        <main>
          <Nav />
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact />
          <div
            style={{
              height: '200px',
              background:
                'linear-gradient(180deg, var(--background), var(--background-dark))',
            }}
          />
        </main>
      </div>
    </>
  );
};
