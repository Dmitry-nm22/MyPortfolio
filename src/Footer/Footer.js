import React from 'react';
import styles from './Footer.module.css';
import FooterMenu from "./FooterMenu";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <span>Науменко Дмитрий</span>
        <div className={styles.innerContent}>
        <FooterMenu/>
        <FooterMenu/>
        <FooterMenu/>
        <FooterMenu/>
        </div>
        <span>© Все права защищены</span>
      </div>

    </div>
  );
}

export default Footer;
