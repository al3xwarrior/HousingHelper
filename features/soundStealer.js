import Settings from '../util/Settings';

register("soundPlay", (pos, name, volume, pitch, category, event) => {
    if (Settings.stealsounds === false || volume <= 0 || pitch <= 0 || 
        name.includes("step") || 
        name.includes("dig") ||
        name.includes("gui")) {return;}
    ChatLib.chat('&f[&dSound Stealer&f] &7Name: "' + name + '&r&7" Pitch: ' + Math.round(10*pitch)/10);
});