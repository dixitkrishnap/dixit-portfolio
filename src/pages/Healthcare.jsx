import { Link } from "react-router-dom";

export default function Healthcare() {
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

            {/* Title */}
            <div className="text-center mb-6">
                <h2 className="text-2xl sm:text-4xl font-semibold">
                    Healthcare Early Warning & Presentation System
                </h2>

                <p className="mt-3 text-gray-600 dark:text-white/80">
                    AI-powered Predictive Monitoring for Preventive Healthcare
                </p>
            </div>

            {/* Quote */}
            <div className="text-center max-w-5xl mx-auto mb-16">
                <p className="text-lg sm:text-xl font-bold leading-relaxed">
                    “Leveraging artificial intelligence to detect early health risks 
                    and enable timely medical intervention.”
                </p>
            </div>

            {/* SDG */}
            <section className="mb-14">
                <h3 className="text-2xl font-semibold mb-4">
                    Sustainable Development Goal
                </h3>
                <p className="text-gray-700 dark:text-white/80 leading-relaxed">
                    This project aligns with <strong>SDG 3 – Good Health and Well-being</strong>,
                    focusing on improving early detection systems and strengthening
                    preventive healthcare infrastructure using AI-driven analytics.
                </p>
            </section>

            {/* Overview */}
            <section className="mb-14">
                <h3 className="text-2xl font-semibold mb-4">
                    Project Overview
                </h3>
                <p className="text-gray-700 dark:text-white/80 leading-relaxed">
                    The Healthcare Early Warning System is an AI-driven platform
                    designed to monitor patient health indicators and predict
                    potential medical risks before critical conditions arise.
                    By integrating predictive analytics and real-time monitoring,
                    the system enhances proactive healthcare response.
                </p>
            </section>

            {/* Problem Statement */}
            <section className="mb-14">
                <h3 className="text-2xl font-semibold mb-4">
                    Problem Statement
                </h3>
                <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-white/80">
                    <li>Delayed detection of high-risk health conditions.</li>
                    <li>Manual monitoring prone to oversight.</li>
                    <li>Lack of predictive systems in preventive healthcare.</li>
                    <li>Increasing burden on healthcare professionals.</li>
                </ul>
            </section>

            {/* Solution */}
            <section className="mb-14">
                <h3 className="text-2xl font-semibold mb-6">
                    Proposed Solution
                </h3>

                <div className="grid sm:grid-cols-2 gap-6">
                    <div className="border p-6 rounded-xl shadow-sm">
                        <h4 className="font-semibold mb-2">
                            AI Risk Prediction
                        </h4>
                        <p className="text-gray-600 dark:text-white/80">
                            Machine learning models detect early warning signs.
                        </p>
                    </div>

                    <div className="border p-6 rounded-xl shadow-sm">
                        <h4 className="font-semibold mb-2">
                            Real-Time Monitoring
                        </h4>
                        <p className="text-gray-600 dark:text-white/80">
                            Continuous tracking of patient health parameters.
                        </p>
                    </div>

                    <div className="border p-6 rounded-xl shadow-sm">
                        <h4 className="font-semibold mb-2">
                            Automated Alerts
                        </h4>
                        <p className="text-gray-600 dark:text-white/80">
                            Instant notifications for abnormal health metrics.
                        </p>
                    </div>

                    <div className="border p-6 rounded-xl shadow-sm">
                        <h4 className="font-semibold mb-2">
                            Analytics Dashboard
                        </h4>
                        <p className="text-gray-600 dark:text-white/80">
                            Interactive reporting interface for medical teams.
                        </p>
                    </div>
                </div>
            </section>

            {/* VIDEO SECTION */}
            <section className="mb-16">
                <h3 className="text-2xl font-semibold mb-6 text-center">
                    System Demonstration
                </h3>

                <div className="flex justify-center">
                    <div className="w-full max-w-4xl rounded-xl overflow-hidden shadow-lg">

                        <video
                            className="w-full rounded-xl"
                            controls
                        >
                            <source
                                src="/assets/healthcare-demo.mp4"
                                type="video/mp4"
                            />
                            Your browser does not support the video tag.
                        </video>

                    </div>
                </div>
            </section>

            {/* Achievements */}
            <section>
                <h3 className="text-2xl font-semibold mb-4">
                    Key Highlights
                </h3>
                <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-white/80">
                    <li>Implemented predictive healthcare analytics.</li>
                    <li>Improved anomaly detection performance.</li>
                    <li>Designed real-time monitoring system architecture.</li>
                    <li>Developed scalable AI-based health prediction model.</li>
                </ul>
            </section>

        </div>
    );
}