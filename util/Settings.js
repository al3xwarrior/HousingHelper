import { @Vigilant, @TextProperty, @ColorProperty, @ButtonProperty, @SwitchProperty, @ColorProperty, @CheckboxProperty, @SelectorProperty, @SliderProperty, @ParagraphProperty } from 'Vigilance';
import { generateidea } from "../commands/generateIdea";
// import { openTemplateMenu } from "../features/templates/templatemenu";

@Vigilant("HousingHelper")
class Settings {
	
    @SwitchProperty({
        name: "&a&l&nEnabled",
        description: "Should the &eParkour Tracker&7 be active?",
        category: "Parkour Tracker"
    })
    parkourtrackerenabled = false;

    @SliderProperty({
        name: "Parkour Tracker &eTimer X Position",
        description: "This determines the position the text will show up, on the &cX&7 axis (Left and Right). 0 being the very left and 100 being the very right!\n\n&8[Default: &b10&8]",
        category: "Parkour Tracker",
        min: 0,
        max: 100
    })
    parkourxpos = 10;
    @SliderProperty({
        name: "Parkour Tracker &eTimer Y Position",
        description: "This determines the position the text will show up, on the &eY&7 axis (Up and Down). 0 being the very top and 100 being the very bottom!\n\n&8[Default: &b5&8]",
        category: "Parkour Tracker",
        min: 0,
        max: 100
    })
    parkourypos = 5;
    @TextProperty({
        name: "&cNo Parkour&f Text",
        description: "The text that shows when you are not currently active in &aParkour&7!",
        category: "Parkour Tracker",
    })
    parkournotstarted = "&aParkour Tracker: &cN/A";
    @TextProperty({
        name: "&aParkour Active&f Timer",
        description: "The text that shows when the &aParkour&7 is currently live!\n\n&8The placeholder &7{time} &8is where the time &6number&8 and &ddecimal&8 variables will be.",
        category: "Parkour Tracker",
    })
    parkouractive = "&aParkour Tracker: &2{time}";
    @TextProperty({
        name: "&aParkour&f Completion Text",
        description: "The text that shows when the &aParkour &7is ended!\n\n&8The placeholder &7{time}&8 is where the time &6number&8 and &ddecimal&8 variables will be.",
        category: "Parkour Tracker",
    })
    parkournotended = "&aParkour Tracker: &e&l{time}";

	@SwitchProperty({
        name: "Auto &dBoop",
        description: "Automatically &d/boop&7 a player when they &dboop&7 you!",
        category: "Automation"
    })
    autoboop = false;

    @SwitchProperty({
        name: "Auto &cL",
        description: "Automatically say &cL&7 in chat if someone gets &c&nbanned&r&7 by &6Watchdog&7!",
        category: "Automation"
    })
    watchdog = false;

    @SwitchProperty({
        name: "Anti &cChest Break",
        description: "When attempting to break a &6Chest&7, you will be required to &eclick&7 severel more times to &afully break it&7. Used to prevent breaking &cimportant chests&7!",
        category: "Tools"
    })
    antichestbreak = false;

    @SwitchProperty({
        name: "&3&l&nDebug&r &b&l&nMode",
        description: "Mainly used by &bAl3x&7!",
        category: "Other"
    })
    debugmode = false;

    @SwitchProperty({
        name: "Remove &dAsterisk",
        description: `Remove the annoying "&f*&7" symbol before &eHousing Text Messages&7.`,
        category: "Other"
    })
    removeasterisk = false;

    @SwitchProperty({
        name: "&dSound Stealer",
        description: "While in a &eHouse&7, if a &6Sound&7 is played the name, pitch and level will &3print&7 for you in &dchat&7!",
        category: "Tools"
    })
    stealsounds = false;

    @SwitchProperty({
        name: "&6Inventory &fRestorer",
        description: "When switching between &eBuild Mode&7 and &eSocial Mode&7 you will be given the option to &arestore your inventory&7!",
        category: "Tools"
    })
    restoreinventory = true;

    @SwitchProperty({
        name: "Better &9Visibility",
        description: "Changes the &f/visibility&7 menu to something more &dcustomizable&7 and &aunique&7!",
        category: "Tools"
    })
    betterVisibility = true;

