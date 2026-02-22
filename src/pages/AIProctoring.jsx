import { Link } from "react-router-dom";

export default function AIProctoring() {
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
                    Proctor: AI-powered Surveillance for Real-Time Student Behavior Monitoring
                </h2>

                <p className="mt-3 text-gray-600 dark:text-white/80">
                    SDG 4 – Quality Education | SDG 16 – Peace, Justice & Strong Institutions
                </p>
            </div>

            {/* Quote */}
            <div className="text-center max-w-5xl mx-auto mb-16">
                <p className="text-lg sm:text-xl font-bold leading-relaxed">
                    “Proctor ensures a fair and secure examination environment by leveraging AI to detect and prevent malpractice in real time.”
                </p>
            </div>

            {/* Overview */}
            <section className="mb-14">
                <h3 className="text-2xl font-semibold mb-4">Project Overview</h3>
                <p className="text-gray-700 dark:text-white/80 leading-relaxed">
                    Proctor is an AI-powered surveillance system designed to uphold fairness 
                    and integrity in examinations. It monitors students in real-time, detects 
                    suspicious activities like phone usage, talking, and copying, and provides 
                    instant alerts through an intelligent proctoring dashboard. By leveraging 
                    advanced AI models for behavior analysis, Proctor ensures a seamless and 
                    ethical assessment environment.
                </p>
            </section>

            {/* Problem Statement */}
            <section className="mb-14">
                <h3 className="text-2xl font-semibold mb-4">Problem Statement</h3>
                <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-white/80">
                    <li>Exam malpractice such as copying, phone usage, and external help.</li>
                    <li>Manual invigilation prone to fatigue and human error.</li>
                    <li>Existing AI systems failing to detect subtle cheating behaviors.</li>
                    <li>Privacy and ethical concerns in AI-based monitoring.</li>
                    <li>Need for automated, real-time, secure monitoring solutions.</li>
                </ul>
            </section>

            {/* Proposed Solution */}
            <section className="mb-14">
                <h3 className="text-2xl font-semibold mb-6">Proposed Solution</h3>

                <div className="grid sm:grid-cols-2 gap-6">

                    <div className="border p-6 rounded-xl shadow-sm">
                        <h4 className="font-semibold mb-2">AI-Driven Behavior Detection</h4>
                        <p className="text-gray-600 dark:text-white/80">
                            Detects phone usage, talking, copying, sleeping,
                            hand signals, and suspicious movements.
                        </p>
                    </div>

                    <div className="border p-6 rounded-xl shadow-sm">
                        <h4 className="font-semibold mb-2">Real-Time Alerts & Logging</h4>
                        <p className="text-gray-600 dark:text-white/80">
                            Automatically flags anomalies and records them with timestamps.
                        </p>
                    </div>

                    <div className="border p-6 rounded-xl shadow-sm">
                        <h4 className="font-semibold mb-2">Automated Monitoring</h4>
                        <p className="text-gray-600 dark:text-white/80">
                            Reduces dependency on manual invigilation using intelligent tracking.
                        </p>
                    </div>

                    <div className="border p-6 rounded-xl shadow-sm">
                        <h4 className="font-semibold mb-2">Ethical & Secure Proctoring</h4>
                        <p className="text-gray-600 dark:text-white/80">
                            Designed with privacy safeguards while maintaining exam integrity.
                        </p>
                    </div>

                </div>
            </section>

            {/* Achievements */}
            <section className="mb-14">
                <h3 className="text-2xl font-semibold mb-4">Key Achievements</h3>
                <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-white/80">
                    <li>Real-time multi-student monitoring system.</li>
                    <li>Automated suspicious activity logging with timestamps.</li>
                    <li>AI-based behavior classification model integration.</li>
                    <li>Dashboard with alert visualization.</li>
                </ul>
            </section>

        </div>
    );
}