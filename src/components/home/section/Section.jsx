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
            {/* <a
              className={styles.content__left__email__container}
              href="mailto:feelslikemmmm@gmail.com"
            >
              <span className={styles.left__email__span}>
                <span>feelslikemmmm@gmail.com</span>
              </span>
            </a> */}
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
        {/* <div className={styles.home__section__content__right}>
          <div className={styles.right__about__text}>
            Front end Web 개발을 하고있습니다
            <br />
            사용자 중심의 UI / UX 를 중요하게 생각해요
            <br />
          </div>
          <div className={styles.right__social__link}>
            <a className={styles.social__link} href="#">
              Profile
            </a>
            <a
              className={styles.social__link}
              href="https://github.com/feelslikemmmm"
              target="_blank"
            >
              Github
            </a>
            <a
              className={styles.social__link}
              href="https://velog.io/@feelslikemmmm"
              target="_blank"
            >
              Blog
            </a>
            <a
              className={styles.social__link}
              href="https://www.instagram.com/feelslikemmmm/"
              target="_blank"
            >
              Instagram
            </a>
          </div>
        </div> */}
      </div>
      {/* <div className={styles.home__section__underline}></div> */}
    </div>
  );
};

export default Section;
