"use client";
import Nav from "../components/navigation";
import Footer from "../components/footer";
import ThemeContext from "../currenttheme/themecontext";
import { useContext } from "react";
import HeaderThird from "../subcomponents/privacyheader";
import PrivacyParagraph from "../subcomponents/privacyparagraph";
import CreateList from "../subcomponents/createlist";

const currentList1 = [
    { title: 'Harasses or threatens another person', id: 0 },
    { title: 'Contains malicious software', id: 1 },
    { title: 'Violates applicable laws', id: 2 },
    { title: 'Impersonates another person', id: 3 },
    { title: "Contains another person's private information", id: 4 },
    { title: 'Intentionally disrupts the application', id: 5 }
];

const currentList2 = [
    { title: 'Gain unauthorized access to another account', id: 0 },
    { title: 'Circumvent authentication or security controls', id: 1 },
    { title: 'Exploit vulnerabilities', id: 2 },
    { title: 'Abuse automated requests', id: 3 },
    { title: "Disrupt the application's services", id: 4 },
    { title: 'Access data that does not belong to you', id: 5 },
];

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
                            You are responsible for maintaining the security of your account and keeping your
                            login credentials private.
                        "
                    />

                    <PrivacyParagraph
                        text="
                            You are responsible for activity performed through your account.
                        "
                    />

                    <HeaderThird
                        text="
                            User Content
                        "
                    />

                    <PrivacyParagraph
                        text="
                            You are responsible for posts, comments, and other content you submit.
                        "
                    />

                    <PrivacyParagraph
                        text="
                            You agree not to publish content that:
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
                                    id={items.id}
                                />
                            ))
                        }
                    </div>

                    <HeaderThird
                        text="
                            Prohibited Activity
                        "
                    />

                    <PrivacyParagraph
                        text="
                            You may not attempt to:
                        "
                    />

                    <div
                        className="
                            pl-10
                        "
                    >
                        {
                            currentList2.map((items) => (
                                <CreateList
                                    items={items.title}
                                    id={items.id}
                                    key={items.id}
                                />
                            ))
                        }
                    </div>

                    <HeaderThird
                        text="
                            Content Moderation
                        "
                    />

                    <PrivacyParagraph
                        text="
                            Content that violates these terms may be removed. Accounts involved in serious
                            or repeated violations may be restricted or terminated.
                        "
                    />

                    <HeaderThird
                        text="
                            Availability
                        "
                    />

                    <PrivacyParagraph
                        text="
                            The Board is provided as a development and portfolio project. Features may change,
                            become unavailable, or be removed without notice.
                        "
                    />

                    <HeaderThird
                        text="
                            Changes to These Terms
                        "
                    />

                    <PrivacyParagraph
                        text="
                            These Terms of Service may be updated as the application develops. Continued use of
                            the Board after changes are posted indicates acceptance of the updated terms.
                        "
                    />

                    <HeaderThird
                        text="
                            Contact
                        "
                    />

                    <PrivacyParagraph
                        text="
                            Questions regarding these Terms of Service should be directed to the project owner
                            through the contact information provided by the application.
                        "
                    />

                    <PrivacyParagraph
                        text="
                            These terms are provided as a general project template and are not legal advice.
                        "
                    />
                </div>
            </div>
            <Footer />
        </section>
    );
};

