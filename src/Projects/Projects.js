import React from 'react';
import styles from './Projects.module.css';
import Project from "./Project";

function Projects() {
  return (
    <div className={styles.projects}>
      <div className={styles.myProject}>
        <span>Мои проекты</span>
        <div className={styles.inner}>
          <Project/>
          <Project/>
        </div>
      </div>
    </div>
  );
}

export default Projects;
