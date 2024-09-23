const emojis = JSON.parse(FileLib.read("HousingHelper", "src/utils/emojis.json"))

let message = new Message("");

for (let property in emojis) {
    message.addTextComponent(`\n&6${property}: `);
    let emojisArray = emojis[property].split(' ');
    for (i = 0; i < emojisArray.length; i++) {
        message.addTextComponent(new TextComponent(`&e${emojisArray[i]}`).setClick('run_command', `/chattriggers copy ${emojisArray[i]}`).setHover('show_text', `&6Click to Copy &e${emojisArray[i]}`));
    }
}

register("command", () => {
    ChatLib.chat("&8&m---------------------------------------")
    ChatLib.chat(message)
    ChatLib.chat("&8&m---------------------------------------")
}).setName("emojis").setAliases(["emoji", "unicode", "unicodes"]);