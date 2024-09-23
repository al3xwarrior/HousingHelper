import Settings from "../../Settings";

let image;

function getSkinURL(item) {
    let rawNBT = item.getRawNBT();
    let regex = /Value:"([^"]+)"/;
    let match = rawNBT.match(regex);
    if (!match) return

    let id = match[1];
    let decodedString = FileLib.decodeBase64(id);
    let toString = JSON.stringify(decodedString);

    regex = /(http[^\\]+)\\/;
    match = toString.match(regex);

    console.log(match);
    if (match && match.length > 1) return match[1];
}

function renderSkinTexture(textureID) {
    image = new Image(`${textureID}.png`, `https://mc-heads.net/body/${textureID}.png`);
}

register('guiRender', () => {
    if (!Settings().skinPreviewEnabled) return;
    if (Server.getIP() === undefined || Server.getIP() === null || Server.getIP() === '' || Server.getIP() === 'localhost') return;
    if (!Player.getContainer()) return;
    if (!Player.getContainer().getName().includes('Change Skin')) return;
    if (!image) return;
    const x = Math.floor((Settings().skinPreviewXPos / 100) * Renderer.screen.getWidth()) - 25;
    const y = Math.floor((Settings().skinPreviewYPos / 100) * Renderer.screen.getHeight());
    image.draw(x, y, 45, 108);
});

// Hovering over a NPC Skin
register('itemTooltip', (list, item, event) => {
    if (!Settings().skinPreviewEnabled) return;
    if (item.getName().includes('NPC')) return;
    if (item.getID() === 397 && Player.getContainer().getName().includes('Change Skin')) {
        skinURL = getSkinURL(item);
        skinURL = skinURL.split('/');
        skinURL = skinURL[skinURL.length - 1];
        //if (FileLib.exists(`./config/ChatTriggers/images/${skinURL}.png`)) return;
        renderSkinTexture(skinURL);
    }
});