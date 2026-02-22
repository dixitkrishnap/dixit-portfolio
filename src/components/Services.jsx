export default function Services() {
    const services = [
        {
            name: 'AI System Development',
            icon: './assets/web-icon.png',
            description:
                'Building intelligent systems using machine learning, computer vision, and deep learning concepts.',
            link: '#',
        },
        {
            name: 'Backend Development',
            icon: './assets/mobile-icon.png',
            description:
                'Designing scalable backend architectures using Python, Flask, databases, and REST APIs.',
            link: '#',
        },
        {
            name: 'Full Stack Projects',
            icon: './assets/ui-icon.png',
            description:
                'Developing complete web applications integrating frontend interfaces with powerful backend logic.',
            link: '#',
        },
        {
            name: 'Algorithmic Problem Solving',
            icon: './assets/graphics-icon.png',
            description:
                'Applying data structures and algorithms to design optimized and efficient software solutions.',
            link: '#',
        },
    ];

    return (
        <div id="services" className="w-full px-[12%] py-16 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">
                What I focus on
            </h4>

            <h2 className="text-center text-4xl sm:text-5xl font-Ovo">
                My Expertise
            </h2>

            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-600 dark:text-white/80 leading-relaxed">
                I specialize in building intelligent software systems,
                backend architectures, and full-stack applications that
                combine strong logic, clean design, and real-world impact.
            </p>

            <div className="grid grid-cols-auto gap-6 my-10">
                {services.map((service) => (
                    <div
                        key={service.name}
                        className="border border-gray-300 dark:border-white/30 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white transition"
                    >
                        <img src={service.icon} alt="" className="w-10" />

                        <h3 className="text-lg my-4 text-gray-700 dark:text-white font-semibold">
                            {service.name}
                        </h3>

                        <p className="text-sm text-gray-600 leading-6 dark:text-white/80">
                            {service.description}
                        </p>

                        <a
                            href={service.link}
                            className="flex items-center gap-2 text-sm mt-5 font-medium"
                        >
                            Learn more
                            <img
                                src="./assets/right-arrow.png"
                                alt=""
                                className="w-4"
                            />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}