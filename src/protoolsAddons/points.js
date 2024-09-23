export let PositionA = {
    x: null,
    y: null,
    z: null
}
export let PositionB = {
    x: null,
    y: null,
    z: null
}

export function isPointsSet() {
    if (PositionA.x != null && PositionA.y != null && PositionA.z != null && PositionB.x != null && PositionB.y != null && PositionB.z != null) return true;
    return false;
}

register("chat", (letter, x, y, z) => {
    if (letter == "A") {PositionA.x = parseInt(x); PositionA.y = parseInt(y); PositionA.z = parseInt(z);}
    else {PositionB.x = parseInt(x); PositionB.y = parseInt(y); PositionB.z = parseInt(z);}
}).setCriteria("Position ${letter} set to ${x}, ${y}, ${z}.");