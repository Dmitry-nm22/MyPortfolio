import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <span>Науменко Дмитрий</span>
        <div className={styles.innerContent}>
          <div className={styles.list}></div>
          <div className={styles.list}></div>
          <div className={styles.list}></div>
          <div className={styles.list}></div>
        </div>
        <span>© Все права защищены</span>
      </div>

    </div>
  );
}

export default Footer;
