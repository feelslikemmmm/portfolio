import React from 'react';
import styles from '../../styles/detail/Detail.module.css'
import Section from '../detail/section/Section';
import Datas from '../../data/Datas';
const Detail = () => {
  const currentUrl = window.location.href.split('/')[4];
  return (
    <>
      <div className={styles.background}>
        <div className={styles.container}>
          {Datas.map((item, idx) => {
            if (currentUrl === item.id + '') {
              return <Section item={item} key={idx} />;
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </>
  )
}

export default Detail;