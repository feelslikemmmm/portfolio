import React from 'react';
import styles from '../../../styles/project/section/Section.module.css';
import Fade from 'react-reveal/Fade';
const Section = ({ item }) => {
  return (
    <Fade bottom>
      <div
        className={styles.project__section__container}
        style={{ background: item.background, color: item.color }}
      >
        <div className={styles.project__section__content}>
          <div className={styles.section__content__header}>
            <span className={styles.section__content__header__span}>
              <span>{item.project}</span>
            </span>
          </div>
          <div className={styles.section__content__title}>
            <h2 className={styles.section__content__title__h2}>
              <span className={styles.section__content__title__span}>
                <span>{item.title}</span>
              </span>
            </h2>
          </div>
          <div className={styles.section__content__subtitle}>
            <span className={styles.section__content__subtitle__span}>
              <span>{item.subtitle}</span>
            </span>
          </div>
          <div className={styles.section__content__desc}>
            <span className={styles.section__content__desc__span}>
              <span>
                {item.front} <br />
                {item.back} {item.back && <br />}
                {item.deploy} <br />
              </span>
            </span>
            <span className={styles.section__content__desc__span}>
              <span>
                Role: {item.role}
                <br />
              </span>
            </span>
            {/* <span className={styles.section__content__desc__span}>
              <span>
                Work Content <br />
                {item.work} <br />
                {item.work2} <br />
                {item.work3} <br />
                {item.work4} <br />
                {item.work5} <br />
                {item.work6} <br />
              </span>
            </span> */}
          </div>
          <div className={styles.section__content__link}>
            <a href="https://everymoi.com">
              EXPLORE
              <svg
                width="45"
                height="11"
                viewBox="0 0 45 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M39.6364 9.98889L44 5.98889M44 5.98889L39.6364 1.98889M44 5.98889H1"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div className={styles.project__section__graphics}>
          <a href={item.src} target="blank" rel="noopener noreferrer">
            <div className={styles.graphics__container}>
              <img src={item.img} alt="moi" />
            </div>
          </a>
        </div>
        {/* <div className={styles.border}></div> */}
      </div>
    </Fade>
  );
};

export default Section;
