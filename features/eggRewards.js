import Settings from '../util/Settings';

register('chat', (player, minutes, seconds, miliseconds, event) => {
    if (!Settings.eggRewardsEnabled || !Settings.eggRewardsCommand) {
        return;
    }
    var command = Settings.eggRewardsCommand;
    command = command.replace('%player%', player);

    ChatLib.command(command);
}).setCriteria('${player} completed the egg hunt in ${minutes}:${seconds}.${miliseconds}!');
