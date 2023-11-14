
import Settings from "../util/Settings"
import inCreative from "../util/inCreative"

register("hitBlock", (block, e) => {
    if (!inCreative() || !Settings.antichestbreak) {return;}

    if (block.type.name === "Chest" || block.type.name === "Trapped Chest") {
        cancel(e);
        ChatLib.chat("&f[&cAnti Chest Break&f]&7 You've been canceled from &cbreaking a chest&7!");
        World.playSound("note.bd", 1.0, 0.5);
    }
})