    @SwitchProperty({
        name: "&eShow House",
        description: "Shows the &6Owner &7and &ahouse name &7in the top left of your screen.",
        category: "Show House"
    })
    showhouse = false;
    @SliderProperty({
        name: "Show House &eX Position",
        description: "This determines the position the text will show up, on the &cX&7 axis (Left and Right). 0 being the very left and 100 being the very right!\n\n&8[Default: &b5&8]",
        category: "Show House",
        min: 0,
        max: 100
    })
    showhousexpos = 5;
    @SliderProperty({
        name: "Show House &eY Position",
        description: "This determines the position the text will show up, on the &eY&7 axis (Up and Down). 0 being the very top and 100 being the very bottom!\n\n&8[Default: &b5&8]",
        category: "Show House",
        min: 0,
        max: 100
    })
    showhouseypos = 5;
    @ParagraphProperty({
        name: "Show House &eMessage",
        description: "Write the message that you want ShowHouse to show. Use {house} for the house name and {owner} for the owner's name.",
		category: "Show House"
    })
    showhousemessage = "Currently playing: {house}, by {owner}"

    @ButtonProperty({
        name: "&dGenerate &fIdea",
        description: "Click to generate a &2r&da&cn&9d&ao&em &aHousing Idea&7!\n\nYou can also use ''&f/generateidea&7''",
        placeholder: "&nGenerate",
        category: "Tools",
    })
    generateIdeaButton() {
        Client.currentGui.close();
        generateidea();
    }

    /*
    @ButtonProperty({
        name: "&3Templates",
        description: "Use &9HTSL&7 to import &aPremade&7 Functions into your house!",
        placeholder: "&nOpen",
        category: "Tools",
    })
    templateButton() {
        Client.currentGui.close();
        openTemplateMenu();
    }
    */

    @SwitchProperty({
        name: "&a&l&nEnabled",
        description: "Should the module checking for Cookies given and run the relative commands?",
        category: "Cookie Rewards"
    })
    cookieRewardsEnabled = false;
    
    @SwitchProperty({
        name: "&e&lFeatured Houses",
        description: "Should the module show the users who submitted a house on the &fHousing Browser &7in the &bHousingHub Discord&7?\n\n&7You can &asubmit &7your &fhouses &7by doing the command &f/addhouse &7in the discord!\n\n&7Featured Houses can be found in the &eHousing Lobby&7!",
        category: "Other"
    })
    featuredHouses = true;
	
	@ParagraphProperty({
        name: "&aCommand",
        description: "Insert the command without the '&f/&7' you want to be ran when a player gives a your House a Cookie!\n\nIn the command write '&f%player%&7' where you want the players name to be. For example '&fgivereward %player%&7' would run '&6/givereward Al3xWarrior&7'",
		category: "Cookie Rewards"
    })
    cookieRewardsCommand = "givereward %player%"

    @SwitchProperty({
        name: "&a&l&nEnabled",
        description: "Should the module checking for &bEgg Hunt&7 completions and run the relative commands?",
        category: "Egg Rewards"
    })
    eggRewardsEnabled = false;
	
	@ParagraphProperty({
        name: "&aCommand",
        description: "Insert the command without the '&f/&7' you want to be ran when a player finishes an Egg Hunt!\n\nIn the command write '&f%player%&7' where you want the players name to be. For example '&fgivereward %player%&7' would run '&6/givereward Al3xWarrior&7'",
		category: "Egg Rewards"
    })
    eggRewardsCommand = "givereward %player%"

    @SwitchProperty({
        name: "Show &6Initialize &fMessage",
        description: `Show the &r&a&lHousingHelper&a Loaded! &r&8(&r&7/housinghelper &r&8- &r&7/hh&8)&r&7when the &r&6module&r&7 reloads`,
        category: "Credits"
    })
    initializemsg = true;

