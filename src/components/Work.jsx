import { Link } from "react-router-dom";

export default function Work() {
    const work = [
        {
            name: "AI Proctoring System",
            icon: "./assets/work-1.png",
            description: "AI / Computer Vision",
            link: "/ai-proctoring",
        },
        {
            name: "Ecogram Platform",
            icon: "./assets/work-2.png",
            description: "Web Application",
            link: "/ecogram",
        },
        {
            name: "Healthcare Early Warning System",
            icon: "./assets/work-3.png",
            description: "AI / Healthcare Analytics",
            link: "/healthcare-system",
        },
        {
            name: "Reservation Systems",
            icon: "./assets/work-4.png",
            description: "DBMS Project",
            link: "#",
        },
    ];

    return (
        <div id="work" className="w-full px-[12%] py-16 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">
                My Projects
            </h4>

            <h2 className="text-center text-4xl sm:text-5xl font-Ovo">
                Featured Work
            </h2>

            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-600 dark:text-white/80 leading-relaxed">
                A selection of projects showcasing my work in AI systems,
                backend development, and full-stack software engineering.
            </p>

            <div className="grid grid-cols-auto my-10 gap-5">
                {work.map((item) => (
                    <div key={item.name}>
                        {item.link !== "#" ? (
                            <Link to={item.link}>
                                <Card item={item} />
                            </Link>
                        ) : (
                            <Card item={item} />
                        )}
                    </div>
                ))}
            </div>

            <div className="w-max flex items-center justify-center gap-2 text-gray-700 border border-gray-300 dark:border-white/25 rounded-full py-2 px-8 mx-auto my-20 dark:text-white">
                More projects coming soon...
            </div>
        </div>
    );
}

function Card({ item }) {
    return (
        <div
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group overflow-hidden"
            style={{ backgroundImage: `url(${item.icon})` }}
        >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 shadow-md">
                <div>
                    <h2 className="font-semibold">
                        {item.name}
                    </h2>
                    <p className="text-sm text-gray-700">
                        {item.description}
                    </p>
                </div>

                <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                    <img
                        src="./assets/send-icon.png"
                        alt=""
                        className="w-5"
                    />
                </div>
            </div>
        </div>
    );
}