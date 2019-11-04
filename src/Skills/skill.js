import React from 'react';
import styles from './Skills.module.css';

function Skill() {
    return (



            <div className={styles.skill}>
                <div className={styles.photo}></div>
                <span>react</span>
                <div className={styles.inner}>
                    <div><span>Подробное описание навыка</span></div>
                </div>
            </div>

    )

}
export default Skill;
