import React from 'react';
import styles from './Main.module.css';
import NavMenu from "./NavMenu";



function Main() {
  return (
    <div className={styles.main}>
      <NavMenu/>
      <div className={styles.container}>
        <div className={styles.greeting}>
        <span>Создание легких решений  для сложных задач</span>
        </div>
        <button>Наши проекты</button>
      </div>
    </div>
  );
}

export default Main;
