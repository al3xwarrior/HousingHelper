
import Settings from "../../Settings";
import { getItemFromNBT } from "../../utils";

const C10PacketCreativeInventoryAction = Java.type("net.minecraft.network.play.client.C10PacketCreativeInventoryAction");

let hovering = false;
let inventory = [];

function spawnItem(item, slot) {Client.sendPacket(new C10PacketCreativeInventoryAction(slot, item.getItemStack()));}

register("command", () => {
    if (!Settings().restoreinventory) return ChatLib.chat("&cInventory restoring is disabled! Enable it to use it! &7/hh");
    for (let i = 0; i < inventory.length; i++) {
        let item = getItemFromNBT(inventory[i]);
        spawnItem(item, 36 + i);
    }
}).setName("restoreitems");

register("guiMouseClick", (x, y, mouse, gui, e) => {
    if (!Settings().restoreinventory) {return;}
    if (hovering) {
        inventory = [];
        hovering = false;
        let items = Player.getInventory().getItems();
        items.forEach(item => {
            let itemName = item.getName().removeFormatting();
            if (
                item != null && 
                !itemName.includes("Housing Menu") &&
                !itemName.includes("Visibility Mode")
            ) inventory.push(item.getRawNBT());
        });
        ChatLib.chat(new TextComponent("&7[&cMode Swap Restorer&7] &aYou have just switched modes! Click to restore your inventory.").setHoverValue("&e&lCLICK").setClick("run_command", "/restoreitems"));
    }
});

register("itemTooltip", (list, item, e) => {
    if (!Settings().restoreinventory) {return;}
    if (item.getName() === "§aMode: §eBuild Mode" || item.getName() === "§aMode: §eSocial Mode") hovering = true; else hovering = false;
});