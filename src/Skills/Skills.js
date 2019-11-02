import React from 'react';
import styles from './Skills.module.css';
import Skill from "./skill";

function Skills() {
    return (
        <div className={styles.skills}>
            <div className={styles.header}>
                <span>Мои скилы</span>
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
