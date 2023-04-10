import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {

    const [alignment, setAlignment] = React.useState("home");

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    }

    return(
        <div>
            <nav>
                <a href="/">AP</a>
                <div>
                    <ToggleButtonGroup
                        color="primary"
                        value={alignment}
                        exclusive
                        onChange={handleChange}
                        aria-label="Platform" 
                    >
                        <ToggleButton value="home">
                            <Link to='/'>Home</Link>
                        </ToggleButton>
                        <ToggleButton value="about">
                            <Link to='/about'>About</Link>
                        </ToggleButton>
                        <ToggleButton value="skills">
                            <Link to='skills'>Skills</Link>
                        </ToggleButton>
                        <ToggleButton value="contact">
                            <Link to='contact'>Contact</Link>
                        </ToggleButton>
                    </ToggleButtonGroup>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;