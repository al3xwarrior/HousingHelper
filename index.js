import Settings from './util/Settings';

// Commands
import './commands/emojis';
import './commands/generateIdea';
import './commands/shortenedCommands';
import './commands/tphere';
import './commands/copyPasteLore';
import './commands/rainbowify';
import './commands/goldify';

// Automation
import './automation/autoBoop';
import './automation/autoWatchdog';
import './automation/antiChestBreak';

// Templates
// import "./features/templates/templatemenu";

// Features
import './features/creativeTab';
import './features/soundStealer';
import './features/removeAsterisk';
import './features/parkourTimer';
import './features/betterVisibility';
import './features/skinpreview';
import './features/eggRewards';
import './features/cookieRewards';
import './features/betterHousesNPC';
import './features/showHouse';
import './features/socialModeSwapItems';
// import "./features/antiParkourHack";
import './features/housingModeration';

// Featured Houses
import './featuredHouses/featuredhouses';

register('command', () => Settings.openGUI())
    .setName('housinghelper')
    .setAliases(['hh']);

if (Settings.initializemsg) {
    ChatLib.chat('&a&lHousingHelper&a Loaded! &8(&7/housinghelper&8 - &7/hh&8)');
}
