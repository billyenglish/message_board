"use client";
import Nav from "../components/navigation";
import Footer from "../components/footer";
import { useContext } from "react";
import ThemeContext from "../currenttheme/themecontext";
import PrivacyHeader from "../subcomponents/privacyheader";
import PrivacyParagraph from "../subcomponents/privacyparagraph";

export default function About() {

    const { toggleTheme } = useContext(ThemeContext);

    return (
        <section
            className={`
                min-h-screen
                min-w-screen
                flex
                items-center
                justify-center
                ${
                    toggleTheme
                    ? "bg-(--dark-background) text-(--dark-primary-text)"
                    : "bg-(--light-background) text-(--light-primary-text)"
                }
            `}
        >
            <Nav />
            <div className="
                    h-125
                    w-200
                    flex
                    flex-col
                    gap-6
                    overflow-y-auto
                "
            >
                <h2
                    className="
                        text-4xl
                        text-white
                        tracking-tighter
                        underline
                        underline-offset-8
                        "
                >
                    About the Board
                </h2>

                <PrivacyHeader
                    text="A Place to Share, Discuss, and Connect"
                />

                <p
                    className="
                        font-light
                        tracking-tighter
                ">

                </p>
                <PrivacyParagraph
                    text="
                        The Board is a community-driven discussion platform designed to make it easy to share ideas,
                        ask questions, and participate in meaningful conversations.
                    "
                />

                <p
                    className="
                        font-light
                        tracking-tighter
                    "
                >

                </p>

                <PrivacyParagraph
                    text="
                        Whether you're starting a discussion, sharing something you've learned, or joining a conversation,
                        the Board gives you a simple place to make your voice heard.
                    "
                />

                <PrivacyHeader
                    text="Built for Conversation"
                />

                <PrivacyParagraph
                    text="
                        The Board is centered around straightforward, organized discussions. Users can create posts, share
                        their thoughts, respond to other users, and discover conversations that interest them.
                    "
                />

                <PrivacyHeader
                    text="
                        Create
                    "
                />

                <PrivacyParagraph
                    text="
                        Start a conversation by creating a post and sharing your ideas with the community.
                    "
                />

                <PrivacyHeader
                    text="
                        Discover
                    "
                />

                <PrivacyParagraph
                    text="
                        Explore discussions and find conversations that match your interests.
                    "
                />

                <PrivacyHeader
                    text="
                        Designed With Simplicity in Mind
                    "
                />

                <PrivacyParagraph
                    text="
                        The Board focuses on a clean and straightforward experience. You shouldn't
                        have to navigate through unnecessary features just to find a conversation
                        or share an idea.
                    "
                />

                <PrivacyParagraph
                    text="
                        From browsing discussions to creating an account, each part of the experience
                        is designed to be clear and easy to use.
                    "
                />

                <PrivacyHeader
                    text="
                        Built as a Full-Stack Project
                    "
                />

                <PrivacyParagraph
                    text="
                        The Board was developed as a full-stack web application, combining a modern frontend
                        with a backend API, database, authentication, and user-generated content.
                    "
                />

                <PrivacyParagraph
                    text="
                        The project demonstrates how the different parts of a modern web application work together
                        to create a complete user experience.
                    "
                />

                <PrivacyHeader
                    text="
                        Join the Conversation
                    "
                />

                <PrivacyParagraph
                    text="
                        Have something to say?
                    "
                />

                <PrivacyParagraph
                    text="
                        Create an account, explore the discussions, and start contributing to the Board.
                    "
                />

                <PrivacyParagraph
                    text="
                        Your voice. Your conversations. Your Board.
                    "
                />
            </div>
            <Footer />
        </section>
    );
};

