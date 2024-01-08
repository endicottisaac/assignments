import React, {useContext} from "react";
import {ThemeContext} from "./themeContext"

function Content(){

    const {color} = useContext(ThemeContext)
    const {toggleTheme} = useContext(ThemeContext)
    return (
        <main className={`${color}-theme-main`}> 
            <h1>Changing Themes using Context</h1>
            <h3>Use this button to change the theme</h3>
            <button onClick={toggleTheme}>Change Theme</button>
        </main>
    )
}

export default Content;