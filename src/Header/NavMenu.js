import React from 'react';
import styles from './NavMenu.module.css';

function NavMenu() {
    return (

        <div className={styles.Nav}>
            <a href='' className={styles.Link}>Главная</a>
            <a href='' className={styles.Link}>Скилы</a>
            <a href='' className={styles.Link}>Проекты</a>
            <a href='' className={styles.Link}>Контакты</a>
        </div>

    );
}

export default NavMenu;
