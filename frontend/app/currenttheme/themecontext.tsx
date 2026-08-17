"use client";
import { createContext } from "react";

type ThemeContextType = {
    toggleTheme: boolean,
    handleToggleTheme: () => void,
}

const ThemeContext = createContext<ThemeContextType>({
    toggleTheme: true,
    handleToggleTheme: () => {},
});

export default ThemeContext;