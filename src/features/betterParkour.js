let checking = Date.now()
let leaderboard = {}

let avg = 0;

register('chat', (e) => {
    leaderboard = {};
    checking = Date.now()

    setTimeout(() => {
        for (const position in leaderboard) {
            let time = position.milisecs + (position.secs * 1000) + (position.mins * 10000);
            avg += time;
        }
        avg = avg / leaderboard.length;
    
        // 12-34-500
        ChatLib.chat("&6&m----------------------------------------------------");
        ChatLib.chat(`&e&lParkour Leaderboards &7(&fAverage: ${avg / 100000}:${avg % 10000 / 100}.${avg % 100}`)
        for (let i = 0; i < leaderboard.length; i++) {
            const position = leaderboard[i];
            ChatLib.chat(`&6#${i} &a- &e${position.mins}:${position.secs}.${position.milisecs} &a- &2${position.player}`);
        }
        ChatLib.chat("&6&m----------------------------------------------------");
    }, 550)
}).setCriteria("                       Parkour Leaderboards");

register('chat', (place, mins, secs, milisecs, player, e) => {
    cancel(e)
    if (Date.now() - checking < 500) {
        leaderboard[place] = {
            player: player,
            mins: mins,
            secs: secs,
            milisecs: milisecs
        }
    }
}).setCriteria("#${place} - ${mins}:${secs}.${milisecs} - ${player}")
register('chat', (e) => cancel(e)).setCriteria("----------------------------------------------------");