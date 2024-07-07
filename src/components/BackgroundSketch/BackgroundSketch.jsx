import React from "react";
import Sketch from "react-p5";
let COUNT = 10;
let w = [];
const noiseVal = 0.002;
let timer = 0;
let resizeBool = false;
function BackgroundSketch() {
    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(
            canvasParentRef
        );
        p5.strokeWeight(2);
        p5.angleMode(p5.DEGREES);

        loadWaves(p5);
    };

    const loadWaves = (p5) => {
        for (
            let y = p5.height / 1.5, o = 0;
            y < p5.height + 200;
            y += COUNT, o += 2
        ) {
            w.push(new Wave(y + o, p5));
        }
    };
    const displayWaves = () => {
        for (let wave of w) {
            wave.display();
        }
    };
    class Wave {
        constructor(y, p5) {
            this.y = y;
            this.p5 = p5;
        }

        display() {
            this.p5.beginShape();
            this.p5.vertex(-100, this.p5.height + 100);
            for (let i = 0; i < this.p5.width + 10; i += 10) {
                let ny = this.p5.noise(
                    i * noiseVal,
                    this.y / 100,
                    this.p5.frameCount * noiseVal + this.p5.mouseX / 1000
                );
                // console.log(ny)
                let yOff = this.p5.map(ny, 0, 1, 0, this.p5.height / 3);
                this.p5.vertex(i, this.y - yOff);
            }
            this.p5.vertex(this.p5.width + 100, this.p5.height + 100);

            this.p5.endShape(this.p5.CLOSE);
        }
    }

    const draw = (p5) => {
        p5.background("#eeeee4");
        p5.noStroke();
        p5.fill("#dc6a2baa");
        let angle = p5.map(
            p5.mouseX + p5.mouseY,
            0,
            p5.width + p5.height,
            300,
            70
        );
        let sunX = (p5.sin(angle) * p5.width) / 3;
        let sunY = (p5.cos(angle) * p5.width) / 3;
        p5.ellipse(
            p5.width / 2 + sunX,
            p5.height / 2 + sunY,
            p5.width / 10,
            p5.width / 10
        );
        p5.stroke("#dc6a2baa");
        p5.fill("#eeeee4");
        displayWaves();
        if (resizeBool) {
            if (timer > 50) {
                console.log("resizing");
                p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
                w = [];
                loadWaves(p5);
                timer = 0;
                resizeBool = false;
            }
            timer++;
        }
    };

    const windowResized = (p5) => {
        resizeBool = true;
    };

    return <Sketch setup={setup} draw={draw} windowResized={windowResized} />;
}

export default BackgroundSketch;
