import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
    render() {
        return(
            <div>
                <nav>
                    <a href="/">AP</a>
                    <div>
                        <button>
                            <Link to='/'>Home</Link>
                        </button>
                        <button>
                            <Link to='/about'>About</Link>
                        </button>
                        <button>
                            <Link to='skills'>Skills</Link>
                        </button>
                        <button>
                            <Link to='contact'>Contact</Link>
                        </button>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar;