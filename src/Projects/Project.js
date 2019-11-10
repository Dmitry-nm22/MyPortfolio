import React from 'react';
import styles from './Project.module.css';
import logo from ".././img/work.jpg"


function Project() {
  return (

      <div className={styles.Container}>
          <img src={logo}/>
      </div>


  );
}

export default Project;
