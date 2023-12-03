import { ChestMenu } from 'ChestMenu';
import Settings from '../util/Settings';

const Mouse = Java.type('org.lwjgl.input.Mouse');
const mouse = { x: -1, y: -1 };

function getItemFromNBT(nbtStr) {
    let nbt = net.minecraft.nbt.JsonToNBT.func_180713_a(nbtStr); // Get MC NBT object from string
    let count = nbt.func_74771_c('Count'); // get byte
    let id = nbt.func_74779_i('id'); // get string
    let damage = nbt.func_74765_d('Damage'); // get short
    let tag = nbt.func_74781_a('tag'); // get tag
    let item = new Item(id); // create ct item object
    item.setStackSize(count);
    item = item.getItemStack(); // convert to mc object
    item.func_77964_b(damage); // set damage of mc item object
    if (tag) item.func_77982_d(tag); // set tag of mc item object
    item = new Item(item); // convert back to ct object
    return item;
}

var inHouse = true;
register('worldLoad', () => {
    setTimeout(() => {
        if (TabList.getFooter().includes('You are in ')) {
            inHouse = true;
        } else {
            inHouse = false;
        }
    }, 800);
});

// DEFAULT SETTINGS
var inputtingCustomValue = false;

const defaultSettings = new ChestMenu('&9Visibility Menu', 3);
function setupDefaultSettingsItems() {
    defaultSettings.setItems([new Item(160).setName('&0').setDamage(8), new Item(160).setName('&0').setDamage(5), new Item(160).setName('&0').setDamage(13), new Item(160).setName('&0').setDamage(4), new Item(160).setName('&0').setDamage(1), new Item(160).setName('&0').setDamage(6), new Item(160).setName('&0').setDamage(14), new Item(160).setName('&0').setDamage(10), new Item(160).setName('&0').setDamage(8), new Item(160).setName('&0').setDamage(8), getItemFromNBT(`{id:"minecraft:skull",Count:1b,tag:{HideFlags:0,SkullOwner:{Id:"d5eb8d8c-3009-4791-aac1-8100d85e0556",hypixelPopulated:1b,Properties:{textures:[0:{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYjk4NWEyOTk1N2Q0MGZhNTY0ZDVlMzFjYmQ5MDVlMzY5NGE2MTYzOTNjZTEzNzEwYmZjMzFiMWI4YjBhNTIyZCJ9fX0="}]}},display:{Name:"§aVisibility 0"}},Damage:3s}`), getItemFromNBT(`{id:"minecraft:skull",Count:1b,tag:{SkullOwner:{Id:"78d8ef9a-5d12-40a1-9f40-8b8032922df4",hypixelPopulated:1b,Properties:{textures:[0:{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYTNlOWY0ZGJhZGRlMGY3MjdjNTgwM2Q3NWQ4YmIzNzhmYjlmY2I0YjYwZDMzYmVjMTkwOTJhM2EyZTdiMDdhOSJ9fX0="}]}},display:{Name:"§dVisibility 10"}},Damage:3s}`).getItemStack(), getItemFromNBT(`{id:"minecraft:skull",Count:1b,tag:{SkullOwner:{Id:"e8ceeabd-1102-4442-b79d-9bb4bb94d20d",hypixelPopulated:1b,Properties:{textures:[0:{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMjAwYmY0YmYxNGM4Njk5YzBmOTIwOWNhNzlmZTE4MjUzZTkwMWU5ZWMzODc2YTJiYTA5NWRhMDUyZjY5ZWJhNyJ9fX0="}]}},display:{Name:"§eVisibility 50"}},Damage:3s}`).getItemStack(), getItemFromNBT(`{id:"minecraft:skull",Count:1b,tag:{SkullOwner:{Id:"b4c98c2d-f960-4ede-94f8-eee3f82b62b5",hypixelPopulated:1b,Properties:{textures:[0:{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNTE4OWYzNDdmNDI0NTBjZDJhMmU5YjhhNTM5ODgwN2QyOGM3ZjQyNTRiZDk5YThhNDk5Y2U1NDM1MzIwOTU1In19fQ=="}]}},display:{Name:"§6Visibility 75"}},Damage:3s}`).getItemStack(), getItemFromNBT(`{id:"minecraft:skull",Count:1b,tag:{SkullOwner:{Id:"e9e4d4a3-c458-4df8-8aa7-cfe6488e9131",hypixelPopulated:1b,Properties:{textures:[0:{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMjA2MmQ4ZDcyZjU4OTFjNzFmYWIzMGQ1MmUwNDgxNzk1YjNkMmQzZDJlZDJmOGI5YjUxN2Q3ZDI4MjFlMzVkNiJ9fX0="}]}},display:{Name:"§cVisibility 100"}},Damage:3s}`).getItemStack(), getItemFromNBT(`{id:"minecraft:skull",Count:1b,tag:{SkullOwner:{Id:"5bb51368-a92d-473d-b057-3021371517b1",hypixelPopulated:1b,Properties:{textures:[0:{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYzY1ZjNiYWUwZDIwM2JhMTZmZTFkYzNkMTMwN2E4NmE2MzhiZTkyNDQ3MWYyM2U4MmFiZDlkNzhmOGEzZmNhIn19fQ=="}]}},display:{Name:"§cVisibility Unlimited!"}},Damage:3s}`).getItemStack(), new Item(323).setName('&5Custom Visibility'), new Item(160).setName('&0').setDamage(8), new Item(160).setName('&0').setDamage(8), new Item(160).setName('&0').setDamage(5), new Item(160).setName('&0').setDamage(13), new Item(160).setName('&0').setDamage(4), new Item(160).setName('&0').setDamage(1), new Item(160).setName('&0').setDamage(6), new Item(160).setName('&0').setDamage(14), new Item(160).setName('&0').setDamage(10), new Item(160).setName('&0').setDamage(8)]);
}
setupDefaultSettingsItems();

