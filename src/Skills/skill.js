import React from 'react';
import styles from './Skills.module.css';
import logo_js from ".././img/js_img.png"
import logo_react from ".././img/react_img.png"
import logo_angular from ".././img/angular.png"
import logo_css from ".././img/CSS.png"
import logo_html from ".././img/html.ico"
import logo_redux from ".././img/redux.png"


class  Skill extends React.Component {
    render = () => {


        // const logoJS = {
        //     backgroundImage: 'url(' + logo_js + ')',
        // };


        return (

            <div className={styles.oneSkill} style={{backgroundImage:`url(${this.props.backgroundImage})`}}>
                <div className={styles.slider}>
                    <div className={styles.slider__item}>
                        <div>
                            <span className={styles.slider__text}>{this.props.text}</span>
                            <h3 className={styles.slider__title}>{this.props.title}</h3>
                            <button className={styles.slider__button}>узнать подробней</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}
export default Skill;
