import React from 'react';
import './App.css';
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";


function App() {
  return (
    <div className="App">
        <div className="portfolio">
            <Main/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>
    </div>
  );
}

export default App;
