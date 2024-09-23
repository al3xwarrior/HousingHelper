import { Keybind } from "KeybindFix"

let keybindCooldown = 0;

new Keybind("//pos1", Keyboard.KEY_NONE, "HousingHelper").registerKeyPress(() => {
    if (Date.now() - keybindCooldown < 500) return;
    keybindCooldown = Date.now();
    ChatLib.say("//pos1");
});

new Keybind("//pos2", Keyboard.KEY_NONE, "HousingHelper").registerKeyPress(() => {
    if (Date.now() - keybindCooldown < 500) return;
    keybindCooldown = Date.now();
    ChatLib.say("//pos2");
});

new Keybind("//paste", Keyboard.KEY_NONE, "HousingHelper").registerKeyPress(() => {
    if (Date.now() - keybindCooldown < 500) return;
    keybindCooldown = Date.now();
    ChatLib.say("//paste");
});

new Keybind("//cut", Keyboard.KEY_NONE, "HousingHelper").registerKeyPress(() => {
    if (Date.now() - keybindCooldown < 500) return;
    keybindCooldown = Date.now();
    ChatLib.say("//cut");
});