import React from "react";

export default function Footer() {
    return (
        <footer>
            <div className="footerContainer">
                <div className="footerText">
                    <i className="fa-solid fa-envelope"></i>
                    <a href="mailto: aronsonjoey@gmail.com">
                        aronsonjoey@gmail.com
                    </a>
                </div>
                <div className="footerText">
                    <i className="fa-solid fa-phone"></i>(650)-417-8085
                </div>
                <div className="footerText">
                    <a
                        href="https://www.linkedin.com/in/josephyaronson/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-linkedin"></i>@josephyaronson
                    </a>
                </div>
                <div className="footerText">
                    <a href="https://github.com/joeyaronson">
                        <i
                            className="fa-brands fa-github"
                            target="_blank"
                            rel="noopener noreferrer"
                        ></i>
                        @joeyaronson
                    </a>
                </div>
            </div>
        </footer>
    );
}
