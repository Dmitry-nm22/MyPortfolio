import React from 'react';
import styles from './Contacts.module.css';

function Contacts() {
    return (
        <div className={styles.contacts}>
            <div className={styles.content}>
                <span className={styles.title}>Контакты</span>
                <div className={styles.contactInfo}>
                    <input type='text' name='name' placeholder='Name'/>
                    <input type='text' name='email' placeholder='Email'/>
                    <textarea className={styles.messageArea} placeholder='сообщение'></textarea>
                    <button>Отправить</button>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
