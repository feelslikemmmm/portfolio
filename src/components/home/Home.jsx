import React from 'react';
import styles from '../../styles/home/Home.module.css';
import Section from './section/Section';
import Project from '../project/Project';
const Home = (props) => {
  return (
    <>
      <div className={styles.home__container}>
        <Section />
      </div>
      <Project />
    </>
  );
};

export default Home;
