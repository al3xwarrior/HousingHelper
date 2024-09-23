
import Settings from '../../Settings'

const coordinatesRegex = /(-?\d+)x\s*(-?\d+)y\s*(-?\d+)z/

register('chat', (msg, e) => {
    if (!Settings().coordinateChat) return;

    const coordinates = msg.match(coordinatesRegex);
    if (coordinates) {
        cancel(e);

        const x = coordinates[1];
        const y = coordinates[2];
        const z = coordinates[3];

        const textComponent = new TextComponent(new Message(EventLib.getMessage(e)).getFormattedText());
        textComponent.setHover("show_text", `&eClick to teleport to &6${x}x ${y}y ${z}z&e.`);
        textComponent.setClick("run_command", `/tp ${x} ${y} ${z}`);
        textComponent.setFormatted(true);
        if (Settings().removeAsterisk) textComponent.setText(textComponent.getText().replace("* ", ""));
        ChatLib.chat(textComponent);

        return;
    }
}).setCriteria("${msg}");

register('chat', (msg, e) => {
	if (Settings().removeAsterisk) {
        // stop if it includes the player id, let the playerIdConverter handle it
        if (Settings().playeridconvert && (msg.includes("Player#") || msg.includes("P#"))) return;
        // stop if it includes coordinates, let the coordinate thing handle it
        if (Settings().coordinateChat && (msg.match(coordinatesRegex))) return;

        // credits to stuffy for rebuilding of chat messages
		let message = new Message(EventLib.getMessage(e)).getMessageParts();

        let newMessage = new Message()
        for(component in message){
            if (message[component].getText() != `§7* §r`) newMessage.addTextComponent(message[component])
        }

        cancel(e)
        newMessage.chat()
	}
}).setCriteria('&r&7* ${msg}')

