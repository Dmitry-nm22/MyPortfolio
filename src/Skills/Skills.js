import React from 'react';
import styles from './Skills.module.css';

function Skills() {
  return (
    <div className={styles.skills}>
      <div className={styles.header}>
          <span>Мои скилы</span>
          <div className={styles.mainContent}>
              <div className={styles.contentOne}>
                  <div className={styles.photoOne}></div>
                  <span>react</span>
                  <div className={styles.innerOne}>
                      <div> <span>Подробное описание навыка</span> </div>
                  </div>
              </div>
              <div className={styles.contentTwo}>
                  <div className={styles.photoTwo}></div>
                  <span>react</span>
                  <div className={styles.innerTwo}>
                      <div> <span>Подробное описание навыка</span> </div>
                  </div>
              </div>
              <div className={styles.contentThree}>
                  <div className={styles.photoThree}></div>
                  <span>react</span>
                  <div className={styles.innerThree}>
                      <div> <span>Подробное описание навыка</span> </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}

export default Skills;
