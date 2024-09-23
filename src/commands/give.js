import { createItem, inCreative } from "../../utils";

register("command", (item, data = 0) => {

    if (!inCreative) return ChatLib.chat("&c&lYou need to be in creative!");
    if (!item) return ChatLib.chat("&c&lYou need to specify an item!");

    try {
        if (data > 0) createItem(item, Player.getHeldItemIndex() + 36, data);
        else createItem(item, Player.getHeldItemIndex() + 36);
        ChatLib.chat("&a&lYou have been given 1x " + item + "&a&l!")
        World.playSound("random.orb", 0.7, 1.0);
    } catch (error) {
        console.log(error);
        ChatLib.chat("&c&lAn item by that name does not exist!");
        World.playSound("mob.cat.purr", 0.7, 0.5);
    }
    

}).setName("give").setAliases(["i"]);