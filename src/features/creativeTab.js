import CreativeTab from 'CreativeTabs';
import Settings from '../../Settings';
import { getItemFromNBT } from '../../utils';

const MixerItem = getItemFromNBT(`{id:"minecraft:skull",Count:1b,tag:{SkullOwner:{Id:"c569c10d-d9d9-25fe-ad0a-1ec432affee8",hypixelPopulated:1b,Properties:{textures:[0:{Value:"eyJ0aW1lc3RhbXAiOjE0Nzk2OTE2MTg5NDcsInByb2ZpbGVJZCI6ImQ2ZTVjODM2OGE3NTQ5MTNhNjQwNTk4MTI0MjgzMjI4IiwicHJvZmlsZU5hbWUiOiJQbGFuayIsInRleHR1cmVzIjp7IlNLSU4iOnsidXJsIjoiaHR0cDovL3RleHR1cmVzLm1pbmVjcmFmdC5uZXQvdGV4dHVyZS9kOGM1N2NmOTFmODk5YzQ4ZWZiMTQwMmJhMmFhZWY2M2M5NWZjOGFhZTE5ZWEwNDczOTQ4YzFlMzU3NWZiYyJ9fX0="}]}},display:{Lore:[0:"§7When people right click this head they",1:"§7will be notified of your Mixer channel!",2:"",3:"§c§lCan only be placed once!",4:"",5:"§6Alias: §7§7/social mixer channel <Channel>"],Name:"§3Mixer"}},Damage:3s}`);
const NullBowItem = getItemFromNBT(`{id:"minecraft:bow",Count:1b,tag:{ench:[0:{lvl:10s,id:51s}],Unbreakable:1b,display:{Lore:[0:"made by Al3x"],Name:"Null bow"}},Damage:4s}`);
const NullHousingMenuItem = getItemFromNBT(`{id:"minecraft:nether_star",Count:1b,tag:{HideFlags:254,display:{Lore:[0:"Made by Al3x"],Name:"§dHousing Menu§7 (Right Click)"},ExtraAttributes:{HOUSING_MENU:"OWNER"}},Damage:3s}`);
const NullCookieItem = getItemFromNBT(`{id:"minecraft:cookie",Count:1b,tag:{display:{Name:"§6§lNull Cookies"},ExtraAttributes:{MadeBy30hp:"MadeBy30hp",COOKIE_ITEM:"MadeBy30hp"}},Damage:30s}`);
const Stage1BowItem = getItemFromNBT(`{id:"minecraft:bow",Count:1b,tag:{ench:[0:{lvl:10s,id:51s}],Unbreakable:1b},Damage:1s}`);
const Stage2BowItem = getItemFromNBT(`{id:"minecraft:bow",Count:1b,tag:{ench:[0:{lvl:10s,id:51s}],Unbreakable:1b},Damage:2s}`);
const Stage3BowItem = getItemFromNBT(`{id:"minecraft:bow",Count:1b,tag:{ench:[0:{lvl:10s,id:51s}],Unbreakable:1b},Damage:3s}`);
const DragonHeadItem = getItemFromNBT(`{id:"minecraft:skull",Count:1b,tag:{display:{Lore:[0:"§fThe dragon head is only visible to users",1:"§fon version 1.9 and higher"],Name:"Dragon Head"}},Damage:5s}`);
const glitchedRod = getItemFromNBT(`{id:"minecraft:fishing_rod",Count:1b,tag:{ench:[],Unbreakable:1b,HideFlags:4,ExtraAttributes:{MadeBy30hp:"MadeBy30hp"}},Damage:1s}`);
const glitchedMap = getItemFromNBT(`{id:"minecraft:filled_map",Count:1b,Damage:0s}`);
const doubleSlab = getItemFromNBT(`{id:"minecraft:stone_slab",Count:1b,tag:{display:{Lore:[0:"§7Data Value: 8"],Name:"§fDouble Stone Slab"}},Damage:0s}`);

