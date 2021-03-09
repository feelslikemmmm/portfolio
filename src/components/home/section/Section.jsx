import React from 'react';
import styles from '../../../styles/home/section/Section.module.css';
import Fade from 'react-reveal/Fade';
import { useHistory } from 'react-router-dom';
const Section = () => {
  let history = useHistory();

  const clickHandler = () => {
    history.push({
      pathname: '/profile'
    })
  }

  return (
    <div className={styles.home__section__container}>
      <Fade bottom cascade>
        <a href="mailto:feelslikemmmm@gmail.com" className={styles.circle}>
          Contact Resn
        </a>
      </Fade>
      <nav className={styles.global__nav}>
        <div className={styles.global__nav__links}>
          <a
            href="mailto:feelslikemmmm@gmail.com"
            className={styles.product__name}
          >
            Feelslikemmmm@gmail.com
          </a>
          <span className={styles.blinking}>•&nbsp;</span>
          <span className={styles.profile} onClick={clickHandler}>Profile ㅡ</span>
          <a
            href="https://github.com/feelslikemmmm"
            target="blank"
            rel="noopener noreferrer"
            className={styles.links}
          >
            Github
          </a>
          <a
            href="https://velog.io/@feelslikemmmm"
            target="blank"
            rel="noopener noreferrer"
            className={styles.links}
          >
            Blog
          </a>
        </div>
      </nav>
      <Fade left cascade>
        <h1 className={styles.home__section__title}>Nakwon</h1>
      </Fade>

      <div className={styles.home__section__content}>
        <Fade bottom cascade>
          <div className={styles.home__section__content__left}>
            <div className={styles.left__profile__container}>
              <span className={styles.left__profile__span}>
                <span>/Front end Developer</span>
              </span>
            </div>
            <div className={styles.left__profile__container}>
              <span className={styles.left__profile__span}>
                <span>
                  /Web Portfolio&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;
                </span>
              </span>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Section;
