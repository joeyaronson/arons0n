import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import BackgroundSketch from "./components/BackgroundSketch/BackgroundSketch";
import { useState, useEffect } from "react";
import HomePage from "./components/HomePage/HomePage";
import Resume from "./components/Resume/Resume";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
    const [loading, setLoading] = useState(true);
    document.fonts.ready.then(function () {
        setLoading(false);
    });

    return (
        <div className="App">
            <div className="container">
                <div className="sketch">
                    <BackgroundSketch />
                </div>
            </div>
            <div className="page">
                {loading ? (
                    <p>loading</p>
                ) : (
                    <>
                        <NavBar />

                        <Routes>
                            <Route path="/" element={<HomePage />} />

                            <Route path="/resume" element={<Resume />} />
                        </Routes>
                        <Footer />
                    </>
                )}
            </div>
        </div>
    );
}

export default App;
