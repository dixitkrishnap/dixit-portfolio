export default function About() {
    const tools = [
        { name: "VS Code", icon: "./assets/vscode.png" },
        { name: "Firebase", icon: "./assets/firebase.png" },
        { name: "MongoDB", icon: "./assets/mongodb.png" },
        { name: "Git", icon: "./assets/git.png" },
        { name: "Figma", icon: "./assets/figma.png" },
    ];

    const highlights = [
        {
            title: "Programming",
            icon1: "./assets/code-icon.png",
            icon2: "./assets/code-icon-dark.png",
            description:
                "C, Python, Java, JavaScript with strong foundation in OOP and problem solving.",
        },
        {
            title: "Core Expertise",
            icon1: "./assets/edu-icon.png",
            icon2: "./assets/edu-icon-dark.png",
            description:
                "Data Structures & Algorithms, AI Systems, Backend Development, Machine Learning.",
        },
        {
            title: "Experience",
            icon1: "./assets/project-icon.png",
            icon2: "./assets/project-icon-dark.png",
            description:
                "3+ internships in Data Science, Java Development, and DSA with real-world system implementations.",
        },
    ];

    return (
        <div id="about" className="w-full px-[12%] py-20 scroll-mt-20">

            <h4 className="text-center mb-2 text-lg font-Ovo">
                Introduction
            </h4>

            <h2 className="text-center text-4xl sm:text-5xl font-Ovo">
                About Me
            </h2>

            <div className="flex w-full flex-col lg:flex-row items-center gap-16 my-16">

                {/* Profile Image */}
                <div className="max-w-max mx-auto">
                    <img
                        src="./assets/user-image.png"
                        alt="Dixit Krishna"
                        className="w-64 sm:w-80 rounded-3xl shadow-xl"
                    />
                </div>

                {/* Content */}
                <div className="flex-1">

                    <p className="mb-8 max-w-2xl font-Ovo text-gray-600 dark:text-white/80 leading-relaxed">
                        I am a Computer Science student and aspiring AI Engineer
                        passionate about building intelligent, scalable, and impactful
                        software systems. With hands-on experience through multiple
                        internships and international project presentations,
                        I specialize in combining strong Data Structures knowledge
                        with real-world AI and backend development.
                    </p>

                    <p className="mb-10 max-w-2xl font-Ovo text-gray-600 dark:text-white/80 leading-relaxed">
                        My work spans AI-powered surveillance systems, healthcare
                        early warning models, and community-driven platforms like
                        Ecogram. I aim to design solutions that align with
                        Sustainable Development Goals and create meaningful
                        technological impact.
                    </p>

                    {/* Highlights */}
                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl">
                        {highlights.map((item) => (
                            <li
                                key={item.title}
                                className="border border-gray-300 dark:border-white/30 rounded-xl p-6 hover:bg-lightHover hover:-translate-y-1 duration-500 transition dark:hover:bg-darkHover/50"
                            >
                                <img
                                    src={item.icon1}
                                    alt=""
                                    className="w-7 mt-3 dark:hidden"
                                />
                                <img
                                    src={item.icon2}
                                    alt=""
                                    className="w-7 mt-3 hidden dark:block"
                                />

                                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                                    {item.title}
                                </h3>

                                <p className="text-gray-600 text-sm dark:text-white/80">
                                    {item.description}
                                </p>
                            </li>
                        ))}
                    </ul>

                    {/* Tools */}
                    <h4 className="my-8 text-gray-700 font-Ovo dark:text-white/80">
                        Tools & Technologies
                    </h4>

                    <ul className="flex items-center gap-4 flex-wrap">
                        {tools.map((tool) => (
                            <li
                                key={tool.name}
                                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-300 dark:border-white/30 rounded-lg hover:-translate-y-1 duration-500 transition"
                            >
                                <img
                                    src={tool.icon}
                                    alt={tool.name}
                                    className="w-5 sm:w-7"
                                />
                            </li>
                        ))}
                    </ul>

                </div>
            </div>
        </div>
    );
}