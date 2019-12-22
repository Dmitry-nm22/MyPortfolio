import React from 'react';
import './BurgerMenu.css';




class  BurgerMenu extends React.Component {

    state ={
        activeForA: false,
        activeForNav: false
    };


    classForA = (e) => {
        e.preventDefault()
        if (this.state.activeForA === false) {
            this.setState({
                activeForA: true,
                activeForNav: true
            })
        } else {
            this.setState({
                activeForA: false,
                activeForNav: false
            })
        }
    };


 render() {

        let classForA = this.state.active ? 'menu-btn menu-btn_active' : 'menu-btn' ;
        let classForNav = this.state.activeForNav ? 'menu-nav menu-nav_active' : 'menu-nav' ;

     return (
         <div className="section">
             <div className="menu-block">
                 <nav className={classForNav} >
                     <a href="#">HOME</a>
                     <a href="#">SKILLS</a>
                     <a href="#">PROJECT</a>
                     <a href="#">CONTACTS</a>
                 </nav>
                 <a href='#' className={classForA} onClick={this.classForA} >
                     <span></span>
                 </a>
             </div>
         </div>
     );
 }
}

export default BurgerMenu;
