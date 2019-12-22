import React from 'react';
import styles from './Footer.module.css';
import FooterMenu from "./FooterMenu";



class  Footer extends React.Component {
  render = () => {
    return (
        <div className={styles.footer}>
          <div className={styles.content}>
            <span className={styles.title}>Науменко Дмитрий</span>
            <div className={styles.innerContent}>
              <FooterMenu className="fab fa-instagram" href='https://www.instagram.com/dmitry.nm/' />
              <FooterMenu className="fab fa-whatsapp" />
              <FooterMenu className="fab fa-vk" href='https://vk.com/id172054882'/>
              <FooterMenu className="fab fa-telegram"/>
            </div>
            <span>© Все права защищены</span>
          </div>

        </div>
    );
  }
}

export default Footer;
