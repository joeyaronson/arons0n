import { useState } from "react";
import "./NavBar.css";
import AnimateHeight from "react-animate-height";

export default function NavBar() {
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    return (
        <div className="navContainer">
            <>
                <input
                    hidden
                    className="check-icon"
                    id="check-icon"
                    name="check-icon"
                    type="checkbox"
                    onClick={toggleNav}
                ></input>
                <label className="icon-menu" htmlFor="check-icon">
                    <div className="bar bar--1"></div>
                    <div className="bar bar--2"></div>
                    <div className="bar bar--3"></div>
                </label>
            </>
            <>
                <AnimateHeight duration={500} height={navOpen ? "auto" : 0}>
                    <div className="listContainer">
                        <ul>
                            <li>
                                <a href="">home</a>
                            </li>
                            <li>
                                <a href="">projects</a>
                            </li>
                            <li>
                                <a href="">home</a>
                            </li>
                            <li>
                                <a href="">home</a>
                            </li>
                        </ul>
                    </div>
                </AnimateHeight>
            </>
        </div>
    );
}
