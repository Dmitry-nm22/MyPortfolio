import React from 'react';
import styles from './Projects.module.css';

function Project() {
  return (

      <div className={styles.Content}>
        <div className={styles.Container}>
            <div className={styles.background}>
                <div className={styles.Button}>
                    <button> Смотреть</button>
                </div>
            </div>
          <div className={styles.Span}>
            <span>Название проекта</span>
            <span>Краткое описание</span>
          </div>
        </div>
      </div>


  );
}

export default Project;
