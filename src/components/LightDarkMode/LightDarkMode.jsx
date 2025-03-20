import React from "react";
import useLocalStorage from "./useLocalStorage";
import "./theme.css"
export default function LightDarkMode() {
    const [theme, setTheme] = useLocalStorage("theme", "Dark");
    return (
        <div id="LightDark" data-theme={theme}>
            <h2>Light Dark toggle with Local Storage to save</h2>
            <button onClick={() => setTheme(theme === "Light" ? "Dark" : "Light")}>
                Toggle to {theme === "Light" ? "Dark" : "Light"} Mode
            </button>
        </div>
    );
}