import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";

export default function Carousel(props) {
    const { imgs } = props;
    return (
        <ResponsiveCarousel dynamicHeight infiniteLoop autoPlay swipeable>
            {imgs.map(({ img, desc }) => (
                <React.Fragment key="desc">
                    <img alt={desc} src={img} />
                </React.Fragment>
            ))}

            {/* <div>
                <img src="assets/2.jpeg" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src="assets/3.jpeg" />
                <p className="legend">Legend 3</p>
            </div> */}
        </ResponsiveCarousel>
    );
}
