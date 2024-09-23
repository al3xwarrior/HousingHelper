import Settings from "../../Settings";

let players = {}
let currentPlayer = "";
let lookingForId = 0;

function playerJoined(player) {
    if (player.split(" ").length > 1) player = player.split(" ")[1];
    console.log(`Player: ${player}`)
    lookingForId = Date.now();
    currentPlayer = player;
}

function playerIDMessage(id, e) {
    id = parseInt(id);
    if (Date.now() - lookingForId < 1000 && currentPlayer != "") {
        players[id] = currentPlayer;
        lookingForId = 0;
        console.log(`Logged ${currentPlayer} to #${id}`);
    }

    if (Settings().playeridconvert && players[id]) {
        let message = new Message(EventLib.getMessage(e)).getFormattedText();
        cancel(e);
        let newMessage = message.replace(`Player#${id}`, players[id]).replace(`P#${id}`, players[id]);
        if (Settings().removeAsterisk) newMessage = newMessage.replace("* ", "");
        new Message(newMessage).chat();
    }   
}

register('worldLoad', () => {players = {}});
register('chat', (player) => {playerJoined(player)}).setCriteria("${player} entered the world.");
register('chat', playerIDMessage).setCriteria("Player#${id}").setContains();
register('chat', playerIDMessage).setCriteria("P#${id}").setContains();

/*
register('actionBar', (msg, e) => {
    // credits to stuffy for rebuilding of chat messages
	let message = new Message(EventLib.getMessage(e)).getMessageParts();

    let newMessage = new Message()
    for(component in message){
        if (message[component].getText() != `§7* §r`) {
            newMessage.addTextComponent(message[component])
        }
    }

    cancel(e)
    newMessage.chat()
}).setCriteria('${msg}');
*/