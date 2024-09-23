import RenderLib from "RenderLibV2"
import { PositionA, PositionB, isPointsSet } from "./points"

let renderingOval = false;
let points;

// Shoutout to ChatGPT or this Function!
function findCirclePoints(X1, Z1, X2, Z2) {
    // Calculate the center of the oval
    let centerX = (X1 + X2) / 2;
    let centerZ = (Z1 + Z2) / 2;

    // Calculate the half-width and half-height of the oval
    let halfWidth = Math.abs(X1 - X2) / 2;
    let halfHeight = Math.abs(Z1 - Z2) / 2;

    // Determine the number of points for the oval based on its perimeter
    let perimeter = 2 * Math.PI * Math.sqrt((Math.pow(halfWidth, 2) + Math.pow(halfHeight, 2)) / 2);
    let numPoints = Math.ceil(perimeter);

    // Initialize the array to store the points
    let points = [];

    // Calculate points on the oval and store each point individually
    for (let i = 0; i < numPoints; i++) {
        // Calculate angle based on the position in the oval perimeter
        let angle = (i / numPoints) * 2 * Math.PI;

        // Calculate x and z coordinates using ellipse equation
        let x = centerX + halfWidth * Math.cos(angle);
        let z = centerZ + halfHeight * Math.sin(angle);

        points.push([Math.round(x), Math.round(z)]);
    }

    return points;
}

register("renderWorld", () => {
    if (!renderingOval) return;

    points.forEach(point => {
        const x = point[0];
        const z = point[1];
    
        RenderLib.drawEspBoxV2(
            x + 0.5, 
            (PositionA.y + PositionB.y) / 2, 
            z + 0.5, 
            1, // wx
            1, // h
            1, // wz
            1, // red
            0, // green
            0, // blue
            1, // alpha
            false, // phase
            2 // line width
        );
    });
});

register("command", () => {
    if (renderingOval) {
        renderingOval = false;
        ChatLib.chat("&aToggled the render!")
        return;
    }

    if (!isPointsSet()) return ChatLib.chat(`&c&lThere are no point set!`);

    renderingOval = true;
    ChatLib.chat("&aToggled the render!")
    points = findCirclePoints(PositionA.x, PositionA.z, PositionB.x, PositionB.z);
}).setName("oval").setAliases(["/oval"]);