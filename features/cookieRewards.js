import Settings from '../util/Settings';

function cookies(player) {
    if (!TabList.getFooter().includes('You are in')) {
        return;
    }

    const split = player.split(' ');
    player = split[split.length - 1];

    var command = Settings.cookieRewardsCommand;
    command = command.replace('%player%', player);

    ChatLib.command(command);
}

/*
register("chat", (amount, rank, player, event) => {
	// console.log(`COOKIES RECIEVED | ${player} ${cookies} cookies`)
	if (!Settings.cookieRewardsEnabled) { return }
	cookies(player)
}).setCriteria("You received ${amount} cookies from ${rank} ${player}!");
*/

register('chat', (amount, player, event) => {
    // console.log(`COOKIES RECIEVED | ${player} ${cookies} cookies`)
    if (!Settings.cookieRewardsEnabled) {
        return;
    }
    cookies(player);
}).setCriteria('You received ${amount} cookies from ${player}!');
