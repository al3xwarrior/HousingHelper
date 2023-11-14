function applyRainbowColors(msg) {
    const rainbowCodes = ['&c&l', '&6&l', '&e&l', '&a&l', '&b&l', '&d&l']
    msg = msg.split('')
    let colorCode = 0
    for (i = 0; i < msg.length; i++) {
        if (colorCode == 5) {
            colorCode = 0
        }
        msg[i] = rainbowCodes[colorCode] + msg[i];
        colorCode++;
    }
    return msg.join('')
}

register("command", () => {
    const item = Player.getHeldItem();
    var itemName = item.getName();
    itemName = itemName.removeFormatting();
    item.setName(applyRainbowColors(itemName));
    ChatLib.chat(applyRainbowColors("Item Rainbowifed!"));
}).setName("rainbowify");