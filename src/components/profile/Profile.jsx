import React from 'react';
import { Link } from 'react-router-dom';
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
          <a href="https://github.com/feelslikemmmm" target="blank" rel="noopener noreferrer">
            Github
        </a>
          <a href="https://velog.io/@feelslikemmmm" target="blank" rel="noopener noreferrer">
            Blog
        </a>
        </div>
      </nav>
      <section className={styles.main_section}>
        <div className={styles.main_section_container}>
          <h1 className={styles.main_section_title}>
            <span className={styles.main_section_name}>안녕하세요</span> — 전낙원 입니다
          <br />
          Hello, I am a Front-end Developer
        </h1>
          <div className={styles.main_section_content_container}>
            <div className={styles.main_section_content_item}>
              <h3 className={styles.content_item_title}>Introduce</h3>
              <div className={styles.content_item_desc}>
                <span>
                  저는 HTML, CSS, Javascript, React등을 이용한 Front-end 개발을 주로 배웠고 개발하고 있습니다
                </span><br />
                <span>
                  새로운 기술과 최신 기술 스택에 대해서 배우는것에 많은 흥미를 느끼고 그것을 즐기고 있습니다
                </span><br />
                <span>어려운 문제를 직면했을때 어떻게 하면 효율적으로 해결할 수 있을지 검색과 질문을 통해 극복해나가고 있습니다
                </span><br />
                <span>개발자로서 제 자신의 역량과 성장을 위해서 과감하게 투자하며 멈추지 않는 성장을 추구합니다
                </span><br />
                <span>사람들과 소통하는것을 좋아하며 그것이 개발에도 굉장히 중요한 요소라고 생각합니다
                </span><br />
                <span>팀 프로젝트를 진행할 때에도 팀원들과 의견을 조율하고 세세하게 기획하고 방향성을 설정했습니다
                </span><br />
                <span>꾸준함을 잃지말자 라는 모토로 계속 발전해 나가고 있는 개발자 입니다.</span><br />
              </div>
            </div>
            <div className={styles.main_section_content_item}>
              <h3 className={styles.content_item_title}>Stack</h3>
              <div className={styles.content_item_desc}>
                <span>프로그래밍 언어 : Javascript, Typescript, HTML, CSS</span><br />
                <span>프레임워크 & 라이브러리 : React, Redux, Redux-Saga</span><br />
                <span>Others : Git, AWS(S3, CloudFront, Route53), Postman, Slack, Notion</span><br />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Profile;