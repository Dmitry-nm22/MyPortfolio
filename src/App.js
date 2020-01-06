import React from 'react';
import './App.css';
import Main from "./Main/Main";
import Services from "./Services/Services";
import Projects from "./Projects/Projects";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";
import NavMenu from "./NavMenu/NavMenu";
import {BrowserRouter, Route} from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <div className="portfolio">
                  <NavMenu/>
                  <Main/>
                  <Services/>
                  <Projects/>
                  <Contacts/>
                  <Footer/>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
