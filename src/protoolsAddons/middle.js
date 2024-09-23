
import { PositionA, PositionB, isPointsSet } from "./points";

register("command", () => {
    if (!isPointsSet()) return ChatLib.chat(`&c&lThere are no point set!`);

    const midX = (PositionA.x + PositionB.x) / 2;
    const midY = (PositionA.y + PositionB.y) / 2;
    const midZ = (PositionA.z + PositionB.z) / 2;

    ChatLib.chat(`&aThe midpoint is &e${midX}&a, &e${midY}&a, &e${midZ}&a.`);
}).setName("middle").setAliases(["/middle"]);

register("chat", (letter, x, y, z) => {
    if (letter == "A") {PositionA.x = parseInt(x); PositionA.y = parseInt(y); PositionA.z = parseInt(z);}
    else {PositionB.x = parseInt(x); PositionB.y = parseInt(y); PositionB.z = parseInt(z);}
}).setCriteria("Position ${letter} set to ${x}, ${y}, ${z}.");