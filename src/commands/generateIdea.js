
const gametypeArray = [
    "Parkour",
    "Simulator",
    "Minigame",
    "KitPvP",
    "Escape Room",
    "Roleplay",
    "Maze",
    "Event House",
    "PVP"
];
const topicsArray = JSON.parse(FileLib.read("HousingHelper", "src/storage/houseideas.json"));

export default function generateidea() {
    const gameType = gametypeArray[Math.floor(Math.random() * gametypeArray.length)]; 
    const gameTopic = topicsArray[Math.floor(Math.random() * topicsArray.length)]; 
    Client.showTitle(`&eMake a &6&l${gameType}`, `&e&oabout &6${gameTopic}`, 8, 100, 8);
    World.playSound("note.pling", 1.0, 2.0)
}

register("command", () => {
    generateidea();
}).setName("generateidea");