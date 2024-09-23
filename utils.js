/*
    Utilities for other files.
*/

const C10PacketCreativeInventoryAction = Java.type("net.minecraft.network.play.client.C10PacketCreativeInventoryAction");
const houseNameOwnerRegex = /§r§r§fYou are in §r§a(.*?)§r§f, by (.*)/g
const HouseGuestsCookiesRegex = /§r§r§fGuests: §r(?:§7|§a)(\d+)§r§7 \| §r§fCookies: §r§a(\d+)§r/g

export function inCreative() {
    return Player.asPlayerMP().player.field_71075_bZ.field_75098_d;
}

export function createItem(itemStack, slot = 36, damage = 0) {
    if (itemStack instanceof Item) {
        Client.sendPacket(new C10PacketCreativeInventoryAction(slot, itemStack));
        return;
    }
    const nbt = `{id:\"${itemStack}\",Count:1b,Damage:${damage}s}`
    let item = getItemFromNBT(nbt);
    Client.sendPacket(new C10PacketCreativeInventoryAction(slot, item.getItemStack()));
}

export function getItemFromNBT(nbtStr) {
    let nbt = net.minecraft.nbt.JsonToNBT.func_180713_a(nbtStr); // Get MC NBT object from string
    let count = nbt.func_74771_c('Count') // get byte
    let id = nbt.func_74779_i('id') // get string
    let damage = nbt.func_74765_d('Damage') // get short
    let tag = nbt.func_74781_a('tag') // get tag
    let item = new Item(id); // create ct item object
    item.setStackSize(count);
    item = item.getItemStack(); // convert to mc object
    item.func_77964_b(damage); // set damage of mc item object
    if (tag) item.func_77982_d(tag); // set tag of mc item object
    item = new Item(item); // convert back to ct object
    return item;
}

export function inHouse() {
    return TabList.getFooter().removeFormatting().includes(", by");
}

export function getHouseName() {
    if (!inHouse) return "N/A";
    let footer = TabList.getFooter().split("\n");
    if (footer.length < 2) return "N/A";
    return footer[1].substring(17).split("§r§f, by")[0];
}
export function getHouseOwner() {
    if (!inHouse) return "N/A";
    let footer = TabList.getFooter().split("\n");
    if (footer.length < 2) return "N/A";
    return footer[1].substring(17).split("§r§f, by")[1];
}
export function getHouseGuests() {
    if (!inHouse) return -1;
    let footer = TabList.getFooter().split("\n");
    if (footer.length < 2) return -1;
    footer = footer[5].split(" ");
    return footer[1];
}
export function getHouseCookies() {
    if (!inHouse) return -1;
    let footer = TabList.getFooter().split("\n");
    if (footer.length < 2) return -1;
    footer = (footer.length > 6) ? footer[5].split(" ") : footer[3].split(" ");
    return footer[4];
}