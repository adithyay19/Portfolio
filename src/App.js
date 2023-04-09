import React from "react";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import SkillsPage from "./components/SkillsPage";
import ContactPage from "./components/ContactPage";
import { BrowserRouter, Routes, Route, Navlink} from "react-router-dom";
import NavBar from "./components/NavBar";

const App = function() {
    return(
        <BrowserRouter>
            <div>
                <header>
                    <NavBar/>
                </header>
                <Routes>
                    <Route exact path="/" Component={HomePage}/>       
                    <Route path="/about" Component={AboutPage}/> 
                    <Route path="/skills" Component={SkillsPage}/> 
                    <Route path="/contact" Component={ContactPage}/>           
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;