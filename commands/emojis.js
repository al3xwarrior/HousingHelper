const emojisString = '♥♡❤❥❣❦❧☝☞☜☟✌✍☛☚⛀⛁⛃⛂❁❤❈❂✦✎☣☠⚔⫽✯♣α๑⸕✧☘⸎ʬ♨᠅≈❣✆✪☀☽⏣✌♲☀⚠✿♪♫⓪ⓩ▲⁍⚚✖✔➜﴾﴿☬☄⚑Ⓑ☺♞✷⦾❏❐❑❒▀▁▂▃▄▅▆▇▉▊▋█▌▐▍▎▏▒░▓■▢◉○◌◍◎●◐◑◒◓◔◕◖◗❂☢⊗⊙◯〇⚫⬤◦⦿❍⊛⊚⊕⊖•∙★☆✡✦✧✩✪✫✬✭✮✯✰⁎⁑✢✣✤✥✱✲✳✴✵✶✷✸✹✺✻✼✽✾✿❀❁❂❃❇❈❉❊❋❄⋆✲࿏⭒⍟⭐✓✔✗✘☺☻ツ㋡☹⍨☠⍤⍢─━│┃┄┅┆┇┈┉┊┋┌┍┎┏┐┑┒┓└┕┖┗┘┙┚┛├┝┞┟┠┡┢┣┤┥┦┧┨┩┪┫┬┭┮┯┰┱┲┳┴┵┶┷┸┹┺┻┼┽┾┿╀╁╂╃╄╅╆╇╈╉╊╋⚌⚍⚎⚏═║╒╓╔╕╖╗╘╙╚╛╜╝╞╟╠╡╢╣╤╥╦╧╨╩╪╫╬╭╮╯╰╴╵╶╷╸╹╺╻╼╽╾╿↕↖↗↘↙↪↩↺↻▶➜➨➡➠➟➩➪➫➬➭➮➯➱➲➥➦➛➘➙➚➔⇪⇩⇨⇧⇦↷';
const emojis = emojisString.split('');

register('command', () => {
    var message = '';
    for (let i = 0; i < message.length; i++) {
        const char = message.substring(i, i + 1);
        const textComponent = new TextComponent(char);
        textComponent.setClick('run_command', 'ct copy ' + char);
        console.log(textComponent);
        message += textComponent;
    }
    ChatLib.chat(message);
})
    .setName('emojis')
    .setAliases(['unicode', 'unicodes']);
