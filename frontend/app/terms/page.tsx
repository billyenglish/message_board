"use client";
import Nav from "../components/navigation";
import Footer from "../components/footer";
import ThemeContext from "../currenttheme/themecontext";
import { useContext } from "react";

export default function Terms() {

    const { toggleTheme } = useContext(ThemeContext);

    return (
        <section
            className={`
                min-h-screen
                min-w-screen
                ${  toggleTheme
                    ? "bg-(--dark-background) text-(--primary-dark-text"
                    : "bg-(--light-backround)"
                }
        `}>
            <Nav />
            <h2>
                Terms
            </h2>
            <Footer />
        </section>
    );
};

