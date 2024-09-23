import './src/imports';
import Settings from './Settings'

register('command', () => Settings().getConfig().openGui()).setName('housinghelper').setAliases(['hh']);

if (Settings().initializemsg) {
    ChatLib.chat('&a&lHousingHelper&a Loaded! &8(&7/housinghelper&8 - &7/hh&8)');
}