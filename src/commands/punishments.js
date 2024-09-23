register("command", (plr) => {
    if (!plr) return ChatLib.chat("&c&lYou must specify a player!");
    ChatLib.say(`/h ban ${plr}`);
}).setName("ban");

register("command", (plr) => {
    if (!plr) return ChatLib.chat("&c&lYou must specify a player!");
    ChatLib.say(`/h unban ${plr}`);
}).setName("unban");

register("command", (plr) => {
    if (!plr) return ChatLib.chat("&c&lYou must specify a player!");
    ChatLib.say(`/h mute ${plr}`);
}).setName("mute");

register("command", (plr) => {
    if (!plr) return ChatLib.chat("&c&lYou must specify a player!");
    ChatLib.say(`/h unmute ${plr}`);
}).setName("unmute");