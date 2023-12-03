import { createFakePlayer, removeFakePlayer } from '../util/spawnFakePlayer';
import { getSkinTexture } from '../util/skinTextureURL';

var npc = undefined;
var inHousingLobby = false;

function spawnNPC() {
    npc = createFakePlayer(-2.5, 68, 9.5, 135, 90, '§e[NPC] §a§nMy Houses§r', getSkinTexture(Player.getName()));
}

register('worldLoad', () => {
    removeFakePlayer(npc);
});

register('attackEntity', (entity, e) => {
    const name = entity.getName();
    if (name.includes('My Houses')) {
        ChatLib.command('visit ' + Player.getName());
    }
});

register('worldLoad', () => {
    setTimeout(() => {
        if (Scoreboard.getLinesByScore(5) === undefined || !Scoreboard.getLinesByScore(5) || Scoreboard.getLinesByScore(5) === null) {
            inHousingLobby = false;
        } else {
            if (Scoreboard.getLinesByScore(5)[0].toString() === '§fHypixel Housin🏀§fg!') {
                inHousingLobby = true;
                spawnNPC();
            } else {
                inHousingLobby = false;
            }
        }
    }, 800);
});

module.exports = {
    spawnNPC,
};
