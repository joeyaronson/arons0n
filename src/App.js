import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import BackgroundSketch from "./components/BackgroundSketch/BackgroundSketch";
import { useState } from "react";

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
                        <div className="nameContainer">
                            <div className="nameHeader">
                                <p className="name">JOEY ARONSON</p>
                            </div>
                        </div>
                        <p className="description">
                            I am a Fullstack Software Engineer with a focus on
                            Frontend Web Development.
                            <br /> <br />I have worked on building large scale
                            Web Applications with 5+ years of industry
                            experience. <br />
                            <br />
                            Outside of work I am passionate about creating
                            generative art, 3D printing, graphic design,
                            cultivating plants, playing basketball, and cycling.
                        </p>
                    </>
                )}
            </div>
        </div>
    );
}

export default App;
