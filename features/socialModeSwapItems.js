
import { getItemFromNBT } from "../util/getItemFromNBT";
import Settings from "../util/Settings";

const C10PacketCreativeInventoryAction = Java.type("net.minecraft.network.play.client.C10PacketCreativeInventoryAction");

var hovering = false;
var inventory = [];

function spawnItem(item, slot) {
    Client.sendPacket(new C10PacketCreativeInventoryAction(slot, item.getItemStack()));
}

register("command", () => {
    if (!Settings.restoreinventory) {
        ChatLib.chat("&cInventory restoring is disabled! Enable it to use it! &7/hh");
        return;
    }
    for (var i = 0; i < inventory.length; i++) {
        let item = getItemFromNBT(inventory[i]);
        (function (index) {
            setTimeout(() => {
                spawnItem(item, 36 + index);
            }, 150 * index);
        })(i);
    }
}).setName("restoreitems");

register("guiMouseClick", (x, y, mouse, gui, e) => {
    if (!Settings.restoreinventory) {return;}
    if (hovering) {
        inventory = [];
        hovering = false;
        let items = Player.getInventory().getItems();
        for (let i = 0; i < items.length; i++) {
            let item = items[i];
            if (item != null) {
                inventory.push(item.getRawNBT());
            }
        }
        console.log(inventory);
        const chat = new TextComponent("&a&lYou have just switched modes! Click to restore your inventory?").setHoverValue("&e&lCLICK").setClick("run_command", "/restoreitems");
        ChatLib.chat(chat);
    }
});

register("itemTooltip", (list, item, e) => {
    if (!Settings.restoreinventory) {return;}
    if (item.getName() === "§aMode: §eBuild Mode" || item.getName() === "§aMode: §eSocial Mode") {
        hovering = true;
    } else {
        hovering = false;
    }
});