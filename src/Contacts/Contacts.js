import React from 'react';
import styles from './Contacts.module.css';

function Contacts() {
  return (
    <div className={styles.contacts}>
      <div className={styles.content}>
        <span>Контакты</span>
            <div className={styles.innerContent}>

            </div>
          <button>Отправить</button>
      </div>
    </div>
  );
}

export default Contacts;
