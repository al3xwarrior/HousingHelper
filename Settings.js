// Make sure these go to the right directory 
import Settings from "Amaterasu/core/Settings"
import DefaultConfig from "Amaterasu/core/DefaultConfig"
const config = new DefaultConfig("HousingHelper", "data/Settings().json")

.addSwitch({
    category: "Discord Bridge",
    configName: "discordBridgeEnabled",
    title: "&a&nEnabled",
    description: "&7Toggles if &echat messages &7are forwarded to &9Discord&7.\n\n&c&o*Requires Configuration Below*",
    subcategory: ""
})
.addTextInput({
    category: "Discord Bridge",
    configName: "discordBridgeWebhook",
    title: "&dWebhook",
    description: "&7This should be a link too your &9Discord Webhook &7the module will send the messages too.",
    value: "",
    placeHolder: "",
    subcategory: "Required"
})
.addTextInput({
    category: "Discord Bridge",
    configName: "discordBridgeName",
    title: "&aName",
    description: "&7What the name the &9Discord Webhook &7should display.\n\n&6&o*Placeholders can be used here. Refer above for a list*",
    value: "",
    placeHolder: "",
    subcategory: "Customization"
})
.addTextInput({
    category: "Discord Bridge",
    configName: "discordBridgeTitle",
    title: "&cTitle",
    description: "&7What the title the &9Discord Webhook &7embed should display.\n\n&6&o*Placeholders can be used here. Refer above for a list*",
    value: "",
    placeHolder: "",
    subcategory: "Customization"
})
.addTextInput({
    category: "Discord Bridge",
    configName: "discordBridgeDescription",
    title: "&eDescription",
    description: "&7What the description the &9Discord Webhook &7embed should display.\n\n&6&o*Placeholders can be used here. Refer above for a list*",
    value: "",
    placeHolder: "",
    subcategory: "Customization"
})
.addTextInput({
    category: "Discord Bridge",
    configName: "discordBridgeFooter",
    title: "&3Footer",
    description: "&7What the footer the &9Discord Webhook &7embed should display.\n\n&6&o*Placeholders can be used here. Refer above for a list*",
    value: "",
    placeHolder: "",
    subcategory: "Customization"
})
.addTextInput({
    category: "Discord Bridge",
    configName: "discordBridgeThumbnailURL",
    title: "&6Thumbnail URL",
    description: "&7What the thumbnail the &9Discord Webhook &7should display. This should be a &flink &7to an image.",
    value: "",
    placeHolder: "",
    subcategory: "Customization"
})
.addTextInput({
    category: "Discord Bridge",
    configName: "discordBridgeIconURL",
    title: "&bIcon URL",
    description: "&7What the icon the &9Discord Webhook &7should display. This should be a &flink &7to an image.",
    value: "",
    placeHolder: "",
    subcategory: "Customization"
})
.addSwitch({
    category: "Chat Utilities",
    configName: "coordinateChat",
    title: "&e&nCoordinates",
    description: "&7Chat messages that include coordinates formated like &a1x -5y 10z &7are made clickable and will run the &ftp command &7for those &ecoordinates&7.\n\n&eExample: &fSomeone found a &6Rare Item &fat &25x 101y -56z&f!",
    subcategory: ""
})
.addSwitch({
    category: "Chat Utilities",
    configName: "removeAsterisk",
    title: "&7&nRemove Asterisk",
    description: "&7Remove the &f* &7symbol from &eHousing Messages&7.",
    subcategory: ""
})
.addSwitch({
    category: "Utilities",
    configName: "confirmCookie",
    title: "&6&nConfirm Cookie",
    description: "&7Requires you to &eclick &7twice to give a House &6Cookies&7.",
    subcategory: ""
})
.addSwitch({
    category: "Utilities",
    configName: "soundStealer",
    title: "&d&nSound Stealer",
    description: "&7Prints out &5sounds &7played to your &fClient &7in chat.",
    subcategory: ""
})
.addSwitch({
    category: "Utilities",
    configName: "restoreinventory",
    title: "&c&nSocial Mode Swap Inventory Restorer",
    description: "When switching between Build Mode and Social Mode, you are asked if you would like to restore your items.",
    subcategory: ""
})
.addSwitch({
    category: "Utilities",
    configName: "antichestbreak",
    title: "&c&nAnti Chest Break",
    description: "&7To prevent &aaccidiently &7breaking &cimportant &7chests. It will &4cancel &7the punch.",
    subcategory: ""
})
.addSwitch({
    category: "Utilities",
    configName: "autoBoop",
    title: "&d&nAuto Boop",
    description: "&7Automatically send a &d/boop &7to someone who sends it too you.",
    subcategory: ""
})
.addSwitch({
    category: "Skin Preview",
    configName: "skinPreviewEnabled",
    title: "&a&nEnabled",
    description: "&7Toggle if the NPC Skin Preview will be shown.",
    subcategory: ""
})
.addSlider({
    category: "Skin Preview",
    configName: "skinPreviewXPos",
    title: "&7Skin Preview &eX&7 Position",
    description: "&7This determines the position the text will show up, on the &cX&7 axis (Left and Right). 0 being the very left and 100 being the very right!\n\n&8[Default: &b20&8]",
    options: [0, 100],
    value: 0,
    subcategory: ""
})
.addSlider({
    category: "Skin Preview",
    configName: "skinPreviewYPos",
    title: "&7Skin Preview &eY &7Position",
    description: "&7This determines the position the text will show up, on the &eY&7 axis (Up and Down). 0 being the very top and 100 being the very bottom!\n\n&8[Default: &b30&8]",
    options: [0, 100],
    value: 0,
    subcategory: ""
})
.addSwitch({
    category: "Show House",
    configName: "showHouse",
    title: "&a&nEnabled",
    description: "Credits to BusterBrown1218",
    subcategory: ""
})
.addSlider({
    category: "Show House",
    configName: "showHouseScale",
    title: "&b&nText Scale",
    description: "&7This determines the scale the text will show up as\n\n&8[Default: &b12&8]",
    options: [5, 25],
    value: 5,
    subcategory: ""
})
.addSlider({
    category: "Show House",
    configName: "showHouseXPos",
    title: "&b&nText X Position",
    description: "&7This determines the position the text will show up, on the &cX&7 axis (Left and Right). 0 being the very left and 100 being the very right!\n\n&8[Default: &b2&8]",
    options: [0, 100],
    value: 0,
    subcategory: ""
})
.addSlider({
    category: "Show House",
    configName: "showHouseYPos",
    title: "&b&nText Y Position",
    description: "&7This determines the position the text will show up, on the &eY&7 axis (Up and Down). 0 being the very top and 100 being the very bottom!\n\n&8[Default: &b2&8]",
    options: [0, 100],
    value: 0,
    subcategory: ""
})
.addSwitch({
    category: "Show House",
    configName: "showHouseBackgroundShadow",
    title: "&7&nBackground Shadow",
    description: "&7Should the displayed text include a &5Shadow&7.",
    subcategory: ""
})
.addSwitch({
    category: "HTSL Addons",
    configName: "htslCreativeTab",
    title: "&a&nHTSL Items Creative Tab",
    description: "&7Items saved using the &f/htsl saveitem &7command will be added to a new tab in &eCreative&7.\n\n&c&o*Refreshes when the /ct reload command is ran*",
    subcategory: ""
})
.addSwitch({
    category: "PlayerID Converter",
    configName: "playeridconvert",
    title: "&a&nEnabled",
    description: "&7Toggles if &fPlayer IDs &7will automatically be converted to &6names&7.",
    subcategory: ""
})
.addSwitch({
    category: "Parkour Tracker",
    configName: "parkourtrackerenabled",
    title: "&a&nEnabled",
    description: "Should the &eParkour Tracker&7 be active.",
    subcategory: ""
})
.addSlider({
    category: "Parkour Tracker",
    configName: "parkourxpos",
    title: "Parkour Tracker &eTimer X Position",
    description: "&7This determines the position the text will show up, on the &cX&7 axis (Left and Right). 0 being the very left and 100 being the very right!\n\n&8[Default: &b10&8]",
    options: [0, 100],
    value: 0,
    subcategory: ""
})
.addSlider({
    category: "Parkour Tracker",
    configName: "parkourypos",
    title: "Parkour Tracker &eTimer Y Position",
    description: "&7This determines the position the text will show up, on the &eY&7 axis (Up and Down). 0 being the very top and 100 being the very bottom!\n\n&8[Default: &b5&8]",
    options: [0, 100],
    value: 0,
    subcategory: ""
})
.addTextInput({
    category: "Parkour Tracker",
    configName: "parkournotstarted",
    title: "&cNo Parkour Text",
    description: "&7The text that shows when you are not currently active in &aParkour&7!",
    value: "",
    placeHolder: "",
    subcategory: ""
})
.addTextInput({
    category: "Parkour Tracker",
    configName: "parkouractive",
    title: "&aParkour Active Timer",
    description: "&7The text that shows when the &aParkour&7 is currently live!\n\n&8The placeholder &7{time} &8is where the time &6number&8 and &ddecimal&8 variables will be.",
    value: "",
    placeHolder: "",
    subcategory: ""
})
.addTextInput({
    category: "Parkour Tracker",
    configName: "parkournotended",
    title: "&6Parkour Completion Text",
    description: "&7The text that shows when the &aParkour &7is ended!\n\n&8The placeholder &7{time}&8 is where the time &6number&8 and &ddecimal&8 variables will be.",
    value: "",
    placeHolder: "",
    subcategory: ""
})
.addSwitch({
    category: "Cookie Rewards",
    configName: "cookieRewardsEnabled",
    title: "&a&nEnabled",
    description: "Should the module checking for Cookies given and run the relative commands.",
    subcategory: ""
})
.addTextInput({
    category: "Cookie Rewards",
    configName: "cookieRewardsCommand",
    title: "&aCommand",
    description: "Insert the command without the \"&f/&7\" you want to be ran when a player gives a your House a Cookie!\n\nIn the command write \"&f{player}&7\" where you want the players name to be. For example \"&fgivereward {player}&7\" would run \"&6/givereward Al3xWarrior&7\"",
    value: "",
    placeHolder: "",
    subcategory: ""
})
.addSwitch({
    category: "Egg Rewards",
    configName: "eggRewardsEnabled",
    title: "&a&nEnabled",
    description: "Should the module checking for the Egg Hunt being finished and run the relative commands.",
    subcategory: ""
})
.addTextInput({
    category: "Egg Rewards",
    configName: "eggRewardsCommand",
    title: "&aCommand",
    description: "Insert the command without the \"&f/&7\" you want to be ran when a player finds all the Eggs in your House!\n\nIn the command write \"&f{player}&7\" where you want the players name to be. For example \"&fgivereward {player}&7\" would run \"&6/givereward Al3xWarrior&7\"",
    value: "",
    placeHolder: "",
    subcategory: ""
})

const setting = new Settings("HousingHelper", config, "data/ColorScheme.json") // make sure to set your command with [.setCommand("commandname")]

export default () => setting.settings