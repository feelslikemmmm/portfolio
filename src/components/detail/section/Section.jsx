import React from 'react';
import styles from '../../../styles/detail/section/Section.module.css';
const Section = ({ item }) => {
  return (
    <div className={styles.section__container}>
      <h1 className={styles.title__container}>
        <span>{item.title}</span>
      </h1>
      <div className={styles.subtitle__container}>
        <span>
          {item.subtitle}
        </span>
      </div>
      <div className={styles.desc__container}>
        <span>{item.desc}</span><br />
        <span>{item.desc2}</span><br />
        <span>{item.desc3}</span><br />
        <span>{item.desc4}</span><br />
        <span>{item.desc5}</span><br />
        <span>{item.desc6}</span><br />
      </div>
      <div className={styles.project__container}>
        <div className={styles.project__item}>
          <h3 className={styles.project__item__title}>
            <span>{item.itemTitle[0]}</span>
          </h3>
          <div className={styles.project__item__desc}>
            <span>{item.assignment[0]}</span>
            <span>{item.assignment[1]}</span>
            <span>{item.assignment[2]}</span>
            <span>{item.assignment[3]}</span>
            <span>{item.assignment[4]}</span>
            <span>{item.assignment[5]}</span>
            <span>{item.assignment[6]}</span>
          </div>
        </div>
        <div className={styles.project__item}>
          <h3 className={styles.project__item__title}>
            <span>{item.itemTitle[1]}</span>
          </h3>
          <div className={styles.project__item__desc}>
            <span>{item.objective[0]}</span>
            <span>{item.objective[1]}</span>
            <span>{item.objective[2]}</span>
            <span>{item.objective[3]}</span>
          </div>
        </div>
        <div className={styles.project__item}>
          <h3 className={styles.project__item__title}>
            <span>{item.itemTitle[2]}</span>
          </h3>
          <div className={styles.project__item__desc}>
            <span>{item.includes[0]}</span>
            <span>{item.includes[1]}</span>
            <span>{item.includes[2]}</span>
            <span>{item.includes[3]}</span>
          </div>
        </div>
        <div className={styles.project__item}>
          <h3 className={styles.project__item__title}>
            <span>{item.itemTitle[3]}</span>
          </h3>
          <div className={styles.project__item__desc}>
            <span>{item.year[0]}</span>
            <span>{item.year[1]}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Section;