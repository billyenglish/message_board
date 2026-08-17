"use client";
import { ReactNode, useState } from "react";
import ThemeContext from "./themecontext";

type ThemeProviderProps = {
    children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {

    const [toggleTheme, setToggleTheme] = useState(true);

    const handleToggleTheme = () => {
        setToggleTheme((prevTheme) => !prevTheme);
    }

    return (
        <ThemeContext.Provider
            value={{
                toggleTheme,
                handleToggleTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}