const tpPadItem = getItemFromNBT(`{id:"minecraft:end_portal_frame",Count:1b,tag:{display:{Lore:[0:"§7Place this block in your house",1:"§7to place a Teleport Pad!"],Name:"§aTeleport Pad"}},Damage:0s}`);
const launchPadItem = getItemFromNBT(`{id:"minecraft:slime",Count:1b,tag:{overrideMeta:1b,display:{Lore:[0:"§7Place this block in your house",1:"§7to place a Launch Pad!"],Name:"§aLaunch Pad"},AttributeModifiers:[]},Damage:0s}`);
const parkourPadItem = getItemFromNBT(`{id:"minecraft:light_weighted_pressure_plate",Count:1b,tag:{display:{Lore:[0:"§7Place this block in your house",1:"§7to add a checkpoint to your",2:"§7parkour!"],Name:"§aParkour Block"}},Damage:0s}`);
const actionPadItem = getItemFromNBT(`{id:"minecraft:heavy_weighted_pressure_plate",Count:1b,tag:{display:{Lore:[0:"§7Place this block in your house",1:"§7to place an Action Pad!"],Name:"§aAction Pad"}},Damage:0s}`);
const hologramItem = getItemFromNBT(`{id:"minecraft:name_tag",Count:1b,tag:{display:{Lore:[0:"§7Place this in your house to",1:"§7place a Hologram!"],Name:"§aHologram"}},Damage:0s}`);
const npcItem = getItemFromNBT(`{id:"minecraft:skull",Count:1b,tag:{display:{Lore:[0:"§7Place this in your house to",1:"§7place an NPC!"],Name:"§aNPC"}},Damage:3s}`);
const actionButtonItem = getItemFromNBT(`{id:"minecraft:stone_button",Count:1b,tag:{display:{Lore:[0:"§7Place this block in your house",1:"§7to place an Action Button!"],Name:"§aAction Button"}},Damage:0s}`);
const statLeaderBoardItem = getItemFromNBT(`{id:"minecraft:book",Count:1b,tag:{display:{Lore:[0:"§7Place this in your house to",1:"§7place a Stat Leaderboard!"],Name:"§aStat Leaderboard"}},Damage:0s}`);
const parkourLeaderBoardItem = getItemFromNBT(`{id:"minecraft:book",Count:1b,tag:{display:{Lore:[0:"§7Place this in your house to",1:"§7place a parkour leaderboard!"],Name:"§aParkour Leaderboard"}},Damage:0s}`);
const trashCanItem = getItemFromNBT(`{id:"minecraft:cauldron",Count:1b,tag:{display:{Lore:[0:"§7Place this item in your house to",1:"§7place a Trash Can!"],Name:"§aTrash Can"},ExtraAttributes:{ITEM_ID:"TRASH_CAN"}},Damage:0s}`);
const biomeStickItem = getItemFromNBT(`{id:"minecraft:stick",Count:1b,tag:{ench:[],display:{Lore:[0:"§7Allows you to change the Biome",1:"§7at the §atargeted block§7!",2:"",3:"§7Biome: §eDesert",4:"§7Radius: §e3",5:"",6:"§eLeft-Click to change settings!",7:"§eRight-Click to use!"],Name:"§aBiome Stick§7 - §eDesert§7 (3)"},ExtraAttributes:{data:{biomeType:"DESERT",radius:3},ITEM_ID:"BIOME_STICK"}},Damage:0s}`);
const mailBoxItem = getItemFromNBT(`{id:"minecraft:skull",Count:1b,tag:{SkullOwner:{Id:"959ad474-edb5-2562-b32f-a0dd79b246f2",hypixelPopulated:1b,Properties:{textures:[0:{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYjRiZDlkZDEyOGM5NGMxMGM5NDVlYWRhYTM0MmZjNmQ5NzY1ZjM3YjNkZjJlMzhmN2IwNTZkYzdjOTI3ZWQifX19"}]}},display:{Lore:[0:"§7Place this block in your house",1:"§7to add a mailbox!"],Name:"§aMailbox"}},Damage:3s}`);
const eggHuntItem = getItemFromNBT(`{id:"minecraft:skull",Count:1b,tag:{SkullOwner:{hypixelPopulated:1b,Properties:{textures:[0:{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNWQ3MGU1OGNjMTNlMzk4YTIyMTU3NTU2YTkzODI3MzY5YmI3ZjQwMjIwYmQ3ZDg0ZTc3YmQzNWIwNzc0ZGZlIn19fQ=="}]},Name:"§BasicEgg"},display:{Lore:[0:"§7Place this block in your house",1:"§7to add an egg to your egg hunt!"],Name:"§aEgg Hunt Block"}},Damage:3s}`);
const twitterItem = getItemFromNBT(`{id:"minecraft:skull",Count:1b,tag:{SkullOwner:{Id:"e9229d17-4bf1-2558-b645-159d464674fa",hypixelPopulated:1b,Properties:{textures:[0:{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMzY4NWEwYmU3NDNlOTA2N2RlOTVjZDhjNmQxYmEyMWFiMjFkMzczNzFiM2Q1OTcyMTFiYjc1ZTQzMjc5In19fQ=="}]}},display:{Lore:[0:"§7When people right click this head they",1:"§7will be notified of your Twitter username!",2:"",3:"§c§lCan only be placed once!",4:"",5:"§6Alias: §7§7/social twitter username <Username>"],Name:"§bTwitter"}},Damage:3s}`);
const youtubeItem = getItemFromNBT(`{id:"minecraft:skull",Count:1b,tag:{SkullOwner:{Id:"19ae179c-626a-2c6c-9dd3-85da48e04063",hypixelPopulated:1b,Properties:{textures:[0:{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYjQzNTNmZDBmODYzMTQzNTM4NzY1ODYwNzViOWJkZjBjNDg0YWFiMDMzMWI4NzJkZjExYmQ1NjRmY2IwMjllZCJ9fX0="}]}},display:{Lore:[0:"§7When people right click this head they",1:"§7will be notified of your YouTube clean!",2:"",3:"§c§lCan only be placed once!",4:"",5:"§6Aliases:",6:"§7§7/social youtube clean <Clean>",7:"§7§7/social youtube channel <Channel>"],Name:"§cYouTube"}},Damage:3s}`);
const instagramItem = getItemFromNBT(`{id:"minecraft:skull",Count:1b,tag:{SkullOwner:{Id:"51e90bff-ff4c-2415-8d91-76a574f7c4d8",hypixelPopulated:1b,Properties:{textures:[0:{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYWM4OGQ2MTYzZmFiZTdjNWU2MjQ1MGViMzdhMDc0ZTJlMmM4ODYxMWM5OTg1MzZkYmQ4NDI5ZmFhMDgxOTQ1MyJ9fX0="}]}},display:{Lore:[0:"§7When people right click this head they",1:"§7will be notified of your Instagram username!",2:"",3:"§c§lCan only be placed once!",4:"",5:"§6Alias: §7§7/social instagram username <Username>"],Name:"§7Instagram"}},Damage:3s}`);
const twitchItem = getItemFromNBT(`{id:"minecraft:skull",Count:1b,tag:{SkullOwner:{Id:"6aec4f3d-abeb-24ca-bc8d-90eada050efa",hypixelPopulated:1b,Properties:{textures:[0:{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNDZiZTY1ZjQ0Y2QyMTAxNGM4Y2RkZDAxNThiZjc1MjI3YWRjYjFmZDE3OWY0YzFhY2QxNThjODg4NzFhMTNmIn19fQ=="}]}},display:{Lore:[0:"§7When people right click this head they",1:"§7will be notified of your Twitch channel!",2:"",3:"§c§lCan only be placed once!",4:"",5:"§6Alias: §7§7/social twitch channel <Channel>"],Name:"§5Twitch"}},Damage:3s}`);
const discordItem = getItemFromNBT(`{id:"minecraft:skull",Count:1b,tag:{SkullOwner:{Id:"3de2d3b4-b6b2-2eea-b5b6-45905ab77c38",hypixelPopulated:1b,Properties:{textures:[0:{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNzg3M2MxMmJmZmI1MjUxYTBiODhkNWFlNzVjNzI0N2NiMzlhNzVmZjFhODFjYmU0YzhhMzliMzExZGRlZGEifX19"}]}},display:{Lore:[0:"§7When people right click this head they",1:"§7will be notified of your Discord server!",2:"",3:"§c§lCan only be placed once!",4:"",5:"§6Aliases:",6:"§7§7/social discord server <Server>",7:"§7§7/social discord username <Username>"],Name:"§5Discord"}},Damage:3s}`);
const dragonEggItem = getItemFromNBT(`{id:"minecraft:dragon_egg",Count:1b,tag:{display:{Name:"§fDragon Egg"}},Damage:0s}`);
const chestbackgroundItem = getItemFromNBT(`{id:"minecraft:stained_glass_pane",Count:64b,tag:{ench:[0:{lvl:1s,id:51s}],HideFlags:1,display:{Name:"§0"},ExtraAttributes:{MadeBy30hp:"MadeBy30hp"}},Damage:15s}`);
const customCookie = getItemFromNBT(`{id:"minecraft:cookie",Count:1b,tag:{display:{Lore:[0:"§fThis item can be edited, and will still act",1:"§flike a Hypixel Cookie!",2:"",3:"§dMade by 30hp"],Name:"§6Custom Cookie"},ExtraAttributes:{MadeBy30hp:"MadeBy30hp",COOKIE_ITEM:"MadeBy30hp"}},Damage:0s}`);

