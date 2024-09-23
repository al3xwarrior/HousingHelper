import Settings from "../../Settings";
import { inHouse } from "../../utils";

function cookies(amount, player) {
    if (!inHouse() || !Settings().cookieRewardsEnabled) return;

    const split = player.split(' ');
    player = split[split.length - 1];

    ChatLib.command(Settings().cookieRewardsCommand.replace('{player}', player));
}

register('chat', cookies).setCriteria('You received ${amount} cookies from ${player}!');