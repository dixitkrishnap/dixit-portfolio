import { useEffect, useRef } from "react";

export default function Navbar() {
    const sideMenuRef = useRef();
    const navRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = "translateX(-16rem)";
    };

    const closeMenu = () => {
        sideMenuRef.current.style.transform = "translateX(16rem)";
    };

    const toggleTheme = () => {
        document.documentElement.classList.toggle("dark");

        if (document.documentElement.classList.contains("dark")) {
            localStorage.theme = "dark";
        } else {
            localStorage.theme = "light";
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                navRef.current.classList.add(
                    "bg-white",
                    "bg-opacity-70",
                    "backdrop-blur-lg",
                    "shadow-sm",
                    "dark:bg-darkTheme"
                );
            } else {
                navRef.current.classList.remove(
                    "bg-white",
                    "bg-opacity-70",
                    "backdrop-blur-lg",
                    "shadow-sm",
                    "dark:bg-darkTheme"
                );
            }
        };

        window.addEventListener("scroll", handleScroll);

        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            document.documentElement.classList.add("dark");
        }

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav
                ref={navRef}
                className="w-full fixed top-0 left-0 px-6 lg:px-12 py-4 flex items-center justify-between z-50"
            >
                {/* Logo */}
                <a href="#top" className="flex-shrink-0">
                    <img
                        src="./assets/logo.png"
                        alt="Logo"
                        className="w-28 dark:hidden"
                    />
                    <img
                        src="./assets/logo_dark.png"
                        alt="Logo"
                        className="w-28 hidden dark:block"
                    />
                </a>

                {/* Center Menu */}
                <ul className="hidden md:flex items-center gap-8 font-Ovo">
                    <li><a href="#top">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Expertise</a></li>
                    <li><a href="#work">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

                {/* Right Section */}
                <div className="flex items-center gap-6">

                    {/* GitHub */}
                    <a
                        href="https://github.com/dixitkrishnap"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-Ovo hover:text-purple-500 transition"
                    >
                        GitHub
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/dixit-krishna-p-24289931a/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-Ovo hover:text-purple-500 transition"
                    >
                        LinkedIn
                    </a>

                    {/* Theme Toggle */}
                    <button onClick={toggleTheme}>
                        <img
                            src="./assets/moon_icon.png"
                            alt=""
                            className="w-5 dark:hidden"
                        />
                        <img
                            src="./assets/sun_icon.png"
                            alt=""
                            className="w-5 hidden dark:block"
                        />
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        onClick={openMenu}
                    >
                        <img
                            src="./assets/menu-black.png"
                            alt=""
                            className="w-6 dark:hidden"
                        />
                        <img
                            src="./assets/menu-white.png"
                            alt=""
                            className="w-6 hidden dark:block"
                        />
                    </button>
                </div>

                {/* Mobile Menu */}
                <ul
                    ref={sideMenuRef}
                    className="flex md:hidden flex-col gap-6 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-white dark:bg-darkTheme transition duration-500 font-Ovo"
                >
                    <div
                        className="absolute right-6 top-6"
                        onClick={closeMenu}
                    >
                        ✕
                    </div>

                    <li><a href="#top" onClick={closeMenu}>Home</a></li>
                    <li><a href="#about" onClick={closeMenu}>About</a></li>
                    <li><a href="#services" onClick={closeMenu}>Expertise</a></li>
                    <li><a href="#work" onClick={closeMenu}>Projects</a></li>
                    <li><a href="#contact" onClick={closeMenu}>Contact</a></li>

                    <hr />

                    <li>
                        <a
                            href="https://github.com/dixitkrishnap"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://www.linkedin.com/in/dixit-krishna-p-24289931a/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
}