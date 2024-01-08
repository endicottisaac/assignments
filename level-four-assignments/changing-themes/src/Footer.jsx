import React, { useContext } from "react";
import {ThemeContext} from "./themeContext"

function Footer(){

    const {color} = useContext(ThemeContext)
    
    return (
        <footer className={`${color}-theme-footer`}> 
            <ul>
                <li>This is a footer</li>
                <li>This site changes themes</li>
                <li>There is a light</li>
                <li>There is a dark</li>                
            </ul>
        </footer>
    )
}

export default Footer;