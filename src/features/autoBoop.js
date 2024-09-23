import Settings from "../../Settings";

register('chat', (player) => {
    if (!Settings().autoBoop) return;
    const array = player.split(' ');
    const ign = array[array.length - 1];
    ChatLib.command(`boop ${ign}`);
}).setCriteria('From ${player}: Boop!');