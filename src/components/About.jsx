export default function About() {
    const tools = [
        { name: 'vscode', icon: './assets/vscode.png' },
        { name: 'firebase', icon: './assets/firebase.png' },
        { name: 'mongodb', icon: './assets/mongodb.png' },
        { name: 'figma', icon: './assets/figma.png' },
        { name: 'git', icon: './assets/git.png' },
    ];

    const data = [
        {
            name: 'Languages',
            icon1: './assets/code-icon.png',
            icon2: './assets/code-icon-dark.png',
            description: 'C, Python, Java, HTML, CSS, JavaScript',
        },
        {
            name: 'Core Areas',
            icon1: './assets/edu-icon.png',
            icon2: './assets/edu-icon-dark.png',
            description: 'Data Structures, AI Systems, Backend Development',
        },
        {
            name: 'Projects',
            icon1: './assets/project-icon.png',
            icon2: './assets/project-icon-dark.png',
            description: 'Built 4+ real-world academic and AI projects',
        },
    ];

    return (
        <div id="about" className="w-full px-[12%] py-16 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
            <h2 className="text-center text-4xl sm:text-5xl font-Ovo">About Me</h2>

            <div className="flex w-full flex-col lg:flex-row items-center gap-16 my-16">
                
                {/* Profile Image Only (No Circular Badge) */}
                <div className="max-w-max mx-auto">
                    <img
                        src='./assets/user-image.png'
                        alt="Dixit Krishna"
                        className="w-64 sm:w-80 rounded-3xl shadow-lg"
                    />
                </div>

                <div className="flex-1">
                    <p className="mb-10 max-w-2xl font-Ovo text-gray-600 dark:text-white/80 leading-relaxed">
                        Motivated and enthusiastic Computer Science student with solid
                        problem-solving abilities and real experience tackling technical
                        challenges. I am passionate about AI systems, backend development,
                        and building scalable software solutions.
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
                        {data.map((item) => (
                            <li
                                key={item.name}
                                className="border border-gray-300 dark:border-white/30 rounded-xl p-6 hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover/50 transition"
                            >
                                <img src={item.icon1} alt="" className="w-7 mt-3 dark:hidden" />
                                <img src={item.icon2} alt="" className="w-7 mt-3 hidden dark:block" />

                                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                                    {item.name}
                                </h3>

                                <p className="text-gray-600 text-sm dark:text-white/80">
                                    {item.description}
                                </p>
                            </li>
                        ))}
                    </ul>

                    <h4 className="my-6 text-gray-700 font-Ovo dark:text-white/80">
                        Tools I Use
                    </h4>

                    <ul className="flex items-center gap-3 sm:gap-5">
                        {tools.map((tool) => (
                            <li
                                key={tool.name}
                                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-300 dark:border-white/30 rounded-lg hover:-translate-y-1 duration-500 transition"
                            >
                                <img src={tool.icon} alt={tool.name} className="w-5 sm:w-7" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}