defaultSettings.onClick((item, slotNumber) => {
    if (slotNumber < defaultSettings.getNumberOfSlots()) {
        mouse.x = Mouse.getX();
        mouse.y = Mouse.getY();

        const itemname = item.getName();
        if (itemname === '§5Custom Visibility') {
            World.playSound('note.pling', 1.0, 2.0);
            inputtingCustomValue = true;
            ChatLib.chat('&a&lPlease Input the Number you want to Use for &d&lCUSTOM VISIBILITY&a&l!');
            Client.currentGui.close();
        } else if (itemname.includes('Visibility')) {
            World.playSound('note.pling', 1.0, 2.0);
            const split = itemname.split(' ');
            if (!split[0].includes('Visibility')) {
                return;
            }
            if (split[1] === 'Unlimited!') {
                ChatLib.command(`visibility 250`);
            } else {
                ChatLib.command(`visibility ${split[1]}`);
            }
            Client.currentGui.close();
        }
    }
});

register('chat', (value, e) => {
    if (!Settings.betterVisibility) {
        return;
    }
    cancel(e);
    if (value.includes('UNLIMITED')) {
        Client.showTitle(`&0`, `&aVisibility Updated to &cUnlimited&a!`, 8, 100, 8);
    } else {
        Client.showTitle(`&0`, `&aVisibility Updated to &e${value}&a!`, 8, 100, 8);
    }
    World.playSound('note.pling', 1.0, 2.0);
}).setCriteria('Visibility set to ${value}!');

register('messageSent', (msg, e) => {
    if (!Settings.betterVisibility) {
        return;
    }
    if (!inputtingCustomValue) {
        return;
    }
    if (msg.toLowerCase() === 'cancel') {
        cancel(e);
        ChatLib.chat('&c&lYou have canceled choosing a &d&lCustom Visibility&c&l!');
        World.playSound('mob.cat.meow', 1.0, 0.5);
        inputtingCustomValue = false;
    } else {
        cancel(e);
        inputtingCustomValue = false;
        ChatLib.command(`visibility ${parseInt(msg)}`);
    }
});

register('guiOpened', () => {
    if (!Settings.betterVisibility) {
        return;
    }
    setTimeout(() => {
        if (Player.getContainer() && Player.getContainer().getName() === 'Visibility') {
            Client.currentGui.close();
            defaultSettings.open();
        }
    }, 10);
});

register('command', (arg) => {
    if (!Settings.betterVisibility) {
        if (arg) {
            ChatLib.say('/hypixelcommand:visibility ' + arg);
        } else {
            ChatLib.say('/hypixelcommand:visibility');
        }
        return;
    }
    defaultSettings.open();
})
    .setName('visibility')
    .setAliases(['visiblity', 'visi', 'visible']);

register('tick', () => {
    if (inHouse === true) {
        setupDefaultSettingsItems();
    }
});
