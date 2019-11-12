import React from 'react';
import styles from './Skills.module.css';
import Skill from "./Skill";
import logo_js from ".././img/js_img.png"
import logo_react from ".././img/react_img.png"
import logo_angular from ".././img/angular.png"

class  Skills extends React.Component {

    render = () => {


        const logoJS = {
            backgroundImage: 'url(' + logo_js + ')',
        };

        const logoReact = {
            backgroundImage: 'url(' + logo_react + ')',
        };

        const logoAngular = {
            backgroundImage: 'url(' + logo_angular + ')',
        };




        return (
            <div className={styles.skills}>
                <div className={styles.header}>
                    <span className={styles.span__title}>Работа с несколькими языками  программирования и фреймворками</span>
                    <div className={styles.mainContent}>
                        <Skill style={logoJS}
                               title='разработка на Javascript'
                               text='JS'
                        />

                        <Skill style={logoReact}
                               title='разработка на React'
                               text='React'
                        />

                        <Skill style={logoAngular}
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
