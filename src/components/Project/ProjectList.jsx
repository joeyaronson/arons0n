import tephro1 from "../../assets/tephro/tephro1.jpg";
import tephro2 from "../../assets/tephro/tephro2.gif";
import tephro3 from "../../assets/tephro/tephro3.jpg";
import tephro4 from "../../assets/tephro/tephro4.jpg";
import tephro5 from "../../assets/tephro/tephro5.jpg";

import gup1 from "../../assets/guppi/gup1.png";
import gup2 from "../../assets/guppi/gup2.png";
import gup3 from "../../assets/guppi/gup3.png";

import apf1 from "../../assets/apf/apf1.jpg";
import apf2 from "../../assets/apf/apf2.jpg";
import apf3 from "../../assets/apf/apf3.jpg";

import inputImage from "../../assets/cells/input_image.jpg";
import sampleMaskOutput from "../../assets/cells/sample_mask_output.jpg";
import sampleOutput from "../../assets/cells/sample_output.jpg";

import excl from "../../assets/generative/excl.png";
import drip from "../../assets/generative/drip.png";
import cube from "../../assets/generative/cube.png";
import depth from "../../assets/generative/depth.png";
import iris from "../../assets/generative/iris.png";

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
            { img: tephro1, description: "tephroglyph artwork" },
            { img: tephro2, description: "3d logo" },
            { img: tephro3, description: "black t-shirt" },
            { img: tephro4, description: "blue t-shirt" },
            { img: tephro5, description: "stickers" },
        ],
    },

    {
        title: "Abstract Perlin Fields",
        description: (
            <>
                Abstract Perlin Fields is a generative art project written in
                Processing3. It is fully customizable to take in various inputs
                like color, resolution, and more.
            </>
        ),
        links: [
            {
                url: "https://github.com/joeyaronson/Abstract-Perlin-Fields",
                text: "GitHub",
            },
        ],
        imgs: [
            { img: apf1, description: "apf 1" },
            { img: apf2, description: "apf 2" },
            { img: apf3, description: "apf 3" },
        ],
    },
    {
        title: "Basic Cell Counter",
        description: (
            <>
                Basic cell counter is a python tool built to take input images
                from a microscope and count the number of distinct cells within
                the image. This project was used to facilitate studies by
                researchers at USC.
            </>
        ),
        links: [
            {
                url: "https://github.com/joeyaronson/basic_cell_counter",
                text: "GitHub",
            },
        ],
        imgs: [
            { img: sampleOutput, description: "sample output" },
            { img: sampleMaskOutput, description: "sample mask output" },
            { img: inputImage, description: "input image" },
        ],
    },
    {
        title: "Generative Art Archive",
        description: (
            <>
                A collection of generative artwork created using p5.js and
                Processing3.
            </>
        ),
        links: [
            {
                url: "https://github.com/joeyaronson/generative-art-archive",
                text: "GitHub",
            },
            {
                url: "https://openprocessing.org/user/134483?view=sketches&o=2",
                text: "Open Processing",
            },
        ],
        imgs: [
            { img: excl, description: " excl" },
            { img: drip, description: " drip" },
            { img: cube, description: " cube" },
            { img: depth, description: "depth" },
            { img: iris, description: " iris" },
        ],
    },
    {
        title: "Project GUPPI",
        description: (
            <>
                Project GUPPI, a Cisco sponsored project, was created by me and
                two other students. Working as an extension for Jupyter
                Notebook, Project GUPPI allows users to interact with cloud
                services such as AWS, Google Compute, and Azure. It includes
                other features such as Slack integration and GitHub integration.
                Project GUPPI was designed to be fully open source and was
                written in Python.
            </>
        ),
        links: [],
        imgs: [
            { img: gup1, description: "guppi 1" },
            { img: gup2, description: "guppi 2" },
            { img: gup3, description: "guppi 3" },
        ],
    },
];
