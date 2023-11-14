
var parkourTimes = [];

var checkingLeaderboard = false;

function checkLeaderboard() {
    checkingLeaderboard = true;
    ChatLib.say("/parkour leaderboard");
    setTimeout(() => {
        checkingLeaderboard = false;
    }, 200);
}

register("command", () => {
    checkLeaderboard();
    ChatLib.chat(JSON.stringify(parkourTimes));
}).setName("checkLeaderboard");

register("chat", (place, minutes, seconds, miliseconds, player, e) => {
    if (checkingLeaderboard) {
        cancel(e);
        parkourTimes.push({
            playerName: player,
            position: place,
            time: minutes+":"+seconds+"."+miliseconds
        })
    }
}).setCriteria("#${place} - ${minutes}:${seconds}.${miliseconds} - ${player}");

register("chat", (e) => {
    var msg = EventLib.getMessage(e);
    msg = msg.siblings[0].text;
    if (checkingLeaderboard && (msg.includes("----------------------------------------------------") || msg.includes("Parkour Leaderboards"))) {
        cancel(e);
    }
});