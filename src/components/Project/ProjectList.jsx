import tephro1 from "../../assets/tephro/tephro1.jpg";
import tephro2 from "../../assets/tephro/tephro2.gif";
import tephro3 from "../../assets/tephro/tephro3.jpg";
import tephro4 from "../../assets/tephro/tephro4.jpg";
import tephro5 from "../../assets/tephro/tephro5.jpg";

export const projectList = [
    {
        title: "Tephroglyph",
        description: (
            <>
                Tephroglyph is a mixed media generative art project built using
                p5.js, WEBGL, sketchbook, adobe illustrator, and blender, it
                combines traditional hand drawn illustrations and the latest web
                technologies to create a unique interactive art piece.
            </>
        ),
        links: [
            { url: "https://tephroglyph.com", text: "tephroglyph.com" },
            { url: "https://tephroglyph.com/qr", text: "live sketch" },

            {
                url: "https://github.com/joeyaronson/tephroglyph",
                text: "GitHub",
            },
        ],
        imgs: [
            { img: tephro1, description: "tephroglpyh artwork" },
            { img: tephro2, description: "3d logo" },
            { img: tephro3, description: "black t-shirt" },
            { img: tephro4, description: "blue t-shirt" },
            { img: tephro5, description: "stickers" },
        ],
    },
];
