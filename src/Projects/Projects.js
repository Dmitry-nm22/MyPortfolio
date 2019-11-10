import React from 'react';
import styles from './Projects.module.css';
import Project from "./Project";
import Project_Note from "./Project_Note";

function Projects() {
  return (
    <div className={styles.projects}>
      <div className={styles.myProject}>
        <span className={styles.Project__title}>Наши проекты</span>
        <span className={styles.Project__under__title}>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. </span>
        <div className={styles.inner}>
            <Project_Note/>
            <Project_Note/>
            <Project_Note/>
            <Project_Note/>
          {/*<Project/>*/}
          {/*<Project/>*/}
        </div>
          <button>Все проекты</button>
      </div>
    </div>
  );
}

export default Projects;
