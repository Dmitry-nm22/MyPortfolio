import React from 'react';
import styles from './Skills.module.css';
import Skill from "./Skill";
import logo_js from ".././img/js_img.png"
import logo_react from ".././img/react_img.png"
import logo_angular from ".././img/angular.png"
import logo_css from ".././img/CSS.png"
import logo_html from ".././img/html.ico"
import logo_redux from ".././img/redux.png"



class  Skills extends React.Component {

    state ={
        skill: [
            {id:0, url: logo_js, title:'разработка на Javascript', text:'JS'},
            {id:1, url: logo_react, title:'Использование библиотеки  React', text:'react'},
            {id:2, url: logo_angular, title:'Использование фреймворка Angular', text:'Angular'},
            {id:3, url: logo_css, title:' Написание стилей', text:'CSS'},
            {id:4, url: logo_html, title:'Использование языка разметки HTML', text:'HTML'},
            {id:5, url: logo_redux, title:'Использование библиотеки Redux', text:'Redux'}
        ],
        currentIndex: 0,
        disablePrev: false,
        disableNext: false


    }

    nextSlide = () => {
        this.setState({
            currentIndex: this.state.currentIndex + 1
        })
    }

    prevSlide = () => {


        this.setState({
            currentIndex: this.state.currentIndex - 1
        })

    }


    render = () => {

        const MySkill = this.state.skill.map(sk => <Skill id={sk.id} slyle={sk.url} title={sk.title} text={sk.text}/>)

        // const logoJS = {
        //     backgroundImage: 'url(' + logo_js + ')',
        // };
        //
        // const logoReact = {
        //     backgroundImage: 'url(' + logo_react + ')',
        // };
        //
        // const logoAngular = {
        //     backgroundImage: 'url(' + logo_angular + ')',
        // };
        //
        // const logoCss = {
        //     backgroundImage: 'url(' + logo_css + ')',
        // };
        //
        // const logoHtml = {
        //     backgroundImage: 'url(' + logo_html + ')',
        // };
        //
        // const logoRedux = {
        //     backgroundImage: 'url(' + logo_redux + ')',
        // };





        return (
            <div className={styles.skills}>
                <div className={styles.header}>
                    <span className={styles.span__title}>Работа с несколькими языками  программирования и фреймворками</span>
                    <div className={styles.mainContent}>
                        {/*<Skill style={logoJS}*/}
                        {/*       title='разработка на Javascript'*/}
                        {/*       text='JS'*/}
                        {/*/>*/}

                        {/*<Skill style={logoReact}*/}
                        {/*       title='разработка на React'*/}
                        {/*       text='React'*/}
                        {/*/>*/}

                        {/*<Skill style={logoAngular}*/}
                        {/*       title='Использование фреймворка Angular'*/}
                        {/*       text='Angular'*/}
                        {/*/>*/}
                        {/*<Skill style={logoCss}*/}
                        {/*       title='Написание стилей'*/}
                        {/*       text='CSS'*/}
                        {/*/>*/}
                        {/*<Skill style={logoHtml}*/}
                        {/*       title='Использование языка разметки HTML'*/}
                        {/*       text='HTML'*/}
                        {/*/>*/}
                        {/*<Skill style={logoRedux}*/}
                        {/*       title='Использование библиотеки Redux'*/}
                        {/*       text='Redux'*/}
                        {/*/>*/}

                        <button onClick={this.prevSlide} disabled={this.state.disablePrev}>prev</button>

                         {MySkill[this.state.currentIndex]}

                        <button onClick={this.nextSlide}>next</button>

                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;
