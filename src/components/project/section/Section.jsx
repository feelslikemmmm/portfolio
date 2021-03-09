import React from 'react';
import styles from '../../../styles/project/section/Section.module.css';
import Fade from 'react-reveal/Fade';
import { useHistory } from 'react-router-dom';
const Section = ({ item }) => {
  let history = useHistory();
  const clickHandler = (id) => {
    history.push({
      pathname: `/detail/${id}`
    })
  }
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
          </div>
          <div className={styles.section__content__container}>
            <div className={styles.section__content__github}>
              <a href={item.git} target="blank" rel="noopener noreferrer" style={{ color: item.fontColor }}>
                GITHUB
              </a>
            </div>
            <div className={styles.section__content__website}>
              <a href={item.src} target="blank" rel="noopener noreferrer" style={{ color: item.fontColor }}>
                WEB SITE
              </a>
            </div>
            <div className={styles.section__content__link}>
              <button onClick={() => { clickHandler(item.id) }} style={{ color: item.fontColor }}>
                EXPLORE
              </button>
            </div>
          </div>
        </div>
        <div className={styles.project__section__graphics}>
          <a href={item.src} target="blank" rel="noopener noreferrer">
            <div className={styles.graphics__container}>
              <img src={item.img} alt="moi" />
            </div>
          </a>
        </div>
      </div>
    </Fade >
  );
};

export default Section;
