import React from 'react';
import styles from './Main.module.css';
import NavMenu from "./NavMenu";


function Main() {
  return (
    <div className={styles.main}>
      <NavMenu/>
      <div className={styles.container}>
        <div className={styles.greeting}>
        <span>Мы создаем легкие решения сложных задач и проблем</span>
        </div>
        <button>Наши проекты</button>
      </div>
    </div>
  );
}

export default Main;
