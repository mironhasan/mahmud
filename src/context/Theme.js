import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const themeGet = localStorage.getItem("theme");
    const themeElm = document.querySelector("html");
    const [theme, setTheme] = useState(themeGet ? themeGet : "dark");

    if(theme !== "light") themeElm.classList.replace("light", "dark");
    else themeElm.classList.replace("dark", "light");

    const lightTheme = () => {
        setTheme("light");
        localStorage.setItem("theme", "light");
        themeElm.classList.replace("dark", "light");
    }

    const darkTheme = () => {
        setTheme("dark");
        localStorage.setItem("theme", "dark");
        themeElm.classList.replace("light", "dark");
    }

    const toggleTheme = () => {
        if(theme !== "light") lightTheme();
        else darkTheme();
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            { children }
        </ThemeContext.Provider>
    )
}