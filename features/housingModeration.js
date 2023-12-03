import Settings from '../util/Settings';

function removePreviousTags(name) {
    let array = name.split(' ');
    return array[array.length - 1];
}

register('chat', (fullplayer, message, e) => {
    if (!TabList.getFooter().includes('You are in')) {
        return;
    }
    const player = removePreviousTags(fullplayer);

    if (Settings.moderationAutomuteEnabled) {
        const words = Settings.moderationAutomuteWords.split(', ');

        for (let i = 0; i < words.length; i++) {
            let word = words[i];

            if (message.toLowerCase().includes(word.toLowerCase())) {
                let warning = new TextComponent(`&7[&4Auto Moderation&7] &cThe player &l${player}&r&c was just &nmuted&r&c! Click Here if you would like to revert this!`).setHoverValue('&cClick to undo!').setClick('run_command', '/h unmute ' + player);
                ChatLib.say('/h mute ' + player);
                ChatLib.chat(warning);
            }
        }
    }

    if (Settings.moderationAutobanEnabled) {
        const words = Settings.moderationAutobanWords.split(', ');

        for (let i = 0; i < words.length; i++) {
            const word = words[i];

            if (message.toLowerCase().includes(word.toLowerCase())) {
                let warning = new TextComponent(`&7[&4Auto Moderation&7] &cThe player &l${player}&r&c was just &nbanned&r&c! Click Here if you would like to revert this!`).setHoverValue('&cClick to undo!').setClick('run_command', '/h unban ' + player);
                ChatLib.say('/h ban ' + player);
                ChatLib.chat(warning);
            }
        }
    }
}).setCriteria('${player}: ${message}');
