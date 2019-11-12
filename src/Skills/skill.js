import React from 'react';
import styles from './Skills.module.css';
import logo from ".././img/js_img.png"

class  Skill extends React.Component {
    render = () => {
        return (

            <div className={styles.oneSkill} style={this.props.style}>
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
