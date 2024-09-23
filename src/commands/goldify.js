register('command', () => {
    const item = Player.getHeldItem();
    let itemName = item.getName();
    itemName = itemName.removeFormatting();
    item.setName('&6&l' + itemName);
    ChatLib.chat('&6&lITEM NAME GOLDIFIED!');
    World.playSound("note.pling", 1.0, 2.0)
}).setName('goldify');