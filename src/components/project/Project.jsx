import React from 'react';
import styels from '../../styles/project/Project.module.css';
import Section from './section/Section';
import data from '../../data/Data';
const Project = (props) => {
  return (
    <div className={styels.project__container}>
      {data.map((item, idx) => (
        <Section item={item} key={idx} />
      ))}
    </div>
  );
};
export default Project;
