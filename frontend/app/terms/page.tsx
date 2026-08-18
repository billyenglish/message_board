"use client";
import Nav from "../components/navigation";
import Footer from "../components/footer";
import ThemeContext from "../currenttheme/themecontext";
import { useContext } from "react";
import HeaderThird from "../subcomponents/privacyheader";
import PrivacyParagraph from "../subcomponents/privacyparagraph";

export default function Terms() {

    const { toggleTheme } = useContext(ThemeContext);

    const month = new Date().toLocaleString("en-US", {
        month: "long",
    });

    const day = new Date().getDay().toString();

    const fullYear = new Date().getFullYear();

    return (
        <section
            className={`
                flex
                flex-col
                items-center
                justify-center
                min-h-screen
                min-w-screen
                ${  toggleTheme
                    ? "bg-(--dark-background) text-(--dark-primary-text)"
                    : "bg-(--light-backround) text-(--light-primary-text)"
                }
        `}>
            <Nav />
            <div
                className="
                    flex
                    flex-col
                    gap-6
                    h-125
                    w-200
                "
            >
                <h2
                    className="
                        text-4xl
                    "
                >
                    Terms of Service
                </h2>

                <p
                    className="
                        text-lg
                    "
                >
                    Last Update: {month} {day}, {fullYear}
                </p>

                <div
                    className="
                        flex
                        flex-col
                        h-125
                        w-200
                        overflow-y-auto
                        gap-6
                    "
                >
                    <PrivacyParagraph
                        text="
                            By using the Board, you agree to these Terms of Service. If
                            you do not agree with these terms, please do not use the application.
                        "
                    />

                    <HeaderThird
                        text="
                            Using the Board
                        "
                    />

                    <PrivacyParagraph
                        text="
                            The Board provides a platform for users to create discussions, share content, and
                            participate in conversations with other users.
                        "
                    />

                    <PrivacyParagraph
                        text="
                            You agree to use the application responsibly and lawfully.
                        "
                    />

                    <HeaderThird
                        text="
                            User Accounts
                        "
                    />

                    <PrivacyParagraph
                        text="
                            You are responsible for maintaining the security of your account
                            and keeping your login credentials private.
                        "
                    />
                </div>
            </div>
            <Footer />
        </section>
    );
};

