export default function Footer() {
    return (
        <div className="mt-20">
            {/* Top Section */}
            <div className="text-center">

                <a href="#top">
                    <img
                        src="/assets/logo.png"
                        alt="Logo"
                        className="w-36 mx-auto mb-2 dark:hidden"
                    />
                    <img
                        src="/assets/logo_dark.png"
                        alt="Logo"
                        className="w-36 mx-auto mb-2 hidden dark:block"
                    />
                </a>

                <div className="w-max flex items-center gap-2 mx-auto">
                    <img
                        src="./assets/mail_icon.png"
                        alt=""
                        className="w-5 dark:hidden"
                    />
                    <img
                        src="./assets/mail_icon_dark.png"
                        alt=""
                        className="w-5 hidden dark:block"
                    />

                    <a href="mailto:dixitkrishnap@gmail.com">
                        dixitkrishnap@gmail.com
                    </a>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-3">
                <p>
                    © {new Date().getFullYear()} Dixit Krishna. All rights reserved.
                </p>

                <ul className="flex items-center gap-8 justify-center mt-4 sm:mt-0">
                    
                    <li>
                        <a
                            href="https://github.com/dixitkrishnap"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-purple-500 transition"
                        >
                            GitHub
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://www.linkedin.com/in/dixit-krishna-p-24289931a/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-purple-500 transition"
                        >
                            LinkedIn
                        </a>
                    </li>

                </ul>
            </div>
        </div>
    );
}