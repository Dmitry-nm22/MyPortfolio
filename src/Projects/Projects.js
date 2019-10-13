import React from 'react';
import styles from './Projects.module.css';

function Projects() {
  return (
    <div className={styles.projects}>
      <div className={styles.myProject}>
        <span>Мои проекты</span>
        <div className={styles.inner}>
          <div className={styles.innerOne}>
            <div className={styles.contentOne}></div>
          </div>
          <div className={styles.innerTwo}>
            <div className={styles.button}> <button>Смотреть</button> </div>
            <div className={styles.contentTwo}>
              <div className={styles.contentTwoInner}>
                <span>Название проекта</span>
                <span>Краткое описание</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
