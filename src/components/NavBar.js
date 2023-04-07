import React from "react";

class NavBar extends React.Component {
    render() {
        return(
            <div>
                <div className="ui inverted segment ">
                    <div className="ui inverted secondary menu ">
                        <a className="active item" href="#">
                            <i className="ui home icon circular inverted teals"></i>HOME
                        </a>
                        <a className="item" href="#">
                            <i className="ui code branch icon circular inverted teals"></i>SKILLS
                        </a>
                        <a className="item" href="#">
                            <i className="ui user icon circular inverted teals"></i>ABOUT
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar;