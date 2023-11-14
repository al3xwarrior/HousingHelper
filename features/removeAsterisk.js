import Settings from "../util/Settings"

register("chat", (msg, e) => {
    if (Settings.removeasterisk === false) {return;}
    ChatLib.chat(msg);
    cancel(e);
}).setCriteria("&r&7* ${msg}"); // why do i have to put &r that took me so long to figure out