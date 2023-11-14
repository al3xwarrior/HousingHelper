import { getItemFromNBT } from "../util/getItemFromNBT";
import inCreative from "../util/inCreative";

const C10PacketCreativeInventoryAction = Java.type("net.minecraft.network.play.client.C10PacketCreativeInventoryAction");

var lore;

register("command", () => {
    const item = Player.getHeldItem();
    if (item === null) { ChatLib.chat("&c&lYour not holding an item!"); return;}
    const nbt = item.getRawNBT();

    const loreRegex = /Lore:(\[.*?\])/;
    const loreMatch = loreRegex.exec(nbt);

    
    if (loreMatch) {
        ChatLib.chat("&a&lLore successfully copied!");
        lore = loreMatch[1];
        // ChatLib.chat(lore);
    } else {
        ChatLib.chat("&c&lLore not found!");
    }
}).setName("copylore");

register("command", () => {
    if (!lore) { ChatLib.chat("&c&lThere is no lore copied!"); return; }
    if (!inCreative) { ChatLib.chat("&c&lYour not in creative!"); return;}
    var item = Player.getHeldItem();
    item.setLore("TEMP")
    item = Player.getHeldItem();
    if (item === null) { ChatLib.chat("&c&lYour not holding an item!"); return;}
    
    var loreRegex = /Lore:(\[.*?\])/;

    // Use the provided lore or an empty array if not provided
    var newLore = lore || '[]';

    // Replace the existing lore with the updated lore
    var nbtDataWithUpdatedLore = item.getRawNBT().replace(loreRegex, 'Lore:' + newLore);
    Client.sendPacket(new C10PacketCreativeInventoryAction(parseInt(Player.getHeldItemIndex()+36), getItemFromNBT(nbtDataWithUpdatedLore).getItemStack()))
    ChatLib.chat("&a&lLore Pasted!")
}).setName("pastelore");