"use client";
import Nav from "./navigation";
import Footer from "./footer";
import { useContext } from "react";
import ThemeContext from "../currenttheme/themecontext";

export default function Homepage() {

    const { toggleTheme } = useContext(ThemeContext);

    return (
        <section
            className={`
                min-h-screen
                flex
                flex-col
                items-center
                justify-center
                ${
                    toggleTheme
                    ? "bg-[var(--dark-background)] text-[var(--dark-primary-text)]"
                    : "bg-[var(--light-background)] text-[var(--light-primary-text)]"
                }
        `}>
            <Nav />
            <div
                className="
                    flex
                    flex-col
                    items-center
                    justify-center
                    gap-4
                "
            >
                <div>
                    <h2
                        className={`
                            text-5xl
                            tracking-tighter

                            "
                        `}>
                        The Board
                    </h2>
                </div>
                <p>{toggleTheme}</p>
                <div
                    className="
                        flex
                        flex-col
                        items-center
                        justify-center
                        min-w-full
                    "
                >
                    <h3
                        className={`
                            text-center
                            text-lg
                            ${ toggleTheme
                                ? "text-[var(--dark-secondary-text)]"
                                : "text-[var(--light-secondary-text)]" }
                    `}>
                        Connect. Discuss. Share.
                    </h3>
                </div>
                <div
                    className="
                        flex
                        flex-col
                        gap-2
                    "
                >
                    <h4
                        className={`
                            text-2xl
                            tracking-tighter
                            ${toggleTheme
                                ? "text-[var(--dark-accent)]"
                                : "text-[var(--light-accent)]" }
                    `}>
                        Welcome to The Board
                    </h4>
                    <p
                        className="
                            text-lg
                            tracking-tighter
                        "
                    >
                        A place to ask questions share ideas, and join conversations.
                    </p>
                </div>
                <div
                    className="
                        flex
                        gap-4
                    "
                >
                    <button
                        className={`
                            flex
                            items-center
                            h-8
                            p-1
                            hover:underline
                            hover:underline-offset-4
                            ${toggleTheme
                                ? "hover:text-[var(--dark-accent)]"
                                : "hover:text-[var(--light-accent)]"
                            }
                            cursor-pointer
                            text-lg
                            font-normal
                            tracking-wide
                    `}>
                        Get Started
                    </button>
                </div>
            </div>
            <Footer />
        </section>
    );
};