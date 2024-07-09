import React from "react";
import Carousel from "../Carousel/Carousel";

export default function Project(props) {
    const { title, description, links, imgs } = props;
    return (
        <div className="projectContainer">
            <h2>{title}</h2>
            <h3>{description}</h3>
            {links.map(({ url, text }) => (
                <a
                    className="link"
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key="text"
                >
                    {text}
                </a>
            ))}
            <div className="carouselContainer">
                <Carousel imgs={imgs} />
            </div>
        </div>
    );
}
