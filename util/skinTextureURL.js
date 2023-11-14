
import { getPlayerUUID } from "./getPlayerUUID";

export function getSkinTexture(ign) {
    const uuid = getPlayerUUID(ign);
    const request = FileLib.getUrlContent(`https://sessionserver.mojang.com/session/minecraft/profile/${uuid}`)
    const json = JSON.parse(request);
    const base64skin = json.properties[0].value;
    var textureURL = FileLib.decodeBase64(base64skin);
    textureURL = JSON.parse(textureURL);
    textureURL = textureURL.textures.SKIN.url;
    return textureURL;
}