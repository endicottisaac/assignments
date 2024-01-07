import React, { useContext } from "react";
import {ThemeContext} from "./themeContext"


function Header() {

    const {color} = useContext(ThemeContext)

    return (
        <nav className={`${color}-theme-nav`}> 
            <h2>Home</h2>
            <h2>About</h2>
            <h2>Contact</h2>
        </nav>
    )
}

export default Header;