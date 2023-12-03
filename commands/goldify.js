register('command', () => {
    const item = Player.getHeldItem();
    var itemName = item.getName();
    itemName = itemName.removeFormatting();
    item.setName('&6&l' + itemName);
    ChatLib.chat('&6&lItem Goldified!');
}).setName('goldify');
