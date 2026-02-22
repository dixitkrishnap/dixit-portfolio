export default function Header() {
    return (
        <div
            id="top"
            className="w-11/12 max-w-4xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-6"
        >
            {/* Profile Image */}
            <img
                src="./assets/profile-img.png"
                alt="Dixit Krishna"
                className="rounded-full w-32 sm:w-40 shadow-lg"
            />

            {/* Greeting */}
            <h3 className="flex items-end gap-2 text-xl md:text-2xl font-Ovo">
                Hi! I’m Dixit Krishna
                <img src="./assets/hand-icon.png" alt="" className="w-6 mb-1" />
            </h3>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-[60px] leading-tight font-Ovo">
                Computer Science student building
                <br className="hidden sm:block" />
                intelligent software systems.
            </h1>

            {/* Short Description */}
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-white/80 font-Ovo text-base sm:text-lg">
                Motivated and enthusiastic developer passionate about AI systems,
                backend engineering, and solving real-world problems through clean,
                scalable code.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                <a
                    href="#contact"
                    className="px-10 py-2.5 rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 shadow-md hover:scale-105 transition duration-300"
                >
                    Contact me
                    <img
                        src="./assets/right-arrow-white.png"
                        alt=""
                        className="w-4"
                    />
                </a>

                {/* ✅ Resume Download Button */}
                <a
                    href="/resume.pdf"
                    download="Dixit_Krishna_Resume.pdf"
                    className="px-10 py-2.5 rounded-full border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover flex items-center gap-2 bg-white dark:bg-transparent dark:text-white transition duration-300"
                >
                    Download Resume
                    <img
                        src="./assets/download-icon.png"
                        alt=""
                        className="w-4 dark:invert"
                    />
                </a>
            </div>
        </div>
    );
}