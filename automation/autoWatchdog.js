import Settings from "../util/Settings";

register("chat", (event) => {
    if (!Settings.watchdog) {return;}
    ChatLib.say(`L`);
}).setCriteria("A player has been removed from your game.");