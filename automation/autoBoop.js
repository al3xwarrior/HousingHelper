import Settings from "../util/Settings";

register("chat", (player, event) => {
    if (!Settings.autoboop) {return;}
    const array = player.split(" ");
    const ign = array[array.length-1];
    ChatLib.command(`boop ${ign}`);
}).setCriteria("From ${player}: Boop!").setContains();