import { createContext, useContext, useState } from "react";

const ThemeContext = createContext()
const useTheme = () => useContext(ThemeContext)

const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false)


    const toggleDarkMode = () => {
        setIsDarkMode((prev) => !prev)
    }

    return (
        <ThemeContext.Provider value={{isDarkMode,toggleDarkMode}}>
            {children}
        </ThemeContext.Provider>
    )
}

export{useTheme,ThemeProvider}