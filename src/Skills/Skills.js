import React from 'react';
import styles from './Skills.module.css';
import Skill from "./Skill";

function Skills() {
    return (
        <div className={styles.skills}>
            <div className={styles.header}>
                <span>Мы создаем на разных языках программирования</span>
                <div className={styles.mainContent}>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
