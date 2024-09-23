import Settings from "../../Settings";
import { getHouseCookies, getHouseGuests, getHouseName, getHouseOwner, inHouse } from "../../utils";
import sendToDiscord from "../toDiscord";

let name;
let message;

function replacePlaceholders(string) {
    return string.replace("{player}", name)
        .replace("{message}", message.removeFormatting())
        .replace("{cookies}", getHouseCookies().removeFormatting())
        .replace("{guests}", getHouseGuests().removeFormatting())
        .replace("{owner}", getHouseOwner().removeFormatting())
        .replace("{housename}", getHouseName().removeFormatting());
}

register('chat', (plrname, plrmessage) => {
    if (!Settings().discordBridgeEnabled || !inHouse() || plrname.includes("Guild > ") || plrname.includes("From ") || plrname.includes("To ") || plrname === "Settings") return;

    name = plrname;
    message = plrmessage;

    let username = replacePlaceholders(Settings().discordBridgeName);
    let title = replacePlaceholders(Settings().discordBridgeTitle);
    let description = replacePlaceholders(Settings().discordBridgeDescription);
    let footer = replacePlaceholders(Settings().discordBridgeFooter);
    let thumbnailURL = replacePlaceholders(Settings().discordBridgeThumbnailURL);
    let avatarURL = replacePlaceholders(Settings().discordBridgeIconURL);

    sendToDiscord(Settings().discordBridgeWebhook, title, description, thumbnailURL, avatarURL, username, null, footer);
}).setCriteria(/(?:.*?)?(?:(?:\[(?:.*?)\] )*)([a-zA-Z0-9_]{1,25}): (.*)/);