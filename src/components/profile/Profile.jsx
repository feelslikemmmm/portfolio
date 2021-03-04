import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import styles from '../../styles/profile/Profile.module.css'
const Profile = (props) => {
  return (
    <>
      <nav className={styles.global_nav}>
        <div className={styles.global_nav_links}>
          <Link to="/" className={styles.product_name}>
            ←
        </Link>
          <Link to="/profile">
            <span className={styles.blinking}>• </span>
            <span>Profile ㅡ</span>
          </Link>
          <a href="https://github.com/feelslikemmmm" target="blank">
            Github
        </a>
          <a href="https://velog.io/@feelslikemmmm" target="blank">
            Blog
        </a>
        </div>
      </nav>
      <section className={styles.main_section}>
        <div className={styles.main_section_container}>
          <a href="mailto:feelslikemmmm@gmail.com" className={styles.circle}>
            Contect Resn
        </a>
          <h1 className={styles.main_section_title}>
            <span className={styles.main_section_name}>안녕하세요</span> — 전낙원 입니다
          <br />
          Hello, I am a Front-end Developer
        </h1>
          <div className={styles.main_section_body}>
            <p>주 사용 언어는 Javascript이며  React 프레임워크를 이용해서 개발하고 있습니다</p>
            <br />
            <ul>
              <li>저는 팀원들과의 호흡을 중요하게 생각합니다</li>
              <li>팀 프로젝트를 진행해보면서 개발자에게 소통이란 무엇인지 알게되었습니다</li>
              <li>자신 개인이 원하는 방향보다는 팀이 한곳을 바라보고 같은 방향으로 가는것이 중요하다고 생각합니다</li>
              <li>사용자 중심의 UI / UX 에 관심이 많습니다 편리하고 빠르고 또 이상적인 경험을 주고 싶습니다</li>
              <li>사용자의 정황과 목표를 공감해서 개성을 만드는 개발자로서 성장하고 싶습니다</li>
              <li>2번의 팀 프로젝트를 경험하였고, 현재는 개인 프로젝트를 진행하고 있습니다</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
export default Profile;