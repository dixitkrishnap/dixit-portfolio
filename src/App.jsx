import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Internships from "./components/Internships";
import Achievements from "./components/Achievements";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LenisScroll from "./components/LenisScroll";

import Healthcare from "./pages/Healthcare";
import AIProctoring from "./pages/AIProctoring";
import Ecogram from "./pages/Ecogram";

function Home() {
    return (
        <>
            <Header />
            <About />
            <Internships />
            <Achievements />
            <Services />
            <Work />
            <Contact />
        </>
    );
}

export default function App() {
    return (
        <Router>
            <LenisScroll />

            <div className="min-h-screen flex flex-col">
                <Navbar />

                {/* Main Content */}
                <div className="flex-grow pt-20">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/ai-proctoring" element={<AIProctoring />} />
                        <Route path="/ecogram" element={<Ecogram />} />
                        <Route path="/healthcare-system" element={<Healthcare />} />
                    </Routes>
                </div>

                <Footer />
            </div>
        </Router>
    );
}