import React from 'react';
import styles from './Main.module.css';




function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.greeting}>
        <span>Я создаю легкие решения  для сложных задач</span>
        </div>
        <button>Мои проекты</button>
      </div>
    </div>
  );
}

export default Main;
