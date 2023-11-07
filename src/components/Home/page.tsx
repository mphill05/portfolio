'use client';

import React from 'react';
import { SideBar } from '../Nav/components/SideBar/SideBar';
import { Intro } from './Intro/Intro';
import { Nav } from '../Nav/components/Nav/Nav';
import { About } from './About/About';
import { Projects } from './Projects/Projects';
import { Experience } from './Experience/Experience';
import { Contact } from './Contact/Contact';
import { BottomBar } from '../Nav/components/BottomBar/BottomBar';
import styles from './page.module.scss';

export const Home = () => {
  return (
    <>
      <div className={styles.home}>
        <SideBar />
        <main>
          <Nav />
          <Intro />
          <About />
          <Projects />
          <Experience />
          <Contact />
          <div className={styles.pageSpace} />
          <BottomBar />
        </main>
      </div>
    </>
  );
};
