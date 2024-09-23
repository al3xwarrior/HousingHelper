import Settings from "../../Settings";

register('chat', (player, minutes, seconds, miliseconds) => {
    if (!Settings().eggRewardsEnabled || !Settings().eggRewardsCommand) return;
    ChatLib.command(Settings().eggRewardsCommand.replace('{player}', player));
}).setCriteria('${player} completed the egg hunt in ${minutes}:${seconds}.${miliseconds}!');