    @SwitchProperty({
        name: "&a&l&nEnabled",
        description: "Should the module show a &e3d&7 model preview of the NPC &6skin&7 texture you are hovering over?",
        category: "Skin Preview"
    })
    skinPreviewEnabled = true;
    @SliderProperty({
        name: "Skin Preview &eX Position",
        description: "This determines the position the text will show up, on the &cX&7 axis (Left and Right). 0 being the very left and 100 being the very right!\n\n&8[Default: &b20&8]",
        category: "Skin Preview",
        min: 0,
        max: 100
    })
    skinPreviewXPos = 20;
    @SliderProperty({
        name: "Skin Preview &eY Position",
        description: "This determines the position the text will show up, on the &eY&7 axis (Up and Down). 0 being the very top and 100 being the very bottom!\n\n&8[Default: &b30&8]",
        category: "Skin Preview",
        min: 0,
        max: 100
    })
    skinPreviewYPos = 30;

    @SwitchProperty({
        name: "&a&l&nEnabled",
        description: "Should the module be &bautomuting&7 for the &cset words&7?",
		subcategory: "Muting",
        category: "Moderation"
    })
    moderationAutomuteEnabled = false;
    @ParagraphProperty({
        name: "&cWords to Mute For",
        description: "Insert the words you want players to be &c&nmuted&r &7for if they say. \n\nSeperate the words with a ',' followed by a space.",
        subcategory: "Muting",
		category: "Moderation"
    })
    moderationAutomuteWords = "Badword1, Badword2, Badword3, shush, hello"
    @SwitchProperty({
        name: "&a&l&nEnabled",
        description: "Should the module be &bautobanning&7 for the &cset words&7?",
		subcategory: "Banning",
        category: "Moderation"
    })
    moderationAutobanEnabled = false;
    @ParagraphProperty({
        name: "&cWords to Ban For",
        description: "Insert the words you want players to be &c&nbanned&r &7for if they say. \n\nSeperate the words with a ',' followed by a space.",
        subcategory: "Banning",
		category: "Moderation"
    })
    moderationAutobanWords = "Badword1, Badword2, Badword3, shush, hello"

    constructor() {
        this.initialize(this);
        this.setCategoryDescription("Credits", "&bHousingHelper&3 Credits\n\n&7While this mod was developed fully by &bAl3xWarrior&7 there are a few users who helped with ideas and specific parts of the code!\n\n&cBusterBrown1218 &8- &7Developed the &6ShowHouse &7module imported to &fHousingHelper\n\n&3sirhypernova&8 - &7Developed the main function for spawning fake NPCs!\n\n&6Pizz4Ninja&8 - &7Remade the whole module making everything look nicer, fixing typos and adding Easter Eggs!")
        this.setCategoryDescription("Egg Rewards", "&aEgg Rewards &7allows you to run &fcommands&7 when a user collects all the &dEggs&7 in the Housing Egg Hunt! This requires &6Housing+&7 as you need it for the &eEgg Hunt Item&7!")
        this.setCategoryDescription("Cookie Rewards", "&6Cookie Rewards&7 allows you to run &fcommands&7 when a user gifts you a &6Cookie&7! Please note that only the owner receives cookie messages!")
        this.setCategoryDescription("Show House", "&aShowHouse&7 is a module originally created by &3BusterBrown1218&f!\n\n&8Al3x was given permission to add it to this mod, however small changes were made to the original.")
        this.setCategoryDescription("Automation", "&7Mostly just &ageneral&6 Hypixel&7 stuff. Nothing &atoo, &atoo&r&7 special!")
        this.setCategoryDescription("Tools", "&7Useful and unique &eHousing&7 utilities!")
        this.setCategoryDescription("Parkour Tracker", "Housing Parkour is not the greatest... But with this you can easily &atrack&e your current time&7!")
        this.setCategoryDescription("Skin Preview", "&7While in the &eNPC&7 Enity Skin Texture Selector Screen&7, a preview of the skin will pop up!\n\n&cNote:&f When first loading in skins, there ~may~ be FPS Drops!")
        this.setCategoryDescription("Moderation", "&7Auto &cexecute punishments &7based on certain &akeywords &7in &fchat&7!")
        // this.setSubcategoryDescription("General", "Category", "&7Shows off some &anifty&7 property examples!")
    }
}

export default new Settings();