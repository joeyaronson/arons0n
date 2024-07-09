import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";

export default function Carousel(props) {
    const { imgs } = props;
    return (
        <ResponsiveCarousel
            dynamicHeight
            infiniteLoop
            autoPlay
            swipeable
            stopOnHover
            interval={12000}
            swipeScrollTolerance={50}
        >
            {imgs.map(({ img, desc }, i) => (
                <div key={i}>
                    <img alt={desc} src={img} />
                </div>
            ))}
        </ResponsiveCarousel>
    );
}
