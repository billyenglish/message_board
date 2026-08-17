"use client";
import Link from "next/link";

export default function Footer() {

    const footerMenuList = [
        { title: 'About', link: '', id: 0 },
        { title: 'Privacy', link: '', id: 1 },
        { title: 'Terms', link: '', id: 2 },
        { title: 'Github', link: '', id: 3 }
    ];

    return (
        <footer
            className="
                absolute
                bottom-0
                left-0
                flex
                justify-around
                min-w-screen
                p-4
            "
        >
            <div>
                <h4>
                    <Link href="/">
                        The Board
                    </Link>
                </h4>
            </div>

            <div>
                <ul
                    className="
                        flex
                        gap-14
                    "
                >
                    {
                        footerMenuList.map((footerList) => (
                            <li key={footerList.id}>
                                <Link href={footerList.link}>
                                    {footerList.title}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div>
                <h4>
                    &copy; {new Date().getFullYear()} The Board
                </h4>
            </div>
        </footer>
    );
};

