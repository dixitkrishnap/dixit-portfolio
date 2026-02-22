import { Link } from "react-router-dom";

export default function Ecogram() {
    return (
        <div className="w-full px-[10%] py-16 font-Ovo">

            {/* Back Button */}
            <div className="mb-10">
                <Link
                    to="/"
                    className="text-sm text-purple-600 hover:underline"
                >
                    ← Back to Home
                </Link>
            </div>

            {/* Project Title */}
            <div className="text-center mb-6">
                <h2 className="text-2xl sm:text-4xl font-semibold leading-tight">
                    Ecogram: A Social Media App for Farmers – Empowering Through Connection
                </h2>

                <p className="mt-3 text-gray-600 dark:text-white/80">
                    SDG 8 – Promoting Inclusive and Sustainable Economic Growth
                </p>
            </div>

            {/* Quote */}
            <div className="text-center max-w-5xl mx-auto mb-16">
                <p className="text-lg sm:text-xl font-bold leading-relaxed">
                    “Ecogram addresses these issues by fostering a connected and empowered farming community.”
                </p>
            </div>

            {/* Introduction */}
            <section className="mb-14">
                <h3 className="text-2xl font-semibold mb-4">Introduction</h3>
                <p className="text-gray-700 dark:text-white/80 leading-relaxed">
                    Ecogram serves as a hub for knowledge exchange and community collaboration.
                    It connects farmers and agricultural experts through interactive forums,
                    enabling real-time advice sharing and access to modern farming trends.
                    The platform empowers farmers with actionable insights, optimized resource
                    allocation, and improved access to agricultural markets.
                </p>
            </section>

            {/* Problem Statement */}
            <section className="mb-14">
                <h3 className="text-2xl font-semibold mb-4">Problem Statement</h3>
                <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-white/80">
                    <li>Isolation in traditional farming limiting peer-to-peer learning.</li>
                    <li>Limited access to agricultural experts for critical advice.</li>
                    <li>Slow dissemination of updated agricultural practices.</li>
                    <li>Inefficient resource allocation leading to financial losses.</li>
                    <li>Difficulty in reaching markets and securing fair prices.</li>
                </ul>
            </section>

            {/* Proposed Solution */}
            <section className="mb-14">
                <h3 className="text-2xl font-semibold mb-6">Proposed Solution</h3>

                <div className="grid sm:grid-cols-2 gap-6">

                    <div className="border p-6 rounded-xl shadow-sm">
                        <h4 className="font-semibold mb-2">Real-Time Expert Advice</h4>
                        <p className="text-gray-600 dark:text-white/80">
                            Connect farmers with agricultural specialists instantly.
                        </p>
                    </div>

                    <div className="border p-6 rounded-xl shadow-sm">
                        <h4 className="font-semibold mb-2">Knowledge Exchange</h4>
                        <p className="text-gray-600 dark:text-white/80">
                            Interactive forums for sharing experiences and solutions.
                        </p>
                    </div>

                    <div className="border p-6 rounded-xl shadow-sm">
                        <h4 className="font-semibold mb-2">Market Access & Collaboration</h4>
                        <p className="text-gray-600 dark:text-white/80">
                            Helping farmers connect with buyers and collaborators.
                        </p>
                    </div>

                    <div className="border p-6 rounded-xl shadow-sm">
                        <h4 className="font-semibold mb-2">Community Building</h4>
                        <p className="text-gray-600 dark:text-white/80">
                            Building a sustainable agricultural ecosystem.
                        </p>
                    </div>

                </div>
            </section>

            {/* App Preview */}
            <section className="mb-14">
                <h3 className="text-2xl font-semibold mb-8 text-center">
                    Application Preview
                </h3>

                <div className="flex flex-wrap justify-center gap-10">

                    <div className="text-center">
                        <img src="/assets/eco1.png" className="w-52 rounded-xl shadow-md" />
                        <p className="mt-3 text-sm">Home Page of the Application</p>
                    </div>

                    <div className="text-center">
                        <img src="/assets/eco2.png" className="w-52 rounded-xl shadow-md" />
                        <p className="mt-3 text-sm">Search Page for the Application</p>
                    </div>

                    <div className="text-center">
                        <img src="/assets/eco3.png" className="w-52 rounded-xl shadow-md" />
                        <p className="mt-3 text-sm">Crop Analyse Page of the Application</p>
                    </div>

                    <div className="text-center">
                        <img src="/assets/eco4.png" className="w-52 rounded-xl shadow-md" />
                        <p className="mt-3 text-sm">Crop Analyse Page of the Application</p>
                    </div>

                    <div className="text-center">
                        <img src="/assets/eco5.png" className="w-52 rounded-xl shadow-md" />
                        <p className="mt-3 text-sm">Community Page of the Application</p>
                    </div>

                    <div className="text-center">
                        <img src="/assets/eco6.png" className="w-52 rounded-xl shadow-md" />
                        <p className="mt-3 text-sm">Settings & Customization Page</p>
                    </div>

                </div>
            </section>

        </div>
    );
}