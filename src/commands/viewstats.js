// /hypixelcommand:viewplayerstats Al3xWarrior

let unformattedstats = [];
let target = "";
let formattedStats = [[], []];
let gettingStats = false;

function sortFormattedStats() {

    let total = 0;

    let primaryColor = "&2";
    let secondaryColor = "&a";
    if (target == "Global") {
        primaryColor = "&4"; 
        secondaryColor = "&c";
    }

    gettingStats = false;
    console.log(unformattedstats);

    unformattedstats.forEach((i) => {
        total++;
        if (i[0].includes("/")) {
            const split = i[0].split("/");
            formattedStats[0].push(`&r &r &f${split[0]}&7/${split[1]}&8: ${secondaryColor}${i[1]}`);
        } else {
            formattedStats[1].push(`&r &r &f${i[0]}&8: ${secondaryColor}${i[1]}`);
        }
    })

    formattedStats[0].sort();
    formattedStats[1].sort();

    ChatLib.chat("&8&m---------------------------------------")
    ChatLib.chat(`${primaryColor}&l${target}'s Stats: &7(${total} Stats)`)
    // Send out formatted stats
    formattedStats[0].forEach((i) => {ChatLib.chat(i)});
    // Send out non formatted stats
    formattedStats[1].forEach((i) => ChatLib.chat(i));
    ChatLib.chat("&8&m---------------------------------------")
}

register("chat", (name, e) => {
    cancel(e);

    target = name;
    unformattedstats = [];
    formattedStats = [[], []];
    gettingStats = true;

    setTimeout(() => sortFormattedStats(), Player.asPlayerMP().getPing() + 150);
}).setCriteria(/&r&a(.*?)(?:'s)? Stats:&r/);

register("chat", (name, value, e) => {
    if (!gettingStats) return;

    cancel(e);

    unformattedstats.push([name, value]);
}).setCriteria(/&r  &r&e(.*): &r&b(.*)&r/);