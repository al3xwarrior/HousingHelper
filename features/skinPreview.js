import Settings from '../util/Settings';

var image;

function getSkinURL(item) {
    var rawNBT = item.getRawNBT();
    var regex = /Value:"([^"]+)"/;
    var match = rawNBT.match(regex);
    if (!match) {
        return;
    }

    var id = match[1];

    var decodedString = FileLib.decodeBase64(id);

    var toString = JSON.stringify(decodedString);

    var regex = /(http[^\\]+)\\/;
    var match = toString.match(regex);

    if (match && match.length > 1) {
        //console.log(match[1]);
        return match[1];
    }
}

function renderSkinTexture(textureID) {
    image = new Image(`${textureID}.png`, `https://mc-heads.net/body/${textureID}.png`);
}

register('guiRender', (mx, my, gui) => {
    if (!Settings.skinPreviewEnabled) {
        return;
    }
    if (Server.getIP() === undefined || Server.getIP() === null || Server.getIP() === '' || Server.getIP() === 'localhost') {
        return;
    }
    if (!Player.getContainer()) {
        return;
    }
    if (!Player.getContainer().getName().includes('Change Skin')) {
        return;
    }
    if (!image) {
        return;
    }
    const x = Math.floor((Settings.skinPreviewXPos / 100) * Renderer.screen.getWidth()) - 25;
    const y = Math.floor((Settings.skinPreviewYPos / 100) * Renderer.screen.getHeight());
    image.draw(x, y, 45, 108);
});

// Hovering over a NPC Skin
register('itemTooltip', (list, item, event) => {
    if (!Settings.skinPreviewEnabled) {
        return;
    }
    if (item.getName().includes('NPC')) {
        return;
    }
    if (item.getID() === 397 && Player.getContainer().getName().includes('Change Skin')) {
        skinURL = getSkinURL(item);
        skinURL = skinURL.split('/');
        skinURL = skinURL[skinURL.length - 1];
        //if (FileLib.exists(`./config/ChatTriggers/images/${skinURL}.png`)) {return;}
        renderSkinTexture(skinURL);
    }
    // this.unregister();
});
