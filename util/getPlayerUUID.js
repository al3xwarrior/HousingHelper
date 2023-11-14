export function getPlayerUUID(ign) {
    const request = FileLib.getUrlContent(`https://api.mojang.com/users/profiles/minecraft/${ign}`);
    const json = JSON.parse(request);
    return json.id;
}