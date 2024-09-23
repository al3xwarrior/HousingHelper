import DiscordClient from "discord"
const TOKEN = "MTIxMzk3OTA5NDE2OTk1MjMwNg.GRabQW.ZzDSghzoQf_gh8sYP79jkEAHbp324ixpAkGkGc";

let client = new DiscordClient();
//console.log(JSON.stringify(client))

client.login(TOKEN);
client.on("message", (message) => {
    ChatLib.chat(`[DISCORD] ${message.author.username}: ${message.content}`);
});

