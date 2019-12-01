import React from 'react';
import   './BurgerMenu.css';




class  BurgerMenu extends React.Component {
    state ={
        activeForA: false,
        activeForNav: false
    };


    classForA = (e) => {
        e.preventDefault()
        if(this.state.activeForA === false){
            this.setState({
                activeForA: true,
                activeForNav: true
            })
        }else{
            this.setState({
                activeForA: false,
                activeForNav: false

            })
        }


    };

    // classForNav = (e) => {
    //     e.preventDefault()
    //     if(this.state.activeForNav === false){
    //         this.setState({
    //             activeForNav: true
    //         })
    //     }else{
    //         this.setState({
    //             activeForNav: false
    //         })
    //     }
    //
    //
    // };

 render() {
        let classForA = this.state.active ? 'menu-btn menu-btn_active' : 'menu-btn' ;
        let classForNav = this.state.activeForNav ? 'menu-nav menu-nav_active' : 'menu-nav' ;
     return (


         <div className="section">
             <div className="menu-block">
                 <nav className={classForNav} >
                     <a href="#">Main</a>
                     <a href="#">Portfolio</a>
                     <a href="#">About</a>
                     <a href="#">Contacts</a>
                 </nav>

                 <a href='#' className={classForA} onClick={this.classForA} >
                     <span></span>
                 </a>

             </div>
         </div>

         // <div className='section' >
         //     <a href='#' className={classForA} onClick={this.classForA} >
         //         <span></span>
         //     </a>
         // </div>
     );
 }
}

export default BurgerMenu;
