import React from 'react';
import styles from './Skills.module.css';



class  Skill extends React.Component {
    render = () => {
        return (
            <div className={styles.oneSkill} style={{backgroundImage:`url(${this.props.backgroundImage})`}}>
                <div className={styles.skill}>
                    <div className={styles.skill__item}>
                        <div>
                            <span className={styles.skill__text}>{this.props.text}</span>
                            <h3 className={styles.skill__title}>{this.props.title}</h3>
                            <button className={styles.skill__button}>узнать подробней</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Skill;
