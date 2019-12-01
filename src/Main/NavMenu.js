import React from 'react';
import styles from './NavMenu.module.css';
import BurgerMenu from "./BurgerMenu";

function NavMenu() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.header__inner}>
                    <div className={styles.header__logo}>frnd</div>

                    <nav className={styles.nav}>
                        <a className={styles.nav__link} href="#">HOME</a>
                        <a className={styles.nav__link} href="#">SKILLS</a>
                        <a className={styles.nav__link} href="#">PROJECT</a>
                        <a className={styles.nav__link} href="#">CONTACTS</a>
                    </nav>
                    <BurgerMenu className={styles.active} />
                </div>
            </div>
        </header>
    );
}

export default NavMenu;
