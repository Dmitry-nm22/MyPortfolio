import React from 'react';
import styles from './modules/Header.module.css';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.headerLogo}>LOGO</div>

          <nav className={styles.nav}>
            <a className={styles.navLink} href="#"> Home</a>
            <a className={styles.navLink} href="#"> Portfolio</a>
            <a className={styles.navLink} href="#"> Blog</a>
            <a className={styles.navLink} href="#"> Contact</a>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
