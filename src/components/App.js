import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import SkillsPage from "./SkillsPage";
import ContactPage from "./ContactPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = function() {
    return(
        <Router>
            <div>
                <header>
                    <nav>
                        <ul>
                            <li>
                                <Link>Home</Link>
                            </li>
                            <li>
                                <Link>About</Link>
                            </li>
                            <li>
                                <Link>Skills</Link>
                            </li>
                            <li>
                                <Link>Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route>
                        <HomePage/>
                    </Route>
                    <Route>
                        <AboutPage/>
                    </Route>
                    <Route>
                        <SkillsPage/>
                    </Route>
                    <Route>
                        <ContactPage/>
                    </Route>                 
                </Switch>
            </div>
        </Router>
    )
}

export default App;