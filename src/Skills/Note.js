import React from 'react';
import styles from './Skills.module.css';
import logo from ".././img/js_img.png"

function Note() {
    return (

            <div className={styles.OneSkill}>
                <div className={styles.slider}>
                    <div className={styles.slider__item}>
                        <img className={styles.slider__image} src={logo}/>
                        <div className={styles.slider__text}>JS</div>
                        <h3 className={styles.slider__title}><br/>Эпизод 4 новая надежда</h3>
                        <div className={styles.slider__rating}>
                            <button className={styles.slider__button}>узнать подробней</button>
                        </div>
                    </div>
                </div>
            </div>

    )

}
export default Note;
