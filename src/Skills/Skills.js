import React from 'react';
import styles from './Skills.module.css';
import Skill from "./Skill";


import logo_js from ".././img/js_img.png"
import logo_react from ".././img/react_img.png"
import logo_angular from ".././img/angular.png"
import logo_css from ".././img/css.png"
import logo_html from ".././img/html.ico"
import logo_redux from ".././img/redux.png"



class  Skills extends React.Component {

    state ={
        skill: [
            [{id: 0, backgroundImage: logo_js, title: 'разработка на Javascript', text: 'JS'},
                {id: 1, backgroundImage: logo_react, title: 'Использование библиотеки  React', text: 'react'},
                {id: 2, backgroundImage: logo_angular, title: 'Использование фреймворка Angular', text: 'Angular'}
            ],

            [{id: 3, backgroundImage: logo_css, title: ' Написание стилей', text: 'CSS'},
                {id: 4, backgroundImage: logo_html, title: 'Использование языка разметки HTML', text: 'HTML'},
                {id: 5, backgroundImage: logo_redux, title: 'Использование библиотеки Redux', text: 'Redux'}
            ]
        ],
        currentIndex: 0,
        disablePrev: true,
        disableNext: false
    }


    nextSlide = () => {
        if (this.state.currentIndex < this.state.skill.length - 1) {
            this.setState({
                currentIndex: this.state.currentIndex + 1,
                disablePrev: false
            }, ()=> {
                if(this.state.currentIndex === this.state.skill.length -1){
                    this.setState({
                        disableNext: true
                    })
                }
            })
        }

    }

    prevSlide = () => {

        if (this.state.currentIndex > 0) {
            this.setState( {
                currentIndex: this.state.currentIndex - 1,
                disableNext: false
            }, () =>{
                if(this.state.currentIndex === 0){
                    this.setState( {
                        disablePrev: true
                    })
                }
            })
        }
    }


    render = () => {

        const MySkill = this.state.skill.map(sk => sk.map((s) => <Skill id={s.id} backgroundImage={s.backgroundImage} title={s.title} text={s.text}/>))

        return (
            <div className={styles.skills}>
                <div className={styles.header}>
                    <span className={styles.span__title}>Работа с несколькими языками  программирования и фреймворками</span>
                    <div className={styles.mainContent}>
                        <a className={styles.button_slider}
                             onClick={this.prevSlide}
                             disabled={this.state.disablePrev}> <i className="fas fa-angle-double-left"> </i>
                        </a>
                        {MySkill[this.state.currentIndex]}
                        <a className={styles.button_slider}
                             onClick={this.nextSlide}
                             disabled={this.state.disableNext}> <i className="fas fa-angle-double-right"> </i>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;
