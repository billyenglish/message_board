"use client";
import Link from "next/link";
import ThemeContext from "../currenttheme/themecontext";
import { useContext } from "react";
import { IoSunnySharp } from "react-icons/io5";
import { FaMoon } from "react-icons/fa6";


export default function Navigation() {

    const { toggleTheme, handleToggleTheme } = useContext(ThemeContext);

    return (
        <nav
            className={`
                absolute
                top-0
                left-0
                flex
                justify-between
                min-w-screen
                p-8
                ${toggleTheme
                    ? "text-[var(--dark-accent)]"
                    : "text-[var(--light-accent)]"
                }
                transition-colors
        `}>
            <div>
                <h1
                    className="nav-logo"
                >
                    <Link href="/">
                        The Board
                    </Link>
                </h1>
            </div>

            <div
                className="
                    flex
                    gap-6
                "
            >
                <button
                    className="
                        cursor-pointer
                        text-2xl
                    "
                    onClick={handleToggleTheme}
                >
                    {
                        toggleTheme ? <IoSunnySharp /> : <FaMoon />
                    }
                </button>

                <button
                    className="
                        cursor-pointer
                    "
                >
                    Login In
                </button>
            </div>
        </nav>
    );
};