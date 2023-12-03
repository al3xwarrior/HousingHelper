register('command', (user) => {
    if (!user) {
        ChatLib.chat('&cYou need to specify a user!');
        return;
    }
    ChatLib.command('tp ' + user + ' ' + Player.getName());
}).setName('tphere');
