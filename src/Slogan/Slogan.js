import React from 'react';
import styles from './Slogan.module.css';

function Slogan() {
  return (
    <div className={styles.slogan}>
      <div className={styles.inner}>
        <div className={styles.span}>
          <span>Рассматриваю варианты удаленной работы</span>
        </div>
        <div className={styles.button}>
          <button>Нанять меня</button>
        </div>
      </div>
    </div>
  );
}

export default Slogan;