const glitchedItems = CreativeTab.createTab('hhglitches');
glitchedItems.setSearchBar(false);
glitchedItems.setTitle('HousingHelper Glitched Items');
glitchedItems.setIcon(NullHousingMenuItem.getItemStack());
glitchedItems.setItems([MixerItem.getItemStack(), NullBowItem.getItemStack(), NullHousingMenuItem.getItemStack(), NullCookieItem.getItemStack(), Stage1BowItem.getItemStack(), Stage2BowItem.getItemStack(), Stage3BowItem.getItemStack(), DragonHeadItem.getItemStack(), glitchedRod.getItemStack(), glitchedMap.getItemStack(), doubleSlab.getItemStack()]);

const housingItems = CreativeTab.createTab('hhitems');
housingItems.setSearchBar(false);
housingItems.setTitle('HousingHelper Housing Items');
housingItems.setIcon(new Item('emerald').getItemStack());
housingItems.setItems([tpPadItem.getItemStack(), launchPadItem.getItemStack(), parkourPadItem.getItemStack(), actionPadItem.getItemStack(), hologramItem.getItemStack(), npcItem.getItemStack(), actionButtonItem.getItemStack(), statLeaderBoardItem.getItemStack(), parkourLeaderBoardItem.getItemStack(), trashCanItem.getItemStack(), biomeStickItem.getItemStack(), mailBoxItem.getItemStack(), eggHuntItem.getItemStack(), null, null, null, null, null, twitterItem.getItemStack(), youtubeItem.getItemStack(), instagramItem.getItemStack(), twitchItem.getItemStack(), discordItem.getItemStack(), null, null, null, null, null, null, null, null, null, null, null, null, null, dragonEggItem.getItemStack(), new Item('barrier').getItemStack(), chestbackgroundItem.getItemStack(), customCookie.getItemStack()]);

if (Settings().htslCreativeTab && FileLib.exists('./config/ChatTriggers/modules/HTSL')) {
    const htslItems = CreativeTab.createTab('htslitems');
    htslItems.setSearchBar(true);
    htslItems.setTitle('HTSL Items');
    htslItems.setIcon(new Item(267).getItemStack());

    let files = new java.io.File(`./config/ChatTriggers/modules/HTSL/imports/`).listFiles();
    let items = [];
    files.forEach(file => {
        if (file.toString().endsWith(".json")) {
            // Holy crap I got this in the first try
            items.push(getItemFromNBT(JSON.parse(FileLib.read(file.toString())).item).getItemStack());
        }
    });
    htslItems.setItems(items);
}

// used to grab item nbt
register('command', () => {
    const nbt = Player.getHeldItem().getRawNBT();
    console.log(nbt);
}).setName('copynbtdata');
