import React from 'react';
import styles from './Projects.module.css';
import Project from "./Project";

function Projects() {
  return (
    <div className={styles.projects}>
      <div className={styles.myProject}>
        <span className={styles.Project__title}>Мои проекты</span>
        <div className={styles.inner}>
            <Project/>
            <Project/>
            <Project/>
        </div>
          <button>Все проекты</button>
      </div>
    </div>
  );
}

export default Projects;
