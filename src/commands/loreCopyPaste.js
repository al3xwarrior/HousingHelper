import { getItemFromNBT, inCreative } from '../../utils';

const C10PacketCreativeInventoryAction = Java.type('net.minecraft.network.play.client.C10PacketCreativeInventoryAction');

let lore;

register('command', () => {
    const item = Player.getHeldItem();
    if (!item) return ChatLib.chat('&c&lYour not holding an item!');

    const rawNBT = item.getRawNBT();
    const loreRegex = /Lore:(\[.*?\])/;
    const loreMatch = loreRegex.exec(rawNBT);

    if (loreMatch) {
        lore = loreMatch[1];
        ChatLib.chat('&a&lITEM LORE COPIED!');
    } else {
        ChatLib.chat('&c&lTHIS ITEM DOES NOT HAVE LORE!');
    }
}).setName('copylore');

register('command', () => {
    if (!lore) return ChatLib.chat('&c&lNO LORE COPIED!');
    if (!inCreative) return ChatLib.chat('&c&lYOU ARE NOT IN CREATIVE!');

    let item = Player.getHeldItem();

    if (!item) return ChatLib.chat('&c&lYOU ARE NOT HOLDING AN ITEM!');

    item.setLore('TEMP');
    item = Player.getHeldItem();

    let loreRegex = /Lore:(\[.*?\])/;

    // Use the provided lore or an empty array if not provided
    let newLore = lore || '[]';

    // Replace the existing lore with the updated lore by creating a new item in the players hand
    let updatedLore = item.getRawNBT().replace(loreRegex, 'Lore:' + newLore);
    Client.sendPacket(new C10PacketCreativeInventoryAction(parseInt(Player.getHeldItemIndex() + 36), getItemFromNBT(updatedLore).getItemStack()));
    ChatLib.chat('&a&lPASTED!');
}).setName('pastelore');