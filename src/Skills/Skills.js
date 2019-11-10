import React from 'react';
import styles from './Skills.module.css';
import Skill from "./Skill";
import logo_js from ".././img/js_img.png"
import logo_react from ".././img/react_img.png"
import logo_angular from ".././img/angular.png"

class  Skills extends React.Component {

    render = () => {
        return (
            <div className={styles.skills}>
                <div className={styles.header}>
                    <span>Работаю с несколькими языками  программирования</span>
                    <div className={styles.mainContent}>
                        <Skill src={logo_js}
                               title='разработка на Javascript'
                               text='JS'
                        />

                        <Skill src={logo_react}
                               title='разработка на React'
                               text='React'
                        />

                        <Skill src={logo_angular}
                               title='Использование фреймворка Angular'
                               text='Angular'
                        />

                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;
