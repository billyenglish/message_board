"use client";
import Nav from "../components/navigation";
import Footer from "../components/footer";
import ThemeContext from "../currenttheme/themecontext";
import { useContext } from "react";
import HeaderThird from "../subcomponents/privacyheader";
import PrivacyParagraph from "../subcomponents/privacyparagraph";
import CreateList from "../subcomponents/createlist";
import Head from "next/head";

const currentList1 = [
    { title: 'Username', id: 0 },
    { title: 'Email address', id: 1 },
    { title: 'Account credentials', id: 2 },
    { title: 'Profile information', id: 3 },
    { title: 'Posts and comments you create', id: 4 },
    { title: 'Basic information required to maintain your session', id: 5 },
];

const currentList2 = [
    { title: 'Create and manage your account', id: 0 },
    { title: 'Authenticate your identity', id: 1 },
    { title: 'Display your profile and user-generated content', id: 2 },
    { title: 'Allow you to create posts and comments', id: 3 },
    { title: 'Maintain and improve the application', id: 4 },
    { title: 'Protect the application against unauthorized activity', id: 5 },
]

export default function Privacy() {

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
                min-h-screen
                min-w-screen
                items-center
                justify-center
                gap-8
                ${
                    toggleTheme
                    ? "bg-(--dark-background) text-(--dark-primary-text)"
                    : "bg-(--light-background) text-(--light-primary-text)"
                }
        `}>
            <Nav />
            <div
                className="
                    flex
                    flex-col
                    h-125
                    w-200
                    gap-6
                "
            >
                <h2
                    className="
                        text-4xl
                        text-white
                        tracking-tighter
                    "
                >
                    Privacy Policy
                </h2>

                <p>Last Update: {month} {day}, {fullYear}</p>

                <div
                    className="
                        flex
                        flex-col
                        gap-6
                        p-6
                        h-125
                        w-200
                        overflow-y-auto

                    "
                >
                    <PrivacyParagraph
                        text="
                            The Board respects your privacy. This Privacy Policy explains what information may be
                            collected when you use the application and how that information is used."
                    />

                    <HeaderThird
                        text="
                            Information We Collect
                        "
                    />

                    <PrivacyParagraph
                        text="
                            When you create and use an account, the application may collect:
                        "
                    />

                    <div
                        className="
                            pl-10
                        "
                    >
                        {
                            currentList1.map((items) => (
                                <CreateList
                                    items={items.title}
                                    key={items.id}
                                />
                            ))
                        }
                    </div>

                    <HeaderThird
                        text="
                            How We Use Your Information
                        "
                    />

                    <PrivacyParagraph
                        text="
                            Information collected through the Board may be used to:
                        "
                    />

                    <div className="pl-10">
                        {
                            currentList2.map((items) => (
                                <CreateList
                                    items={items.title}
                                    key={items.id}
                                />
                            ))
                        }
                    </div>

                    <HeaderThird
                        text="
                            User Content
                        "
                    />

                    <PrivacyParagraph
                        text="
                            Posts and comments submitted to the Board may be visible to other users. Do not publish passwords,
                            financial information, government identification, or other sensitive personal information.
                        "
                    />

                    <HeaderThird
                        text="
                            Cookies and Authentication
                        "
                    />

                    <PrivacyParagraph
                        text="
                            The application may use cookies, tokens, or similar technologies to maintain authenticated sessions
                            and provide a secure user experience.
                        "
                    />

                    <HeaderThird
                        text="
                            Data Security
                        "
                    />

                    <PrivacyParagraph
                        text="
                            Reasonable technical measures are used to protect account information and application data. However
                            no online service can guarantee complete security.
                        "
                    />

                    <HeaderThird
                        text="
                            Third-Party Services
                        "
                    />

                    <PrivacyParagraph
                        text="
                            The Board may rely on third-party services for hosting, databases, authentication, analytics, or other
                            infrastructure. Those services may process information according to their own privacy policies.
                        "
                    />

                    <HeaderThird
                        text="
                            Data Retention
                        "
                    />

                    <PrivacyParagraph
                        text="
                            Information may be retained for as long as necessary to operate and maintain your account and the
                            application.
                        "
                    />

                    <HeaderThird
                        text="
                            Changes to This Policy
                        "
                    />

                    <PrivacyParagraph
                        text="
                            This Privacy Policy may be updated as the Board evolves. Changes will be reflected on this page.
                        "
                    />

                    <HeaderThird
                        text="
                            Contact
                        "
                    />

                    <PrivacyParagraph
                        text="
                            If you have questions about this Privacy Policy, please contact the project owner through the contact
                            information provided by the application.
                        "
                    />

                    <PrivacyParagraph
                        text="
                            The Board is a portfolio project and may be modified, reset, or discontinued as development continues.
                        "
                    />
                </div>
            </div>
            <Footer />
        </section>
    );
};