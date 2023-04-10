import React from "react";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import SkillsPage from "./components/SkillsPage";
import ContactPage from "./components/ContactPage";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import { Container } from "@mui/material"

const App = () => {
    return(
        <Container fixed>
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
        </Container>
    )
}

export default App;