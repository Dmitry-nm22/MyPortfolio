import React from 'react';
import styles from './NavMenu.module.css';

function NavMenu() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.header__inner}>
                    <div className={styles.header__logo}>frnd</div>

                    <nav className={styles.nav}>
                        <a className={styles.nav__link} href="#">Главная</a>
                        <a className={styles.nav__link} href="#">Скилы</a>
                        <a className={styles.nav__link} href="#">Проекты</a>
                        <a className={styles.nav__link} href="#">Blog</a>
                        <a className={styles.nav__link} href="#">Контакты</a>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default NavMenu;
