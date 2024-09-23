import Settings from "../../Settings";

let confirm = Date.now()

register('playerInteract', (action, vec, e) => {
    if (!Settings().confirmCookie) return;
    const item = Player.getHeldItem();
    if (!item) return;
    if (item.getNBT().toString().includes("COOKIE_ITEM")) {
        if (Date.now() - confirm > 1500) {
            cancel(e);
            confirm = Date.now()
            ChatLib.chat("&a&lClick again to confirm cookie!");
        }
    }
})