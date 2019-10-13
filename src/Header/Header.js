import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.headerLogo}>LOGO</div>

          <nav className={styles.nav}>
            <a className={styles.navLink} href="#a"> Home</a>
            <a className={styles.navLink} href="#a"> Portfolio</a>
            <a className={styles.navLink} href="#a"> Blog</a>
            <a className={styles.navLink} href="#a"> Contact</a>
          </nav>

        </div>
      </div>
    </div>
  );
}

export default Header;
