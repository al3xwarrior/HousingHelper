import  { createFakePlayer, removeFakePlayer } from "../util/spawnFakePlayer";
import { getSkinTexture } from "../util/skinTextureURL";
import Settings from "../util/Settings";

var housingLobby = false;
var npcs = {
    number1: null,
    number2: null,
    number3: null,
    number4: null,
    number5: null,
    number6: null
};

function getFeaturedHouses() {
    // /api/browser
    const houses = FileLib.getUrlContent("http://198.50.156.132:8095/api/browser");
    return JSON.parse(houses);
}

function spawnNPCs() {
    const houses = getFeaturedHouses();
    console.log(JSON.stringify(houses));

    for (let i = 0; i < houses.length; i++) {
        var house = houses[i];
        console.log(JSON.stringify(house));
        var textureURL = getSkinTexture(house.ign);
        var npcName = `§6§l#${i + 1} §e§l${house.ign}`;

        if (i === 0) {
            npcs.number1 = createFakePlayer(-13.5, 65, 25.5, -90, 0, npcName, textureURL);
        } else if (i === 1) {
            npcs.number2 = createFakePlayer(-15.5, 65, 22.5, -90, 0, npcName, textureURL);
        } else if (i === 2) {
            npcs.number3 = createFakePlayer(-15.5, 65, 28.5, -90, 0, npcName, textureURL);
        } else if (i === 3) {
            npcs.number4 = createFakePlayer(-17.5, 65, 25.5, -90, 0, npcName, textureURL);
        } else if (i === 4) {
            npcs.number5 = createFakePlayer(-19.5, 65, 22.5, -90, 0, npcName, textureURL);
        } else if (i === 5) {
            npcs.number6 = createFakePlayer(-19.5, 65, 28.5, -90, 0, npcName, textureURL);
        }
    }
}

function deleteNPCs() { removeFakePlayer(npcs.number1); removeFakePlayer(npcs.number2); removeFakePlayer(npcs.number3); removeFakePlayer(npcs.number4); removeFakePlayer(npcs.number5); removeFakePlayer(npcs.number6); }

register("worldLoad", () => {
    if (!Settings.featuredHouses) {return;}
    setTimeout(() => {
        if (Scoreboard.getLinesByScore(5) && Scoreboard.getLinesByScore(5)[0].toString() === "§fHypixel Housin🏀§fg!") {
            housingLobby = true;
            spawnNPCs()
        } else {
            housingLobby = false;
            deleteNPCs()
        }
    }, 500);
})

register("attackEntity", (entity, e) => {
    if (!Settings.featuredHouses) {return;}
    const name = entity.getName();
    if (name.includes("#1 ") || name.includes("#2 ") || name.includes("#3 ") || name.includes("#4 ") || name.includes("#5 ") || name.includes("#6 ")) {
        const split = name.split(" ");
        ChatLib.command("visit " + ChatLib.removeFormatting(split[1]));
    }
})