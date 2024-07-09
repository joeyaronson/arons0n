import { useState } from "react";
import "./NavBar.css";
import AnimateHeight from "react-animate-height";
import { Link, useLocation } from "react-router-dom";

const links = [
    { path: "/", text: "home" },
    { path: "/projects", text: "projects" },
    { path: "/resume", text: "resume" },
];
export default function NavBar() {
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };
    const { pathname } = useLocation();
    return (
        <div className="navContainer">
            <>
                <input
                    hidden
                    className="check-icon"
                    id="check-icon"
                    name="check-icon"
                    type="checkbox"
                    checked={navOpen}
                    onChange={toggleNav}
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
                            {links.map(({ path, text }) => (
                                <li key={text}>
                                    <Link
                                        className={
                                            pathname === path ? "active" : ""
                                        }
                                        to={path}
                                        onClick={() => {
                                            setNavOpen(false);
                                        }}
                                    >
                                        {text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </AnimateHeight>
            </>
        </div>
    );
}
